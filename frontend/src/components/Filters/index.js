import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

class Filters extends React.Component {
    handleActive = (tab)=> {
        var filter = tab.props.value;
        this.props.onFilter(filter)
    }
    render() {
        return (
            <Tabs >
                <Tab value="all" label="Все" onActive={this.handleActive}/>
                <Tab value="wood" label="Деревянное зодчество" onActive={this.handleActive}/>
                <Tab value="monuments" label="Памятники" onActive={this.handleActive}/>
                <Tab value="temples" label="Монастыри и храмы" onActive={this.handleActive}/>
                <Tab value="study" label="Учебные заведения" onActive={this.handleActive}/>
            </Tabs>
        )
    }
}

export default Filters;