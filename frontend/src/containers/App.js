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
                loading : false,
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

    render() {
        const {objectModal} = this.state;
        return (
            <div className="app">

                <AppBar
                    title="Мое культурное наследие | Томск"
                    iconElementLeft={<span></span>}
                />

                <Filters onFilter={this.onFilter}/>

                <Map
                    loading={this.state.loading}
                    onObjectClick={this.handleOpenObject}
                    filter={this.state.filter}
                    objects={this.state.objects}
                />
                <ModalObject
                    open={objectModal.open}
                    onClose={this.handleCloseObject}
                    object={objectModal.object}
                />

            </div>
        )
    }

}