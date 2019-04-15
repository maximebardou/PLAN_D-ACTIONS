var wms_layers = [];
var lyr_Fonddeplan_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Fond de plan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Fonddeplan_0.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-134635.749985, 5739412.845665, -80737.199061, 5792983.828794]
                            })
                        });var lyr_Urbanismeethabitat_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Urbanisme et habitat",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Urbanismeethabitat_1.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-134635.749985, 5739412.845665, -80737.199061, 5792983.828794]
                            })
                        });var lyr_Agriculture_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Agriculture",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Agriculture_2.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-134635.749985, 5739412.845665, -80737.199061, 5792983.828794]
                            })
                        });var lyr_Mobilits_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mobilités",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Mobilits_3.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-134635.749985, 5739412.845665, -80737.199061, 5792983.828794]
                            })
                        });var lyr_nergies_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Énergies",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/nergies_4.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-134635.749985, 5739412.845665, -80737.199061, 5792983.828794]
                            })
                        });var lyr_Toponymie_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Toponymie",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Toponymie_5.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-134635.749985, 5739412.845665, -80737.199061, 5792983.828794]
                            })
                        });

lyr_Fonddeplan_0.setVisible(true);lyr_Urbanismeethabitat_1.setVisible(true);lyr_Agriculture_2.setVisible(true);lyr_Mobilits_3.setVisible(true);lyr_nergies_4.setVisible(true);lyr_Toponymie_5.setVisible(false);
var layersList = [lyr_Fonddeplan_0,lyr_Urbanismeethabitat_1,lyr_Agriculture_2,lyr_Mobilits_3,lyr_nergies_4,lyr_Toponymie_5];
