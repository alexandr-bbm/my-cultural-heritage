import React, {
    PropTypes,
} from 'react';
import './style.scss';

class Map extends React.Component {
    componentDidMount() {
        this.initMap();
    }

    initMap() {
        ymaps.ready(()=> {
            this.myMap = new ymaps.Map('map', {
                center: [56.4894541, 84.8685494],
                zoom: 14,
                controls: ['zoomControl'],
            });
            this.renderObjects();
        });
    }

    handleMarkerClick(id) {
        console.log(id);
    }

    handleObjectHover(e) {
        console.log(e.get('target'));
    }

    getPointData() {
        /**
         * Функция возвращает объект, содержащий данные метки.
         * Поле данных clusterCaption будет отображено в списке геообъектов в балуне кластера.
         * Поле balloonContentBody - источник данных для контента балуна.
         * Оба поля поддерживают HTML-разметку.
         * Список полей данных, которые используют стандартные макеты содержимого иконки метки
         * и балуна геообъектов, можно посмотреть в документации.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/GeoObject.xml
         */
        return {
            balloonContentBody: '',
            clusterCaption: '<p data-tip="hello world">Tooltip</p>'
        };
    }

    getPointOptions() {
        return {
            preset: 'islands#lightBlueCircleDotIcon',
            iconImageSize : '200'
        };
    }

    renderObjects() {
        let clusterer = new ymaps.Clusterer({
            /**
             * Через кластеризатор можно указать только стили кластеров,
             * стили для меток нужно назначать каждой метке отдельно.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/option.presetStorage.xml
             */
            preset: 'islands#invertedBrownClusterIcons',
            groupByCoordinates: false,
            clusterDisableClickZoom: true,
            clusterHideIconOnBalloonOpen: false,
            geoObjectHideIconOnBalloonOpen: false
        });
        let objects = this.props.objects,
            geoObjects = [];

        for (var i = 0, len = objects.length; i < len; i++) {
            let id = objects[i].id;
            geoObjects[i] = new ymaps.Placemark(objects[i].coords, this.getPointData(), this.getPointOptions());
            // //hover
            // geoObjects[i].events.add('mouseenter', (e) => {
            //     this.handleObjectHover(e);
            // });
            //click
            geoObjects[i].events.add('click', (e) => {
                this.handleMarkerClick(id);
            });
        }

        /**
         * В кластеризатор можно добавить javascript-массив меток (не геоколлекцию) или одну метку.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Clusterer.xml#add
         */
        clusterer.add(geoObjects);
        this.myMap.geoObjects.add(clusterer);


        this.myMap.setBounds(clusterer.getBounds(), {
            checkZoomRange: true
        });
    }

    render(objects) {
        return <div className="map" id="map"></div>
    }
}


export default Map;
