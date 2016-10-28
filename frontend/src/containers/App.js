import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import ModalObject from 'components/Modal/Object';
import Map from 'components/Map';

injectTapEventPlugin();

export default class App extends React.Component {

    componentDidMount() {
        this.allObjects = [
            {
                id: '1',
                title : 'Деревянный дом',
                coords : [56.479658, 85.070571],
                address : 'г. Томск ул. Никитина 10'
            },
            {
                id: '2',
                title : 'Деревянный дом 2',
                coords : [56.48658, 85.090571],
                address : 'г. Томск ул. Никитина 10'
            }
        ];
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
        const targetObject = this.allObjects.filter((obj) => targetId === obj.id)[0];
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
                <RaisedButton
                    label="Тест для модалки"
                    data-id={1}
                    onTouchTap={this.handleOpenObject}
                />
                <ModalObject
                    open={objectModal.open}
                    onClose={this.handleCloseObject}
                    object={objectModal.object}
                />

                <Map objects={this.state.objects}/>
            </div>
        )
    }

}