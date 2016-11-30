// @author: tmeits@gmail.com
ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            // Выбор центра карты
            center: [63.42, 92.27],
            zoom: 3,
            type: 'yandex#hybrid', 
            //type: 'yandex#satellite',
            //type: 'yandex#map',
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
                coordinates: [69.0843, 75.9155]
            },
            // Свойства.
            properties: {
                balloonContent: '<b>ITRDB-Code: RUSS011 </b><hr>\
                    Study site: FOREST-TUNDRA ZONE MANGAZEYA SWAMPY SITE <br> \
                    Species: LASI<br>\
                    Investigator: SHIYATOV, S.G.<hr>\
                    <ul>\
                    <li><a href="http://hurricane.ncdc.noaa.gov/pls/paleox/f?P=519:1:::::P1_STUDY_ID,P1_SITE_ID:4762,17077">\
                    Original data from ITRDB</a></li><br>\
                    <li><a href="http://dendrobox.org/data/tree/russ011.csv">Chronology (CSV)</a></li><br>\
                    <li><a href="http://dendrobox.org/data/clim/russ011.csv">Climate average (CSV)</a></li><br>\
                    <li><a href="http://vs-genn.ru/sites_nnet/russ011_nnet.html">Chronology (train and test)</a></li></ul>',
                // Контент метки.
                iconContent: 'ITRDB-Code: RUSS011',
                hintContent: '<b>ITRDB-Code: RUSS011 </b><hr>\
                    Study site: FOREST-TUNDRA ZONE MANGAZEYA SWAMPY SITE <br> \
                    Species: LASI<br>\
                    Investigator: SHIYATOV, S.G.<hr>\
                    <ul>\
                    <li><a href="http://hurricane.ncdc.noaa.gov/pls/paleox/f?P=519:1:::::P1_STUDY_ID,P1_SITE_ID:4762,17077">\
                    Original data from ITRDB</a></li><br>\
                    <li><a href="http://dendrobox.org/data/tree/russ011.csv">Chronology (CSV)</a></li><br>\
                    <li><a href="http://dendrobox.org/data/clim/russ011.csv">Climate average (CSV)</a></li><br>\
                    <li><a href="http://vs-genn.ru/sites_nnet/russ011_nnet.html">Chronology (train and test)</a></li></ul>'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            // preset: 'islands#blackStretchyIcon',
            preset: 'islands#redStretchyIcon',
            // Метку можно перемещать.
            //draggable: true
            // Запретим перемещать метку.
            draggable: false
        });

    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([54.1669, 90.8566], {
            balloonContent: '<b>ITRDB-Code: RUSS215 </b><hr>\
                    Study site: BOGRAD <br> \
                    Species: LAGM<br>\
                    Investigator:JACOBY, G.C.<hr>\
                    <ul>\
                    <li><a href="http://hurricane.ncdc.noaa.gov/pls/paleox/f?P=519:1:::::P1_STUDY_ID,P1_SITE_ID:12689,52844">\
                    Original data from ITRDB</a></li><br>\
                    <li><a href="http://dendrobox.org/data/tree/russ215.csv">Chronology (CSV)</a></li><br>\
                    <li><a href="http://dendrobox.org/data/clim/russ215.csv">Climate average (CSV)</a></li><br>\
                    <li><a href="http://vs-genn.ru/sites_nnet/russ215_nnet.html">Chronology (train and test)</a></li></ul>', //'<img src="http://g02.a.alicdn.com/kf/HTB15Eo.JXXXXXcfXVXXq6xXFXXXl/Haok-Home-PVC-Vinyl-Vintage-Faux-Woods-Panel-Tree-3D-Wallpaper-Living-room-Bedroom-Home-Wall.jpg_120x120.jpg"><br><a href="P2_04.08/">Altitude (m) 231<br>62.09755, 130.1414</a>',
            iconContent: 'ITRDB-Code: RUSS215',
            hintContent: '<b>ITRDB-Code: RUSS215 </b><hr>\
                    Study site: BOGRAD <br> \
                    Species: LAGM<br>\
                    Investigator:JACOBY, G.C.<hr>\
                    <ul>\
                    <li><a href="http://hurricane.ncdc.noaa.gov/pls/paleox/f?P=519:1:::::P1_STUDY_ID,P1_SITE_ID:12689,52844">\
                    Original data from ITRDB</a></li><br>\
                    <li><a href="http://dendrobox.org/data/tree/russ215.csv">Chronology (CSV)</a></li><br>\
                    <li><a href="http://dendrobox.org/data/clim/russ215.csv">Climate average (CSV)</a></li><br>\
                    <li><a href="http://vs-genn.ru/sites_nnet/russ215_nnet.html">Chronology (train and test)</a></li></ul>'
        }, {
            preset: 'islands#redStretchyIcon'
        }))
        .add(new ymaps.Placemark([71.2302, 104.7437], {
            balloonContent: '<b>ITRDB-Code: RUSS019</b><hr>\
                    Study site: LUKUNSKA RIVER <br> \
                    Species: LAGM<br>\
                    Investigator:JACOBY, G.C.<hr>\
                    <ul>\
                    <li><a href="http://hurricane.ncdc.noaa.gov/pls/paleox/f?P=519:1:::::P1_STUDY_ID,P1_SITE_ID:3602,16028">\
                    Original data from ITRDB</a></li><br>\
                    <li><a href="http://dendrobox.org/data/tree/russ019.csv">Chronology (CSV)</a></li><br>\
                    <li><a href="http://dendrobox.org/data/clim/russ019.csv">Climate average (CSV)</a></li><br>\
                    <li><a href="http://vs-genn.ru/sites_nnet/russ019_nnet.html">Chronology (train and test)</a></li></ul>',
            iconContent: 'ITRDB-Code: RUSS019',
            hintContent: '<b>ITRDB-Code: RUSS019</b><hr>\
                    Study site: LUKUNSKA RIVER <br> \
                    Species: LAGM<br>\
                    Investigator:JACOBY, G.C.<hr>\
                    <ul>\
                    <li><a href="http://hurricane.ncdc.noaa.gov/pls/paleox/f?P=519:1:::::P1_STUDY_ID,P1_SITE_ID:3602,16028">\
                    Original data from ITRDB</a></li><br>\
                    <li><a href="http://dendrobox.org/data/tree/russ019.csv">Chronology (CSV)</a></li><br>\
                    <li><a href="http://dendrobox.org/data/clim/russ019.csv">Climate average (CSV)</a></li><br>\
                    <li><a href="http://vs-genn.ru/sites_nnet/russ019_nnet.html">Chronology (train and test)</a></li></ul>'
        }, {
            //preset: 'islands#dotIcon',
            preset: 'islands#redStretchyIcon'
        }))
        .add(new ymaps.Placemark([67.3338, 124.4312], {
            balloonContent: '<b>ITRDB-Code: RUSS193</b><hr>\
                    Study site:  LOWER LENA <br> \
                    Species: LADE<br>\
                    Investigator:MACDONALD, G.M.<hr>\
                    <ul>\
                    <li><a href="http://hurricane.ncdc.noaa.gov/pls/paleox/f?P=519:1:::::P1_STUDY_ID,P1_SITE_ID:3902,16296">\
                    Original data from ITRDB</a></li><br>\
                    <li><a href="http://dendrobox.org/data/tree/russ193.csv">Chronology (CSV)</a></li><br>\
                    <li><a href="http://dendrobox.org/data/clim/russ193.csv">Climate average (CSV)</a></li><br>\
                    <li><a href="http://vs-genn.ru/sites_nnet/russ193_nnet.html">Chronology (train and test)</a></li></ul>',
            iconContent: 'ITRDB-Code: RUSS193',
            hintContent: '<b>ITRDB-Code: RUSS193</b><hr>\
                    Study site:  LOWER LENA <br> \
                    Species: LADE<br>\
                    Investigator:MACDONALD, G.M.<hr>\
                    <ul>\
                    <li><a href="http://hurricane.ncdc.noaa.gov/pls/paleox/f?P=519:1:::::P1_STUDY_ID,P1_SITE_ID:3902,16296">\
                    Original data from ITRDB</a></li><br>\
                    <li><a href="http://dendrobox.org/data/tree/russ193.csv">Chronology (CSV)</a></li><br>\
                    <li><a href="http://dendrobox.org/data/clim/russ193.csv">Climate average (CSV)</a></li><br>\
                    <li><a href="http://vs-genn.ru/sites_nnet/russ193_nnet.html">Chronology (train and test)</a></li></ul>'
        }, {
            preset: 'islands#redStretchyIcon'
           
        }))
        .add(new ymaps.Placemark([66.1427, 163.1030], {
            balloonContent: '<b>ITRDB-Code: RUSS198</b><hr>\
                    Study site:  RODENKA HILL <br> \
                    Species: LAGM<br>\
                    Investigator:BUNN, A.<hr>\
                    <ul>\
                    <li><a href="https://www.ncdc.noaa.gov/paleo/study/9929">\
                    Original data from ITRDB</a></li><br>\
                    <li><a href="http://dendrobox.org/data/tree/russ198.csv">Chronology (CSV)</a></li><br>\
                    <li><a href="http://dendrobox.org/data/clim/russ198.csv">Climate average (CSV)</a></li><br>\
                    <li><a href="http://vs-genn.ru/sites_nnet/russ198_nnet.html">Chronology (train and test)</a></li></ul>',
            iconContent: 'ITRDB-Code: RUSS198',
            hintContent: '<b>ITRDB-Code: RUSS198</b><hr>\
                    Study site:  RODENKA HILL <br> \
                    Species: LAGM<br>\
                    Investigator:BUNN, A.<hr>\
                    <ul>\
                    <li><a href="https://www.ncdc.noaa.gov/paleo/study/9929">\
                    Original data from ITRDB</a></li><br>\
                    <li><a href="http://dendrobox.org/data/tree/russ198.csv">Chronology (CSV)</a></li><br>\
                    <li><a href="http://dendrobox.org/data/clim/russ198.csv">Climate average (CSV)</a></li><br>\
                    <li><a href="http://vs-genn.ru/sites_nnet/russ198_nnet.html">Chronology (train and test)</a></li></ul>'
        }, {
            preset: 'islands#redStretchyIcon'
           
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
        
        //
        .add(new ymaps.Placemark([60.892940, 89.35 ], {
            balloonContent: 'Russian Federation, Krasnoyarskiy kray, Turukhanskiy rayon, selo Zotino',
            iconContent: '40',
            hintContent: 'Russian Federation, Krasnoyarskiy kray, Turukhanskiy rayon, selo Zotino'
        }, {
            //preset: 'islands#circleDotIcon',
            preset: 'islands#greenStretchyIcon'
        }))

	;
}
// http://about.sfu-kras.ru/campus/map
