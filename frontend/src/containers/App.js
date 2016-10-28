import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import ModalObject from 'components/Modal';
import Map from 'components/Map';
import MOCK_OBJECTS from 'api/mock';
import ObjectView from 'components/Object';

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
        objects : [],
        objectModal: {
            open: false,
            object: {},
        }
    };

    handleOpenObject = (e) => {
        const targetId = e.currentTarget.getAttribute('data-id');
        const targetObject = this.allObjects.filter((obj) => targetId == obj.id)[0];
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

    render () {
        const { objectModal } = this.state;
        return (
            <div className="app">
                <AppBar
                    title="Мое культурное наследие"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />

                <Map objects={this.state.objects}/>

                <ModalObject
                    open={objectModal.open}
                    onClose={this.handleCloseObject}
                    object={objectModal.object}
                />

                <RaisedButton
                    label="Тест для модалки"
                    data-id={1}
                    onTouchTap={this.handleOpenObject}
                />
                <ObjectView object={MOCK_OBJECTS[0]} />
            </div>
        )
    }

}