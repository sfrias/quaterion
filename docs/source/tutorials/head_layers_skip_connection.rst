Head Layers: Skip Connection
============================

When fine-tuning models, the question of preserving the predictive ability of the original model is particularly acute.
It is essential to minimize losses on the target dataset and keep it working in the general case.
In other words, we need to avoid `catastrophic forgetting <https://en.wikipedia.org/wiki/Catastrophic_interference>`_.

A common yet naive approach is to freeze the base model and train only the newly initialized top layer, followed by possible unfreezing.

However, this does not solve the problem of the head layer itself.
When randomly initialized, it destroys the useful signal that is coming from the main encoder.

This may lead to several problems such as overfitting on the training dataset, being stuck in a local minimum, and unstable loss values among others, failing to effectively tune the parameters of the base model.

One possible solution to these problems is to use the `Skip-Connection <https://quaterion-models.qdrant.tech/quaterion_models.heads.skip_connection_head.html#module-quaterion_models.heads.skip_connection_head>`_ architecture as a final layer.

::

  ┌───────────────┐
  │    Encoder    │
  └───────┬───────┘
          ├──────────┐
  ┌───────┴───────┐  │
  │  Skip-Dropout │  │
  └───────┬───────┘  │
  ┌───────┴───────┐  │
  │     Linear    │  │
  └───────┬───────┘  │
  ┌───────┴───────┐  │
  │     Gated     │  │
  └───────┬───────┘  │
          + <────────┘
          │

The skip-connection layer is similar to the residual block introduced as a part of the `ResNet architecture <https://arxiv.org/abs/1512.03385>`_.

The layer passes the signal through 2 routes: in one, it remains unchanged, but in the second, it passes through the linear and gated layers.
The Gated layer works as a switch. If one of its elements is zeroed, the layer will not change the signal in that element.
Otherwise, the signal will be a combination of the original and converted signals.

Due to the zeroing of the Gated layer initially, the output embedding of the model at the beginning of training is equal to the embedding of the pre-trained encoder.
This allows you to get good gradients at the start of training and not lose the useful signal.

Using SkipConnection in Quaterion is as easy as using a regular linear layer:

.. code:: python

   class Model(TrainableModel):
       ...

       def configure_head(self, input_embedding_size: int) -> EncoderHead:
           return SkipConnectionHead(input_embedding_size)

