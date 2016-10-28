import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ObjectView from 'components/Object';

const customContentStyle = {
    width: '100%',
    maxWidth: 'none',
};

class ModalObject extends React.Component {

    static propTypes = {
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        object: PropTypes.object
    };

    render () {
        const {open, onClose, object} = this.props;
        const actions = [
            <FlatButton
                label="Закрыть"
                onTouchTap={onClose}
            />
        ];
        return (
            <Dialog
                actions={actions}
                modal={false}
                open={open}
                onRequestClose={onClose}
                contentStyle={customContentStyle}
                title={object.title}
                autoScrollBodyContent={true}
                bodyStyle={{ overflowY: 'hidden'}}
            >
                <ObjectView object={object} />
            </Dialog>
        )
    }
}
export default ModalObject;
