import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import ModalObject from 'components/Modal';
import Map from 'components/Map';
import Filters from 'components/Filters';
import getObjects from 'api/getObjects';
import ObjectApi from 'api/objects';

injectTapEventPlugin();

export default class App extends React.Component {

    componentDidMount() {
        getObjects().then((response)=> {
            this.allObjects = response;
            this.setState({
                loading: false,
                objects: this.allObjects,
            })
        });
    }

    state = {
        filter: 'all',
        objects: [],
        loading: true,
        objectModal: {
            open: false,
            object: {},
        }
    };

    handleOpenObject = (id) => {
        ObjectApi.getById(id)
            .then((object) => {
                this.setState({
                    objectModal: {
                        open: true,
                        object
                    }
                })
            });
    };

    handleCloseObject = () => {
        this.setState({
            objectModal: {
                open: false,
                object: {}
            }
        })
    };

    onFilter = (filter) => {
        this.setState({
            filter: filter
        })
    };

    onTwit = (title) => {
        window.open('https://twitter.com/intent/tweet?text='+title);
    };

    onVk = (title) => {
        window.open('http://vk.com/share.php?url=http://heritage.pythonanywhere.com/&title='+title);
    };

    render() {
        const {objectModal} = this.state;
        return (
            <div className="app">

                <AppBar
                    title="Мое наследие | Все объекты культурного наследия г. Томска"
                    iconElementLeft={<span></span>}
                />

                <Filters
                    filter={this.state.filter}
                    onFilter={this.onFilter}/>

                <Map
                    loading={this.state.loading}
                    onObjectClick={this.handleOpenObject}
                    filter={this.state.filter}
                    objects={this.state.objects}
                />
                <ModalObject
                    onVk={this.onVk}
                    onTwit={this.onTwit}
                    open={objectModal.open}
                    onClose={this.handleCloseObject}
                    object={objectModal.object}
                />

            </div>
        )
    }

}