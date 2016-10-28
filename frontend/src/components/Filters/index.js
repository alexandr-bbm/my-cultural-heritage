import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

class Filters extends React.Component {
    handleActive = (tab)=> {
        var filter = tab.props.filter;
        this.props.onFilter(filter)
    }
    render() {
        return (
            <Tabs>
                <Tab filter="all" label="Все" onActive={this.handleActive}/>
                <Tab filter="wood" label="Деревянное зодчество" onActive={this.handleActive}/>
                <Tab filter="monuments" label="Памятники" onActive={this.handleActive}/>
                <Tab filter="temples" label="Монастыри и храмы" onActive={this.handleActive}/>
                <Tab filter="study" label="Учебные заведения" onActive={this.handleActive}/>
            </Tabs>
        )
    }
}

export default Filters;