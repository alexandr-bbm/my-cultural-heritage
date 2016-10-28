import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class App extends React.Component {
    state = {
        news: '',
    };

    render () {
        return (
            <div className="app">
                <AppBar
                    title="Мое культурное наследие"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
            </div>
        )
    }

}