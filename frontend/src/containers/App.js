import React from 'react';
import Map from '../components/Map';

export default class App extends React.Component {
    state = {
        news: '',
    };

    render () {
        return (
            <div className="app">
                <h3>My react boilerplate</h3>
                <Map />
            </div>
        )
    }

}