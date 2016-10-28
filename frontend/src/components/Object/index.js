import React, {PropTypes} from 'react';
import ObjectSlider from './ObjectSlider';
import Chip from 'material-ui/Chip';

import RatingBlock from 'components/Rating';
import RaisedButton from 'material-ui/RaisedButton';
import './style.scss';

const customContentStyle = {
    width: '100%',
    maxWidth: 'none',
    height: '100vh'
};

export default class ObjectView extends React.Component {

    static propTypes = {
        object: PropTypes.object
    };

    render () {
        const { object } = this.props;
        return (
            <div className="object-view">
                <h4>Галлерея</h4>
                <ObjectSlider photos={object.photos} />
                <h4 className="object-view__title">Описание объекта</h4>
                <p>
                    {object.description ? object.description : 'Описания еще не добавлено.'}
                </p>
                <RaisedButton
                    label="Добавить описание"
                    href={"mailto:headfire94work@gmail.com?subject=Описание для (" + object.id + ") " +object.title}
                    style={{marginBottom : 10}}/>
                <h4>Тэги</h4>
                <div>
                    {object.tags.map((tag) => (
                        <Chip style={{margin: 4}} >
                            { tag }
                        </Chip>
                    ))}
                </div>
            </div>
        )
    }
}
