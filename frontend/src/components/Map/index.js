import React, {
    PropTypes,
} from 'react';
import './style.scss';

class Map extends React.Component {

    initMap(nextProps) {
        ymaps.ready(()=> {
            this.myMap = new ymaps.Map('map', {
                center: [56.491539, 84.988026],
                zoom: 13,
                maxZoom: 14,
                controls: ['zoomControl']
            });
            if (nextProps.objects.length) {
                this.renderObjects(nextProps);
            }
        });
    }

    handleMarkerClick(id) {
        this.props.onObjectClick(id);
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
            iconImageSize: '200'
        };
    }

    getObjects = (nextProps)=> {
        if(nextProps.filter == "all") {
            return nextProps.objects
        }
        return nextProps.objects.filter((elem)=>    {
            return (elem.tags.indexOf(nextProps.filter) != -1)
        })
    };

    renderObjects(nextProps) {
        let clusterer = new ymaps.Clusterer({
            preset: 'islands#invertedBrownClusterIcons',
            groupByCoordinates: false,
            clusterDisableClickZoom: true,
            clusterHideIconOnBalloonOpen: false,
            openBalloonOnClick: false,
            geoObjectHideIconOnBalloonOpen: false
        });
        let objects = this.getObjects(nextProps),
            geoObjects = [];
        for (var i = 0, len = objects.length; i < len; i++) {
            let id = objects[i].id;
            geoObjects[i] = new ymaps.Placemark(objects[i].coords, this.getPointData(), this.getPointOptions());
            //click
            geoObjects[i].events.add('click', (e) => {
                this.handleMarkerClick(id);
            });
        }
        clusterer.add(geoObjects);
        this.myMap.geoObjects.add(clusterer);
    }

    componentWillUpdate(nextProps) {
        if(this.myMap) {
            this.myMap.destroy();
        }
        this.initMap(nextProps);
    }

    render() {
        return <div className="map" id="map"></div>
    }
}


export default Map;
