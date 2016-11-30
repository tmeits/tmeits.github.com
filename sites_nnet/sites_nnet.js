// @author: iljin.victor@gmail.com
ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [63.09755, 123.1414],
            zoom: 5,
            //type: 'yandex#satellite',
            type: 'yandex#map',
            //controls: ['smallMapDefaultSet']
            controls: [
                'zoomControl', 
                //'smallZoomControl',
                'searchControl', 
                'typeSelector', 
                //'geolocationControl', 
                //'trafficControl', 
                'fullscreenControl',
                'rulerControl'],
                //'scaleLine']
        }, {
            searchControlProvider: 'yandex#search'
            //searchControlProvider: ''
        }),

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [62.09755, 130.1414]
            },
            // Свойства.
            properties: {
                // Контент метки.
                //iconContent: 'Я тащусь',
                iconContent: '1',
                hintContent: '<a href="LB/">Altitude (m) 113<br>62.09755, 130.1414</a>'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            //draggable: true
            // Запретим перемещать метку.
            draggable: false
        });

    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([62.15643333, 130.4926333], {
            balloonContent: '', //'<img src="http://g02.a.alicdn.com/kf/HTB15Eo.JXXXXXcfXVXXq6xXFXXXl/Haok-Home-PVC-Vinyl-Vintage-Faux-Woods-Panel-Tree-3D-Wallpaper-Living-room-Bedroom-Home-Wall.jpg_120x120.jpg"><br><a href="P2_04.08/">Altitude (m) 231<br>62.09755, 130.1414</a>',
            iconContent: '2',
            hintContent: '<a href="P2_04.08/">Altitude (m) 231<br>62.15643333, 130.4926333</a>'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
        .add(new ymaps.Placemark([62.14685, 130.5214667], {
            balloonContent: '62.14685, 130.5214667',
            iconContent: '3',
            hintContent: '<a href="L1_04.08/">Altitude (m) 206<br>62.14685, 130.5214667</a>'
        }, {
            //preset: 'islands#dotIcon',
            preset: 'islands#icon',
            iconColor: '#735184'
        }))
        .add(new ymaps.Placemark([61.94788333, 132.1412333], {
            balloonContent: '61.94788333, 132.1412333',
            iconContent: '4',
            hintContent: '<a href="L2_24.07/">Altitude (m) 210<br>61.94788333, 132.1412333</a>'
        }, {
            preset: 'islands#icon',
            //preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([62.32351667, 133.5322333], {
            balloonContent: '62.32351667, 133.5322333',
            iconContent: '5',
            hintContent: '<a href="L3_03.08/">Altitude (m) 245<br>62.32351667, 133.5322333</a>'
        }, {
            preset: 'islands#icon',
            //preset: 'islands#circleDotIcon',
            iconColor: 'yellow'
        }))
        .add(new ymaps.Placemark([62.08993333, 134.40405], {
            balloonContent: '62.08993333, 134.40405',
            iconContent: '6',
            hintContent: '<a href="P3_03.08/">Altitude (m) 191<br>62.08993333, 134.40405</a>'
        }, {
            preset: 'islands#icon',
            iconColor: '#a5260a'
        }))
        .add(new ymaps.Placemark([ 62.74548333, 136.4161667], {
            balloonContent: '62.74548333, 136.4161667',
            iconContent: '7',
            hintContent: '<a href="P4_01.08/"> Altitude (m) 245<br>62.74548333, 136.4161667</a>'
        }, {
            //preset: 'islands#dotIcon',
            preset: 'islands#icon',
            iconColor: '#3b5998'
        }))
        .add(new ymaps.Placemark([62.93555, 137.3251], {
            balloonContent: '62.93555, 137.3251',
            iconContent: '8',
            hintContent: '<a href="L4_01.08/"> Altitude (m) 429<br>62.93555, 137.3251 </a>'
        }, {
            //preset: 'islands#circleIcon',
            preset: 'islands#icon',
            iconColor: '#4d7198'
        }))
        .add(new ymaps.Placemark([63.04311667, 137.9554667], {
            balloonContent: '63.04311667, 137.9554667',
            iconContent: '9',
            hintContent: '<a href="LB/">Altitude (m) 505<br>63.04311667, 137.9554667 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#1faee9'
        }))
        .add(new ymaps.Placemark([63.04238333, 137.9671167], {
            balloonContent: '',
            iconContent: '10 ',
            hintContent: '<a href="L5_01.08/">Altitude (m) 465<br>63.04238333, 137.9671167 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([63.11411667, 139.0809], {
            balloonContent: '',
            iconContent: '11',
            hintContent: '<a href="L6_26.07/">Altitude (m) 878<br>63.11411667, 139.0809 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#1faee9'
        }))
        .add(new ymaps.Placemark([63.2132, 139.5059833], {
            balloonContent: '',
            iconContent: '12',
            hintContent: '<a href="L7_31.07/">Altitude (m) 1327<br>63.2132, 139.5059833 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#1faee9'
        }))
        .add(new ymaps.Placemark([63.5372, 140.7388167], {
            balloonContent: '',
            iconContent: '13',
            hintContent: '<a href="L8_26.07/">Altitude (m) 1119<br>63.5372, 140.7388167 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#1faee9'
        }))
        .add(new ymaps.Placemark([64.0545, 141.06275], {
            balloonContent: '',
            iconContent: '14',
            hintContent: '<a href="L9_30.07/">Altitude (m) 783<br>64.0545, 141.06275 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#1faee9'
        }))
        .add(new ymaps.Placemark([64.43836667, 141.9257667], {
            balloonContent: '',
            iconContent: '15',
            hintContent: '<a href="L10_30.07/">Altitude (m) 617<br>64.43836667, 141.9257667</a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([64.61056667, 142.5445667], {
            balloonContent: '',
            iconContent: '16',
            hintContent: '<a href="L11_30.07/">Altitude (m) 1164<br>64.61056667, 142.5445667 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([64.43143333, 144.04705], {
            balloonContent: '',
            iconContent: '17',
            hintContent: '<a href="L12_27.07/">Altitude (m) 626<br>64.43143333, 144.04705 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([63.84951667, 145.5568667], {
            balloonContent: '',
            iconContent: '18',
            hintContent: '<a href="L13_27.07/">Altitude (m) 833<br>63.84951667, 145.5568667 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([63.53016667, 146.42375], {
            balloonContent: '',
            iconContent: '19',
            hintContent: '<a href="L14_29.07/">Altitude (m) 1026<br>63.53016667, 146.42375 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([62.8873, 147.2628667], {
            balloonContent: '',
            iconContent: '20',
            hintContent: '<a href="L15_28.07/">Altitude (m) 866<br>62.8873, 147.2628667 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([62.40205, 149.8439167], {
            balloonContent: '',
            iconContent: '21',
            hintContent: '<a href="L16_29.07/">Altitude (m) 457<br>62.40205, 149.8439167</a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([62.981, 108.394], {
            balloonContent: '',
            iconContent: '22',
            hintContent: '<a href="LB/">62.981, 108.394 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([64.607, 99.895], {
            balloonContent: '',
            iconContent: '23',
            hintContent: '<a href="LB/">64.607, 99.895 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([64.107, 99.98], {
            balloonContent: '',
            iconContent: '24',
            hintContent: '<a href="LB/">64.107, 99.98 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([63.912, 97.776], {
            balloonContent: '',
            iconContent: '25',
            hintContent: '<a href="LB/">63.912, 97.776 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([63.756, 98.11], {
            balloonContent: '',
            iconContent: '26',
            hintContent: '<a href="LB/">63.756, 98.11 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#3caa3c'
        }))
        // Margarita Popkova - New sites 7.12.15 
        .add(new ymaps.Placemark([62.23, 127.22], {
            balloonContent: '',
            iconContent: '27',
            hintContent: '<a href="LB/">62.23, 127.22 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#735184'
        }))
        //
        .add(new ymaps.Placemark([62.88, 124.23], {
            balloonContent: '',
            iconContent: '28',
            hintContent: '<a href="LB/">62.88, 124.23 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#735184'
        }))
        //
        .add(new ymaps.Placemark([63.60, 121.23], {
            balloonContent: '',
            iconContent: '29',
            hintContent: '<a href="LB/">63.60, 121.23 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#735184'
        }))
        //
        .add(new ymaps.Placemark([63.57, 119.70], {
            balloonContent: '',
            iconContent: '30',
            hintContent: '<a href="LB/">63.57, 119.70 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#735184'
        }))
        //
        .add(new ymaps.Placemark([63.32, 118.09], {
            balloonContent: '',
            iconContent: '31',
            hintContent: '<a href="LB/">63.32, 118.09</a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#735184'
        }))
        //
        .add(new ymaps.Placemark([62.97, 117.88], {
            balloonContent: '',
            iconContent: '32',
            hintContent: '<a href="LB/">62.97, 117.88 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#735184'
        }))
        //
        .add(new ymaps.Placemark([62.50, 113.92 ], {
            balloonContent: '',
            iconContent: '33',
            hintContent: '<a href="LB/">Мирный<br>62.50, 113.92 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#735184'
        }))
        //
        .add(new ymaps.Placemark([65.92, 111.39], {
            balloonContent: '',
            iconContent: '34',
            hintContent: '<a href="LB/">65.92, 111.39 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#735184'
        }))
        //
        .add(new ymaps.Placemark([62.25, 129.62], {
            balloonContent: '',
            iconContent: '35',
            hintContent: '<a href="LB/">Altitude (m) 217<br>62.25, 129.62</a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#735184'
        }))
        //
        .add(new ymaps.Placemark([62.25, 129.63], {
            balloonContent: '',
            iconContent: '36',
            hintContent: '<a href="LB/">Altitude (m) 318<br> 62.25, 129.63</a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#735184'
        }))
        //
        .add(new ymaps.Placemark([62.02, 128.77], {
            balloonContent: '',
            iconContent: '37',
            hintContent: '<a href="LB/">Altitude (m) 254<br>62.02, 128.77 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#735184'
        }))
        //
        .add(new ymaps.Placemark([62.03, 128.66 ], {
            balloonContent: '',
            iconContent: '38',
            hintContent: '<a href="LB/">Altitude (m) 213<br>62.03, 128.66 </a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#735184'
        }))
        //
        .add(new ymaps.Placemark([64.28, 100.22 ], {
            balloonContent: '<img src="http://vs-genn.ru/sites_yakutia/thumbnail/pinus.jpg"><br><a href="LB/">Altitude (m) NaN<br>64.28, 100.22</a>',
            iconContent: '39',
            hintContent: '<a href="LB/">Altitude (m) NaN<br>64.28, 100.22</a>'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#a5260a'
        }))
        //
        .add(new ymaps.Placemark([60.892940, 89.35 ], {
            balloonContent: 'Russian Federation, Krasnoyarskiy kray, Turukhanskiy rayon, selo Zotino',
            iconContent: '40',
            hintContent: 'Russian Federation, Krasnoyarskiy kray, Turukhanskiy rayon, selo Zotino'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#icon',
            iconColor: '#a5260a'
        }))

	;
}
// http://about.sfu-kras.ru/campus/map
