import React, {
    PropTypes,
} from 'react';
import './style.scss';

class Map extends React.Component {
    componentDidMount() {
        this.initMap();
    }
    initMap() {
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map', {
                    center: [56.479658, 85.070571],
                    zoom: 14,
                    behaviors: ['default', 'scrollZoom']
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                /**
                 * Создадим кластеризатор, вызвав функцию-конструктор.
                 * Список всех опций доступен в документации.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Clusterer.xml#constructor-summary
                 */
                clusterer = new ymaps.Clusterer({
                    /**
                     * Через кластеризатор можно указать только стили кластеров,
                     * стили для меток нужно назначать каждой метке отдельно.
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/option.presetStorage.xml
                     */
                    preset: 'islands#invertedVioletClusterIcons',
                    /**
                     * Ставим true, если хотим кластеризовать только точки с одинаковыми координатами.
                     */
                    groupByCoordinates: false,
                    /**
                     * Опции кластеров указываем в кластеризаторе с префиксом "cluster".
                     * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ClusterPlacemark.xml
                     */
                    clusterDisableClickZoom: true,
                    clusterHideIconOnBalloonOpen: false,
                    geoObjectHideIconOnBalloonOpen: false
                }),
                /**
                 * Функция возвращает объект, содержащий данные метки.
                 * Поле данных clusterCaption будет отображено в списке геообъектов в балуне кластера.
                 * Поле balloonContentBody - источник данных для контента балуна.
                 * Оба поля поддерживают HTML-разметку.
                 * Список полей данных, которые используют стандартные макеты содержимого иконки метки
                 * и балуна геообъектов, можно посмотреть в документации.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/GeoObject.xml
                 */
                getPointData = function (index) {
                    return {
                        balloonContentBody: '',
                        clusterCaption: 'контент'
                    };
                },
                /**
                 * Функция возвращает объект, содержащий опции метки.
                 * Все опции, которые поддерживают геообъекты, можно посмотреть в документации.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/GeoObject.xml
                 */
                getPointOptions = function () {
                    return {
                        preset: 'islands#violetIcon'
                    };
                },
                points = [this.props.objects],
                geoObjects = [];

            /**
             * Данные передаются вторым параметром в конструктор метки, опции - третьим.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark.xml#constructor-summary
             */
            for(var i = 0, len = points.length; i < len; i++) {
                geoObjects[i] = new ymaps.Placemark(points[i], getPointData(i), getPointOptions());

                //hover
                geoObjects[i].events.add('mouseenter', (e) => {
                    let balloon = e.get('target').balloon;
                    balloon.open();
                });
                //click
                geoObjects[i].events.add('click', (e) => {
                    let balloon = e.get('target').balloon;
                    this.handleMarkerClick();
                });
            }

            /**
             * Можно менять опции кластеризатора после создания.
             */
            clusterer.options.set({
                gridSize: 40,
                clusterDisableClickZoom: true
            });

            /**
             * В кластеризатор можно добавить javascript-массив меток (не геоколлекцию) или одну метку.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Clusterer.xml#add
             */
            clusterer.add(geoObjects);
            myMap.geoObjects.add(clusterer);

            /**
             * Спозиционируем карту так, чтобы на ней были видны все объекты.
             */

            myMap.setBounds(clusterer.getBounds(), {
                checkZoomRange: true
            });
        });
    }

    handleMarkerClick() {
        console.log('click');
    }
    renderObjects() {

    }

    render(objects) {
        return <div className="map" id="map"></div>
    }
}


export default Map;
