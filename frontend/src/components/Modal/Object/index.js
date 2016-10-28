import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

export default class ModalObject extends React.Component {

    static propTypes = {
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        object: PropTypes.object
    };

    render () {
        const {open, onClose} = this.props;
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
                contentStyle={{'width': '600px'}}
                title="Are you sure?"
            >
                The action will delete the mate.
            </Dialog>
        )
    }
}
