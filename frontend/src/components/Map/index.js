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

    getPointOptions(title) {
        return {
            iconLayout: 'default#image',
            iconImageHref: 'assets/marker.svg',
            iconImageSize: [30, 30],
            balloonPanelMaxMapArea: 0,
            title: title
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
                {hintContent: elem.title}, this.getPointOptions());
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
