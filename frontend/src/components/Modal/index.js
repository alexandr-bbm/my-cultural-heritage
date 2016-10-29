import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ObjectView from 'components/Object';
import RatingBlock from 'components/Rating';
import getProposeHref from 'services/proposeHref';
import IconButton from 'material-ui/IconButton';
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

    onShare = (type)=> {
        var title = this.props.object.title;
        type == "twitter" ? this.props.onTwit(title) : this.props.onVk(title);
    };

    render() {
        const {open, onClose, object} = this.props;
        const actions = [
            <RaisedButton
                label="Я знаю больше"
                href={getProposeHref(object)}
                target="_blank"
                primary={true}
                style={{marginRight: 10}}/>,
            <FlatButton
                label="Закрыть"
                onTouchTap={onClose}
            />
        ];
        const modalHeader = <div>
            <h5 className="no-margin _truncate">{object.title}</h5>
            {
                object && <RatingBlock
                    onRatingChange={this.props.onRatingChange}
                    objectId={object.id}
                    rating={object.rating}/>
            }
            <IconButton className="modal__social modal__twitter" onClick={()=> {
                this.onShare('twitter')
            }
            }>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.197 112.197">
                    <circle cx="56.099" cy="56.098" r="56.098" fill="#55ACEE"/>
                    <path d="M90.46 40.316c-2.403 1.066-4.99 1.787-7.7 2.11 2.768-1.66 4.893-4.285 5.896-7.418-2.59 1.537-5.462 2.652-8.515 3.253-2.445-2.604-5.93-4.232-9.79-4.232-7.403 0-13.408 6.005-13.408 13.41 0 1.05.12 2.073.35 3.055-11.145-.56-21.026-5.897-27.64-14.012-1.154 1.98-1.816 4.286-1.816 6.743 0 4.65 2.37 8.757 5.965 11.16-2.196-.068-4.265-.67-6.072-1.678v.17c0 6.497 4.623 11.916 10.756 13.147-1.124.308-2.31.47-3.532.47-.866 0-1.705-.082-2.523-.238 1.705 5.326 6.656 9.203 12.525 9.312-4.59 3.597-10.37 5.74-16.655 5.74-1.08 0-2.15-.063-3.197-.188 5.93 3.806 12.98 6.025 20.553 6.025 24.664 0 38.152-20.432 38.152-38.153 0-.58-.013-1.16-.04-1.734 2.623-1.89 4.896-4.25 6.693-6.94z" fill="#F1F2F2"/>
                </svg>
            </IconButton>
            <IconButton className="modal__social modal__twitter" onClick={()=> {
                this.onShare('vk')
            }
            }>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.196 112.196">
                    <circle cx="56.098" cy="56.098" r="56.098" fill="#4D76A1"/>
                    <path d="M53.98 80.702h4.402s1.33-.146 2.01-.878c.624-.672.604-1.934.604-1.934s-.086-5.908 2.656-6.778c2.703-.857 6.174 5.71 9.853 8.235 2.782 1.91 4.896 1.492 4.896 1.492l9.838-.138s5.146-.317 2.706-4.363c-.2-.332-1.42-2.994-7.314-8.464-6.168-5.725-5.342-4.8 2.088-14.702 4.525-6.03 6.334-9.713 5.77-11.29-.54-1.502-3.868-1.105-3.868-1.105l-11.076.068s-.82-.112-1.43.252c-.595.357-.978 1.19-.978 1.19s-1.753 4.666-4.09 8.635c-4.933 8.375-6.905 8.817-7.71 8.297-1.876-1.212-1.408-4.87-1.408-7.467 0-8.116 1.23-11.5-2.397-12.376-1.203-.292-2.09-.484-5.168-.515-3.952-.04-7.297.012-9.19.94-1.26.617-2.233 1.992-1.64 2.07.73.1 2.39.448 3.268 1.645 1.135 1.544 1.095 5.012 1.095 5.012s.652 9.554-1.523 10.74c-1.493.815-3.54-.847-7.938-8.445-2.253-3.892-3.954-8.194-3.954-8.194s-.328-.804-.913-1.234c-.71-.522-1.702-.688-1.702-.688l-10.525.07s-1.58.043-2.16.73c-.516.61-.04 1.875-.04 1.875s8.24 19.278 17.57 28.993c8.554 8.907 18.27 8.322 18.27 8.322z" fill="#FFF"/>
                </svg>
            </IconButton>
        </div>;
        return (
            <Dialog
                className="modal"
                actions={actions}
                modal={false}
                open={open}
                onRequestClose={onClose}
                contentClassName="dialog-content"
                bodyClassName="dialog-body"
                contentStyle={customContentStyle}
                title={modalHeader}
                autoScrollBodyContent={true}
            >
                <ObjectView object={object}/>
            </Dialog>
        )
    }
}
export default ModalObject;
