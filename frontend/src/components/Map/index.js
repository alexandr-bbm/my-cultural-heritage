import React, {
    PropTypes,
} from 'react';
import './style.scss';
import Preloader from './preloader';

class Map extends React.Component {

    initMap(nextProps) {
        ymaps.ready(()=> {
            this.myMap = new ymaps.Map('map', {
                center: [56.478639, 84.949383],
                zoom: 13,
                maxZoom: 15,
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

    getPointOptions(rating) {
        var rating = rating.toFixed();
        let HintLayout = ymaps.templateLayoutFactory.createClass( "<div class='map__hint'>" +
            "<b>{{ properties.title }}</b>" +
            "</div>", {
                // Определяем метод getShape, который
                // будет возвращать размеры макета хинта.
                // Это необходимо для того, чтобы хинт автоматически
                // сдвигал позицию при выходе за пределы карты.
                getShape: function () {
                    var el = this.getElement(),
                        result = null;
                    if (el) {
                        var firstChild = el.firstChild;
                        result = new ymaps.shape.Rectangle(
                            new ymaps.geometry.pixel.Rectangle([
                                [0, 0],
                                [firstChild.offsetWidth, firstChild.offsetHeight]
                            ])
                        );
                    }
                    return result;
                }
            }
        );

        var iconSize;

        switch (rating) {
            case "0" :
                iconSize = [20,20];
                break;

            case "1" :
                iconSize = [20,20];
                break;

            case "2" :
                iconSize = [30,30];
                break;

            case "3" :
                iconSize = [30,30];
                break;

            case "4" :
                iconSize = [40,40];
                break;

            case "5" :
                iconSize = [50,50];
                break;
            default :
                iconSize = [20,20];
        }
        return {
            iconLayout: 'default#image',
            iconImageHref: 'assets/marker.svg',
            iconImageSize: iconSize,
            balloonPanelMaxMapArea: 0,
            hintLayout: HintLayout
        };
    }

    getObjects = (nextProps)=> {
        if (nextProps.filter == "all") {
            return nextProps.objects
        }
        return nextProps.objects.filter((elem)=> {
            return (elem.tags.indexOf(nextProps.filter.toLowerCase()) != -1)
        })
    };

    getClustererOptions() {
        return {
            preset: 'islands#invertedBlackClusterIcons',
            groupByCoordinates: false,
            clusterDisableClickZoom: true,
            clusterHideIconOnBalloonOpen: false,
            openBalloonOnClick: false,
            geoObjectHideIconOnBalloonOpen: false
        }
    }

    generateGeoObjects(objects) {
        return objects.map((elem)=> {
            let id = elem.id;
            var geoObjects = new ymaps.Placemark(elem.coords,
                {title: elem.title}, this.getPointOptions(elem.rating.avg));
            //click
            geoObjects.events.add('click', () => {
                this.handleMarkerClick(id);
            });
            return geoObjects
        })
    }


    renderObjects(nextProps) {
        let clusterer = new ymaps.Clusterer(this.getClustererOptions()),
            objects = this.getObjects(nextProps),
            geoObjects = this.generateGeoObjects(objects);

        clusterer.add(geoObjects);
        this.myMap.geoObjects.add(clusterer);
    }

    componentWillUpdate(nextProps) {
        if (this.myMap) {
            this.myMap.geoObjects.removeAll();
            this.renderObjects(nextProps);
            return;
        }
        this.initMap(nextProps);
    }

    render() {
        return <div className="map" id="map">
            {this.props.loading ?
                <Preloader />
                : null}
        </div>
    }
}


export default Map;
