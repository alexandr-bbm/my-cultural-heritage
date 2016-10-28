import React, {
    PropTypes,
} from 'react';

class Map extends React.Component {
    componentDidMount() {
        this.initMap();
    }
    initMap() {
        this.map = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 7
        });
    }

    render(objects) {
        return <div id="id"></div>
    }
}


export default Map;
