import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ObjectView from 'components/Object';
import RatingBlock from 'components/Rating';
import getProposeHref from 'services/proposeHref';
import RaisedButton from 'material-ui/RaisedButton';

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

    onRatingChange = (e)=> {
        console.log(e);
    };

    render() {
        const {open, onClose, object} = this.props;
        const actions = [
            <RaisedButton
                label="Я знаю больше"
                href={getProposeHref(object)}
                style={{marginRight : 10}}/>,
            <FlatButton
                label="Закрыть"
                onTouchTap={onClose}
            />
        ];
        const modalHeader = <div>
            <h3 className="no-margin">{object.title}</h3>
            {object && <RatingBlock
                onRatingChange={this.props.onRatingChange}
                objectId={object.id}
                rating={object.rating}
            />}
        </div>;
        return (
            <Dialog
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
