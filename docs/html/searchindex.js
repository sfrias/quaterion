Search.setIndex({docnames:["index","quaterion","quaterion.dataset","quaterion.dataset.similarity_data_loader","quaterion.dataset.similarity_dataset","quaterion.dataset.similarity_samples","quaterion.dataset.train_collater","quaterion.eval","quaterion.eval.base_metric","quaterion.loss","quaterion.loss.arcface_loss","quaterion.loss.contrastive_loss","quaterion.loss.group_loss","quaterion.loss.metrics","quaterion.loss.multiple_negatives_ranking_loss","quaterion.loss.online_contrastive_loss","quaterion.loss.pairwise_loss","quaterion.loss.similarity_loss","quaterion.loss.softmax_loss","quaterion.loss.triplet_loss","quaterion.main","quaterion.train","quaterion.train.cache","quaterion.train.cache.cache_config","quaterion.train.trainable_model","quaterion.utils","quaterion.utils.enums","quaterion.utils.utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","quaterion.rst","quaterion.dataset.rst","quaterion.dataset.similarity_data_loader.rst","quaterion.dataset.similarity_dataset.rst","quaterion.dataset.similarity_samples.rst","quaterion.dataset.train_collater.rst","quaterion.eval.rst","quaterion.eval.base_metric.rst","quaterion.loss.rst","quaterion.loss.arcface_loss.rst","quaterion.loss.contrastive_loss.rst","quaterion.loss.group_loss.rst","quaterion.loss.metrics.rst","quaterion.loss.multiple_negatives_ranking_loss.rst","quaterion.loss.online_contrastive_loss.rst","quaterion.loss.pairwise_loss.rst","quaterion.loss.similarity_loss.rst","quaterion.loss.softmax_loss.rst","quaterion.loss.triplet_loss.rst","quaterion.main.rst","quaterion.train.rst","quaterion.train.cache.rst","quaterion.train.cache.cache_config.rst","quaterion.train.trainable_model.rst","quaterion.utils.rst","quaterion.utils.enums.rst","quaterion.utils.utils.rst"],objects:{"":[[1,0,0,"-","quaterion"]],"quaterion.dataset":[[3,0,0,"-","similarity_data_loader"],[4,0,0,"-","similarity_dataset"],[5,0,0,"-","similarity_samples"],[6,0,0,"-","train_collater"]],"quaterion.dataset.similarity_data_loader":[[3,1,1,"","GroupSimilarityDataLoader"],[3,1,1,"","PairsSimilarityDataLoader"],[3,1,1,"","SimilarityDataLoader"]],"quaterion.dataset.similarity_data_loader.GroupSimilarityDataLoader":[[3,2,1,"","batch_size"],[3,3,1,"","collate_labels"],[3,2,1,"","dataset"],[3,2,1,"","drop_last"],[3,3,1,"","flatten_objects"],[3,2,1,"","num_workers"],[3,2,1,"","pin_memory"],[3,2,1,"","prefetch_factor"],[3,2,1,"","sampler"],[3,2,1,"","timeout"]],"quaterion.dataset.similarity_data_loader.PairsSimilarityDataLoader":[[3,2,1,"","batch_size"],[3,3,1,"","collate_labels"],[3,2,1,"","dataset"],[3,2,1,"","drop_last"],[3,3,1,"","flatten_objects"],[3,2,1,"","num_workers"],[3,2,1,"","pin_memory"],[3,2,1,"","prefetch_factor"],[3,2,1,"","sampler"],[3,2,1,"","timeout"]],"quaterion.dataset.similarity_data_loader.SimilarityDataLoader":[[3,2,1,"","batch_size"],[3,3,1,"","collate_labels"],[3,2,1,"","dataset"],[3,2,1,"","drop_last"],[3,3,1,"","flatten_objects"],[3,2,1,"","num_workers"],[3,4,1,"","original_params"],[3,2,1,"","pin_memory"],[3,3,1,"","pre_collate_fn"],[3,2,1,"","prefetch_factor"],[3,2,1,"","sampler"],[3,2,1,"","timeout"]],"quaterion.dataset.similarity_dataset":[[4,1,1,"","SimilarityGroupDataset"]],"quaterion.dataset.similarity_samples":[[5,1,1,"","SimilarityGroupSample"],[5,1,1,"","SimilarityPairSample"]],"quaterion.dataset.similarity_samples.SimilarityGroupSample":[[5,2,1,"","group"],[5,2,1,"","obj"]],"quaterion.dataset.similarity_samples.SimilarityPairSample":[[5,2,1,"","obj_a"],[5,2,1,"","obj_b"],[5,2,1,"","score"],[5,2,1,"","subgroup"]],"quaterion.dataset.train_collater":[[6,1,1,"","TrainCollater"]],"quaterion.dataset.train_collater.TrainCollater":[[6,3,1,"","pre_encoder_collate"]],"quaterion.eval":[[8,0,0,"-","base_metric"]],"quaterion.eval.base_metric":[[8,1,1,"","BaseMetric"]],"quaterion.eval.base_metric.BaseMetric":[[8,3,1,"","eval"]],"quaterion.loss":[[10,0,0,"-","arcface_loss"],[11,0,0,"-","contrastive_loss"],[12,0,0,"-","group_loss"],[13,0,0,"-","metrics"],[14,0,0,"-","multiple_negatives_ranking_loss"],[15,0,0,"-","online_contrastive_loss"],[16,0,0,"-","pairwise_loss"],[17,0,0,"-","similarity_loss"],[18,0,0,"-","softmax_loss"],[19,0,0,"-","triplet_loss"]],"quaterion.loss.arcface_loss":[[10,1,1,"","ArcFaceLoss"],[10,5,1,"","l2_norm"]],"quaterion.loss.arcface_loss.ArcFaceLoss":[[10,3,1,"","forward"],[10,2,1,"","training"]],"quaterion.loss.contrastive_loss":[[11,1,1,"","ContrastiveLoss"]],"quaterion.loss.contrastive_loss.ContrastiveLoss":[[11,3,1,"","forward"],[11,3,1,"","get_config_dict"],[11,3,1,"","metric_class"],[11,2,1,"","training"]],"quaterion.loss.group_loss":[[12,1,1,"","GroupLoss"]],"quaterion.loss.group_loss.GroupLoss":[[12,3,1,"","forward"],[12,2,1,"","training"]],"quaterion.loss.metrics":[[13,1,1,"","SiameseDistanceMetric"]],"quaterion.loss.metrics.SiameseDistanceMetric":[[13,3,1,"","cosine_distance"],[13,3,1,"","dot_product_distance"],[13,3,1,"","euclidean"],[13,3,1,"","manhattan"]],"quaterion.loss.multiple_negatives_ranking_loss":[[14,1,1,"","MultipleNegativesRankingLoss"]],"quaterion.loss.multiple_negatives_ranking_loss.MultipleNegativesRankingLoss":[[14,3,1,"","forward"],[14,3,1,"","get_config_dict"],[14,3,1,"","metric_class"],[14,2,1,"","training"]],"quaterion.loss.online_contrastive_loss":[[15,1,1,"","OnlineContrastiveLoss"]],"quaterion.loss.online_contrastive_loss.OnlineContrastiveLoss":[[15,3,1,"","forward"],[15,3,1,"","get_config_dict"],[15,2,1,"","training"]],"quaterion.loss.pairwise_loss":[[16,1,1,"","PairwiseLoss"]],"quaterion.loss.pairwise_loss.PairwiseLoss":[[16,3,1,"","forward"],[16,2,1,"","training"]],"quaterion.loss.similarity_loss":[[17,1,1,"","SimilarityLoss"]],"quaterion.loss.similarity_loss.SimilarityLoss":[[17,3,1,"","get_config_dict"],[17,3,1,"","get_distance_function"],[17,3,1,"","metric_class"],[17,2,1,"","training"]],"quaterion.loss.softmax_loss":[[18,1,1,"","SoftmaxLoss"]],"quaterion.loss.softmax_loss.SoftmaxLoss":[[18,3,1,"","forward"],[18,2,1,"","training"]],"quaterion.loss.triplet_loss":[[19,1,1,"","TripletLoss"]],"quaterion.loss.triplet_loss.TripletLoss":[[19,3,1,"","forward"],[19,3,1,"","get_config_dict"],[19,2,1,"","training"]],"quaterion.main":[[20,1,1,"","Quaterion"]],"quaterion.main.Quaterion":[[20,3,1,"","fit"]],"quaterion.train":[[22,0,0,"-","cache"],[24,0,0,"-","trainable_model"]],"quaterion.train.cache":[[22,1,1,"","CacheConfig"],[22,1,1,"","CacheType"],[23,0,0,"-","cache_config"]],"quaterion.train.cache.CacheConfig":[[22,2,1,"","batch_size"],[22,2,1,"","cache_type"],[22,2,1,"","key_extractors"],[22,2,1,"","mapping"],[22,2,1,"","num_workers"]],"quaterion.train.cache.CacheType":[[22,2,1,"","AUTO"],[22,2,1,"","CPU"],[22,2,1,"","GPU"]],"quaterion.train.cache.cache_config":[[23,1,1,"","CacheConfig"],[23,1,1,"","CacheType"],[23,6,1,"","KeyExtractorType"]],"quaterion.train.cache.cache_config.CacheConfig":[[23,2,1,"","batch_size"],[23,2,1,"","cache_type"],[23,2,1,"","key_extractors"],[23,2,1,"","mapping"],[23,2,1,"","num_workers"]],"quaterion.train.cache.cache_config.CacheType":[[23,2,1,"","AUTO"],[23,2,1,"","CPU"],[23,2,1,"","GPU"]],"quaterion.train.trainable_model":[[24,1,1,"","TrainableModel"]],"quaterion.train.trainable_model.TrainableModel":[[24,3,1,"","cache"],[24,3,1,"","configure_caches"],[24,3,1,"","configure_encoders"],[24,3,1,"","configure_head"],[24,3,1,"","configure_loss"],[24,4,1,"","loss"],[24,4,1,"","model"],[24,3,1,"","process_results"],[24,3,1,"","save_servable"],[24,3,1,"","setup_dataloader"],[24,3,1,"","test_step"],[24,2,1,"","training"],[24,3,1,"","training_step"],[24,3,1,"","unwrap_cache"],[24,3,1,"","validation_step"]],"quaterion.utils":[[26,0,0,"-","enums"],[27,0,0,"-","utils"]],"quaterion.utils.enums":[[26,1,1,"","TrainStage"]],"quaterion.utils.enums.TrainStage":[[26,2,1,"","TEST"],[26,2,1,"","TRAIN"],[26,2,1,"","VALIDATION"]],"quaterion.utils.utils":[[27,5,1,"","get_anchor_negative_mask"],[27,5,1,"","get_anchor_positive_mask"],[27,5,1,"","get_triplet_mask"],[27,5,1,"","info_value_of_dtype"],[27,5,1,"","max_value_of_dtype"],[27,5,1,"","min_value_of_dtype"]],quaterion:[[2,0,0,"-","dataset"],[7,0,0,"-","eval"],[9,0,0,"-","loss"],[20,0,0,"-","main"],[21,0,0,"-","train"],[25,0,0,"-","utils"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","property","Python property"],"5":["py","function","Python function"],"6":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:property","5":"py:function","6":"py:data"},terms:{"0":[3,5,10,11,14,15,18,19],"00652":14,"03832":19,"05":18,"06":[11,15],"07698":10,"1":[3,5,11,14],"10":5,"11":5,"1503":19,"1705":14,"1801":10,"1st_pair_1st_obj":3,"1st_pair_2nd_obj":3,"2":[3,5,16],"20":14,"209":5,"2d":27,"2nd_pair_1st_obj":3,"2nd_pair_2nd_obj":3,"3":[3,5,27],"32":[22,23],"3d":27,"4":5,"5":[10,15,19],"555":5,"64":10,"7":5,"8":5,"9":5,"case":5,"class":[3,4,5,6,8,10,11,12,13,14,15,16,17,18,19,20,22,23,24,26],"default":[6,15,18,19,24],"do":24,"enum":[1,22,23,25],"float":[3,5,10,11,14,15,18,19,27],"function":[3,6,11,12,13,14,15,16,17,19,22,23,24,27],"int":[3,5,6,10,18,22,23,24,27],"new":3,"return":[3,4,10,11,12,13,14,15,16,17,18,19,24,27],"static":13,"true":[11,13,14,15,19],A:20,For:14,If:[11,13,14],In:5,It:[14,18,19,22,23],One:[15,19],Then:14,__init__:3,ab:[10,19],about:[14,27],abov:27,accept:14,account:14,actual:[3,27],ad:24,addit:[3,10,11,14,24],addition:3,affect:[22,23],aggreg:6,alia:23,all:[5,6,13,15,19,24,27],allow:[6,27],also:14,among:6,an:[14,18,24],anchor:[14,27],angular:10,ani:[3,5,6,11,14,15,17,19,23,24],anoth:5,answer:14,apart:[10,15,19],appl:3,appli:[3,10,24],ar:[3,6,11,14,15,27],arcface_loss:[1,9],arcfaceloss:10,arg:24,argument:[3,11,14,24],arxiv:[10,14,19],assembl:20,assign:[3,13,24],associ:[3,10,12,15,18,19,24,27],assum:14,attribut:17,auto:[22,23,24],automat:[3,14,24],avail:[11,14,17,22,23],averag:11,bar:24,base:[3,4,5,6,8,10,11,12,13,14,15,16,17,18,19,20,22,23,24,26,27],base_metr:[1,7],basemetr:8,batch:[3,6,11,14,15,16,19,22,23,24,27],batch_idx:24,batch_siz:[3,10,12,13,15,16,18,19,22,23,24,27],befor:[3,24],between:[11,12,13,14,16,17,24],bool:[3,10,11,12,13,14,15,16,17,18,19,24,27],cach:[1,20,21,24],cachabl:24,cache_config:[21,22],cache_typ:[22,23,24],cacheabl:[22,23],cacheconfig:[22,23,24],cachedataload:[22,23],cachemixin:24,cachetyp:[22,23,24],calcul:[13,14,15,17,19,24,27],call:[11,14],callabl:[17,23],can:[11,12,16,17,27],candi:5,cannot:11,checkpoint:24,cheesecak:5,chopra:[11,15],chosen:13,cl:17,classif:4,classmethod:[3,11,14,17,20],closer:5,collat:[3,6,24],collate_fn:3,collate_label:3,com:[11,15],common:13,commonli:6,compat:4,comput:[10,11,13,14,16,18,24],config:[11,14,15,17,19],configur:24,configure_cach:[22,23,24],configure_encod:24,configure_head:24,configure_loss:24,consum:3,contain:[11,12,14,16,17],contrast:[11,15],contrastive_loss:[1,9],contrastiveloss:[11,15],convert:[3,4],correct:14,correspond:[11,14],cosin:[13,14],cosine_dist:[11,12,13,15,16,17],cpu:[22,23,24],creat:27,criteria:27,cross:[10,14,18],cube:27,cuda:[22,23],current:[11,14,17],data:[3,4,5,20,24,27],dataload:[3,20,24],dataset:[1,10,18,24],debug:3,default_encoder_kei:24,defin:[3,10,11,12,15,16,17,19,24],describ:14,design:18,devic:[22,23],dict:[3,11,14,15,17,19,22,23,24],differ:5,dim:10,dimens:[10,18],directli:3,disambigu:24,displai:24,distanc:[11,12,13,15,16,17,19],distance_metric_nam:[11,12,15,16,17,19],distinct:27,distinguish:[6,11,23],divid:18,doe:[22,23,27],don:[14,15],dot:[13,18],dot_product:14,dot_product_dist:13,drop_last:3,dtype:27,dummi:3,duplic:14,dure:[20,22,23,24],dwarf:20,e:[14,15,24,27],each:[3,5,14,24],effect:13,either:[11,14],element:6,elon_musk_1:5,elon_musk_2:5,elon_musk_3:5,els:[22,23],embed:[10,11,12,14,15,16,17,18,19,24,27],embedding_dim:[15,19],embedding_s:[10,18,24],encod:[3,6,10,18,22,23,24],encoder_col:6,encoder_nam:[6,22,23],encoderhead:24,entir:13,entropi:[10,14,18],enumer:3,especi:13,estim:3,euclidean:[13,15,19],eval:1,evalu:24,exampl:[3,5,11,14,15,19,24],exdb:[11,15],expect:11,extract:23,extractor:[22,23],face:5,factori:[22,23],fals:[13,14],farther:20,featir:3,featur:[3,6],file_nam:5,fill:24,filter:15,finfo:27,first:[5,11,14,15],fit:20,flat:13,flatten_object:3,fly:15,form:[14,15,27],format:4,forward:[10,11,12,14,15,16,18,19],from:[3,5,10,14,17,18,23,24],function_nam:17,further:[5,11],g:[14,24],gener:[3,11,14],get:24,get_anchor_negative_mask:27,get_anchor_positive_mask:27,get_collate_fn:3,get_config_dict:[11,14,15,17,19],get_distance_funct:17,get_triplet_mask:27,giant:20,given:[14,27],gpu:[22,23,24],great:14,group:[3,5,10,12,15,18,19],group_id:5,group_loss:[1,9],grouploss:[10,12,15,18,19],groupsimilaritydataload:[3,4],ha:[11,14,15,17,19],hadsel:[11,15],half:[11,14],handl:[20,26],hard:[15,19],hash:[23,24],hash_id:3,hashabl:[22,23],have:[5,11,13],head:24,how:13,howev:27,http:[10,11,14,15,19],i:[14,15,27],id:[3,5,6,10,16,18,24],ignor:14,iinfo:27,image_encod:24,implement:[6,14,15,18,19],increas:11,independ:24,index:[0,24],indic:[11,14,27],individu:[3,24],info:27,info_value_of_dtyp:27,inform:[6,11],initi:[3,24],input:[3,6,10,11,23],input_embedding_s:24,instanc:[17,20,24],instead:15,integ:24,intern:20,item:24,iter:3,its:6,itself:13,j:27,jpg:5,json:[11,14,15,17,19],k:27,keep:6,kei:[11,14,22,23,24],key_extractor:[22,23,24],keyextractortyp:[22,23],keyword:24,kind:24,known:16,kwarg:[3,11,14,24],l2:10,l2_norm:10,label:[3,4,6,11,14,15,16,19,27],labels_batch:3,layer:24,learn:5,least:11,lecun:[11,15],lemon:[3,5],leonard_nimoy_1:5,leonard_nimoy_2:5,lightn:24,lightningmodul:24,likelihood:14,lime:5,list:[3,6,16],load:[11,14,15,17,19,24],loader:[20,24],log:14,logger:24,logit:18,longtensor:[11,12,14,15,18,19],loss:[1,3,24],macaroon:5,mai:13,main:1,make:[10,13,14,15],manhattan:13,map:[6,22,23,24],margin:[10,11,15,19],mask:27,match:5,matrix:[13,14],max:27,max_value_of_dtyp:27,maximum:27,mean:6,method:24,metric:[1,3,9,11,12,14,16,17,24],metric_class:[11,14,17],metricmodel:24,might:[6,24],min:27,min_value_of_dtyp:27,mine:[15,19],mini:11,minim:14,minimum:27,modal:14,model:[20,24],modul:0,more:[3,24],muffin:5,multipl:14,multiple_negatives_ranking_loss:[1,9],multiplenegativesrankingloss:14,multipli:14,must:14,name:[6,11,12,14,15,16,17,19,24],need:[14,15],neg:[6,11,14,15,19,27],nn:5,non:[22,23,24],none:[6,13,20,22,23,24],normal:[10,14],num:[22,23],num_group:[10,18],num_work:[3,22,23],number:[10,18,24,27],obj:[3,5],obj_a:[3,5,14],obj_b:[3,5,14],object:[3,5,6,8,11,13,14,15,16,17,19,20,22,23,24,27],offset:3,onc:3,one:[3,5,15],ones:27,onli:[3,14],onlin:[15,19],online_contrastive_loss:[1,9],onlinecontrastiveloss:15,oper:10,optim:14,option:[3,6,13,15,19,20,22,23,24],orang:[3,5],org:[10,14,19],origin:[3,6,24],original_param:3,other:[5,14,22,23],otherwis:[13,24],output:[3,10,18,24],overridden:6,overwrit:3,overwritten:3,packag:0,page:0,pair:[3,11,14,15,16,27],pairs_count:16,pairssimilaritydataload:3,pairwis:16,pairwise_loss:[1,9],pairwiseloss:[11,14,16],param:[3,11,14,15,17,19],paramet:[3,4,6,10,11,12,13,14,15,16,17,18,19,20,24,27],pass:[3,17,24,27],path:24,pdf:[11,14,15],per:6,perform:[6,20],person:5,pictur:5,pin_memori:3,posit:[6,11,14,15,27],possibl:[15,27],pre:[11,12,16,17],pre_collate_fn:[3,6],pre_encoder_col:6,predict:3,prefetch_factor:3,prepar:6,process:[6,20,22,23,24],process_result:24,produc:24,product:[13,18],progress:24,properti:[3,24],provid:24,pseudo:3,publi:[11,15],purpos:[3,11,14,15,17,19],push:[10,15,19],pytorch:[24,27],pytorch_lightn:20,quaterion_model:24,queri:5,question:14,rais:[17,27],ram:24,random:3,rank:14,record:4,reduc:11,regular:18,repeat:6,repres:[5,27],requir:[3,6,22,23],respect:3,restor:24,retriev:[3,14,17,20],routin:20,runtimeerror:17,s:[20,24],same:6,sampl:[3,6,11,20],sampler:3,save:[11,14,15,17,19,24],save_serv:24,scalar:[14,15,19],scale:[10,14],score:[3,5,11,14],search:0,second:[5,11,14],see:20,send:6,sentenc:14,separ:15,serializ:[6,11,14,15,17,19],serv:24,set:[22,23],setup_dataload:24,shape:[10,12,13,15,16,18,19,24,27],should:[3,5,6,11,24],shoulder:20,siamesedistancemetr:[11,12,13,16,17],similar:[3,5,14,16,17],similarity_data_load:[1,2],similarity_dataset:[1,2],similarity_loss:[1,9],similarity_metric_nam:14,similarity_sampl:[1,2],similaritydataload:[3,20,24],similaritygroupdataset:4,similaritygroupsampl:[3,4,5],similarityloss:[12,16,17,24],similaritypairsampl:[3,5],simpl:4,singl:5,size:[11,12,16,18,22,23,24],size_averag:11,so:[14,15],softmax:[14,18],softmax_loss:[1,9],softmaxloss:18,some:24,sophist:24,sourc:[3,4,5,6,8,10,11,12,13,14,15,16,17,18,19,20,22,23,24,26,27],special:3,specif:[3,24],specifi:[14,19,24],split:[3,6],squar:[13,15,19],stage:[20,22,23,24,26],standard:4,state:24,store:24,str:[3,6,11,12,14,15,16,17,19,22,23,24,26],strategi:[15,19,27],subgroup:[3,5,11,14,16],submodul:0,subpackag:0,suitabl:3,sum:11,support:[15,19],sure:13,symmetr:14,t:[14,15],t_co:3,target:[3,24],task:[4,14],temperatur:18,tensor:[3,8,10,11,12,13,14,15,16,17,18,19,22,23,24,27],tensorinterchang:24,test:[24,26],test_step:24,text:11,text_encod:24,than:3,thei:24,them:14,thi:[3,5,14,15,24,27],timeout:3,top:24,torch:[3,10,15,19,27],track:6,train:[1,3,6,10,11,12,14,15,16,17,18,19,20,26],train_collat:[1,2],train_dataload:[20,24],trainabl:24,trainable_model:[1,20,21],trainablemodel:[20,24],traincollat:6,trainer:[20,24],training_step:24,trainstag:[24,26],transform:3,triplet:[19,27],triplet_loss:[1,9],tripletloss:19,tupl:3,two:[11,12,16,17,20],type:[11,14,17,22,23,24,27],typeerror:27,understand:13,unexpect:13,union:[3,22,23,24,27],uniqu:[3,5],unknown:17,unlik:15,unwrap_cach:24,updat:24,us:[3,11,12,14,15,16,17,19,22,23,24],usag:6,usual:6,util:[1,3],val_dataload:[20,24],valid:[15,20,24,26,27],validation_step:24,valu:[10,11,12,14,15,16,18,19,22,23,24,26,27],vector:24,vector_length:[10,12,16,18],version:3,wai:[23,24],want:24,well:24,what:24,when:14,which:[3,4,5,11,24,27],whole:20,within:5,without:3,word:[11,14],work:[3,10,13,14,18],worker:[6,22,23],worri:14,wrapper:4,x:13,y:13,yann:[11,15],you:[13,14,15,24],yourself:15,zero:[12,16,18]},titles:["Welcome to Quaterion\u2019s documentation!","quaterion package","quaterion.dataset package","quaterion.dataset.similarity_data_loader module","quaterion.dataset.similarity_dataset module","quaterion.dataset.similarity_samples module","quaterion.dataset.train_collater module","quaterion.eval package","quaterion.eval.base_metric module","quaterion.loss package","quaterion.loss.arcface_loss module","quaterion.loss.contrastive_loss module","quaterion.loss.group_loss module","quaterion.loss.metrics module","quaterion.loss.multiple_negatives_ranking_loss module","quaterion.loss.online_contrastive_loss module","quaterion.loss.pairwise_loss module","quaterion.loss.similarity_loss module","quaterion.loss.softmax_loss module","quaterion.loss.triplet_loss module","quaterion.main module","quaterion.train package","quaterion.train.cache package","quaterion.train.cache.cache_config module","quaterion.train.trainable_model module","quaterion.utils package","quaterion.utils.enums module","quaterion.utils.utils module"],titleterms:{"enum":26,arcface_loss:10,base_metr:8,cach:[22,23],cache_config:23,content:[0,1,2,7,9,21,22,25],contrastive_loss:11,dataset:[2,3,4,5,6],document:0,eval:[7,8],group_loss:12,indic:0,loss:[9,10,11,12,13,14,15,16,17,18,19],main:20,metric:13,modul:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],multiple_negatives_ranking_loss:14,online_contrastive_loss:15,packag:[1,2,7,9,21,22,25],pairwise_loss:16,quaterion:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],s:0,similarity_data_load:3,similarity_dataset:4,similarity_loss:17,similarity_sampl:5,softmax_loss:18,submodul:[1,2,7,9,21,22,25],subpackag:[1,21],tabl:0,train:[21,22,23,24],train_collat:6,trainable_model:24,triplet_loss:19,util:[25,26,27],welcom:0}})