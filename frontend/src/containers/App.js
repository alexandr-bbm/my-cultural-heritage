import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import ModalObject from 'components/Modal';
import Map from 'components/Map';
import MOCK_OBJECTS from 'api/mock';
import ObjectView from 'components/Object';
import Filters from 'components/Filters';

injectTapEventPlugin();

export default class App extends React.Component {

    componentDidMount() {
        this.allObjects = MOCK_OBJECTS;
        this.setState({
            objects: this.allObjects,
        })
    }

    state = {
        filter: '',
        objects: [],
        objectModal: {
            open: false,
            object: {},
        }
    };

    handleOpenObject = (id) => {
        const targetObject = this.allObjects.filter((obj) => id == obj.id)[0];
        if (targetObject) {
            this.setState({
                objectModal: {
                    open: true,
                    object: targetObject
                }
            })
        }
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
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />

                <Filters onFilter={this.onFilter}/>

                <Map
                    onObjectClick={this.handleOpenObject}
                    filter={this.state.filter}
                    objects={this.state.objects}/>

                <ModalObject
                    open={objectModal.open}
                    onClose={this.handleCloseObject}
                    object={objectModal.object}
                />
            </div>
        )
    }

}