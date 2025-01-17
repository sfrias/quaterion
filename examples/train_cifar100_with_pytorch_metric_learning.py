import argparse
import os
from typing import Dict, Union

import pytorch_lightning as pl
import torch
import torch.nn as nn
from pytorch_metric_learning import losses, miners

from quaterion import Quaterion, TrainableModel
from quaterion.dataset import (
    GroupSimilarityDataLoader,
    SimilarityGroupDataset,
)
from quaterion.loss import SimilarityLoss
from quaterion.loss.extras import PytorchMetricLearningWrapper
from quaterion_models.heads import EmptyHead, EncoderHead
from quaterion_models.encoders import Encoder


try:
    import torchvision
    import torchvision.datasets as datasets
    import torchvision.transforms as transforms
except ImportError:
    import sys

    print("You need to install torchvision for this example")
    sys.exit(1)


def get_dataloader():
    # Use Mean and std values for the ImageNet dataset as the base model was pretrained on it.
    # taken from https://www.geeksforgeeks.org/how-to-normalize-images-in-pytorch/
    mean = [0.485, 0.456, 0.406]
    std = [0.229, 0.224, 0.225]
    path = os.path.join(os.path.expanduser("~"), "torchvision", "datasets")

    transform = transforms.Compose(
        [
            transforms.RandomCrop(32, padding=4),
            transforms.RandomHorizontalFlip(),
            transforms.ToTensor(),
            transforms.Normalize(mean, std),
        ]
    )

    dataset = SimilarityGroupDataset(
        datasets.CIFAR100(root=path, download=True, transform=transform)
    )
    dataloader = GroupSimilarityDataLoader(dataset, batch_size=128, shuffle=True)
    return dataloader


class MobilenetV3Encoder(Encoder):
    def __init__(self, embedding_size: int):
        super().__init__()
        self.encoder = torchvision.models.mobilenet_v3_small(pretrained=True)
        self.encoder.classifier = nn.Sequential(nn.Linear(576, embedding_size))

        self._embedding_size = embedding_size

    @property
    def trainable(self) -> bool:
        return True

    @property
    def embedding_size(self) -> int:
        return self._embedding_size

    def forward(self, images):
        return self.encoder.forward(images)


class Model(TrainableModel):
    def __init__(self, embedding_size: int, lr: float):
        self._embedding_size = embedding_size
        self._lr = lr
        super().__init__()

    def configure_encoders(self) -> Union[Encoder, Dict[str, Encoder]]:
        return MobilenetV3Encoder(self._embedding_size)

    def configure_head(self, input_embedding_size) -> EncoderHead:
        return EmptyHead(input_embedding_size)

    def configure_loss(self) -> SimilarityLoss:
        loss = losses.ArcFaceLoss(embedding_size=self._embedding_size, num_classes=100)
        miner = miners.MultiSimilarityMiner()
        return PytorchMetricLearningWrapper(loss, miner)

    def configure_optimizers(self):
        optimizer = torch.optim.Adam(self.model.parameters(), self._lr)
        return optimizer


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument(
        "--embedding-size", type=int, default=128, help="Size of the embedding vector"
    )

    ap.add_argument("--lr", type=float, default=1e-4, help="Learning rate")

    args = ap.parse_args()

    model = Model(
        embedding_size=args.embedding_size,
        lr=args.lr,
    )

    train_dataloader = get_dataloader()

    trainer = pl.Trainer(
        gpus=1 if torch.cuda.is_available() else 0, num_nodes=1, max_epochs=10
    )

    Quaterion.fit(
        trainable_model=model,
        trainer=trainer,
        train_dataloader=train_dataloader,
    )
