import React from 'react';

export default class App extends React.Component {
    state = {
        news: '',
        objects : [
            {
                title : 'Деревянный дом',
                coords : [56.479658, 85.070571],
                address : 'г. Томск ул. Никитина 10'
            },
            {
                title : 'Деревянный дом 2',
                coords : [56.48658, 85.090571],
                address : 'г. Томск ул. Никитина 10'
            }
        ]
    };

    render () {
        return (
            <div className="app">
                <AppBar
                    title="Мое культурное наследие"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <Map />
            </div>
        )
    }

}