import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ObjectView from 'components/Object';
import RatingBlock from 'components/Rating';
import getProposeHref from 'services/proposeHref';
import RaisedButton from 'material-ui/RaisedButton';
import './style.scss';

const customContentStyle = {
    width: '100%',
    maxWidth: '768px',
};

class ModalObject extends React.Component {

    static propTypes = {
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        object: PropTypes.object
    };

    onRatingChange = (e)=> {
        console.log(e);
    };

    render() {
        const {open, onClose, object} = this.props;
        const actions = [
            <RaisedButton
                label="Я знаю больше"
                href={getProposeHref(object)}
                target="_blank"
                primary={true}
                style={{marginRight : 10}}/>,
            <FlatButton
                label="Закрыть"
                onTouchTap={onClose}
            />
        ];
        const modalHeader = <div>
            <h5 className="no-margin _truncate">{object.title}</h5>
            {object && <RatingBlock
                onRatingChange={this.props.onRatingChange}
                objectId={object.id}
                rating={object.rating}
            />}
        </div>;
        return (
            <Dialog
                className="modal"
                actions={actions}
                modal={false}
                open={open}
                onRequestClose={onClose}
                contentStyle={customContentStyle}
                title={modalHeader}
                autoScrollBodyContent={true}
            >
                <ObjectView object={object} />
            </Dialog>
        )
    }
}
export default ModalObject;
