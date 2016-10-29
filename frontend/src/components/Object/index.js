import React, {PropTypes} from 'react';
import ObjectSlider from './ObjectSlider';
import Chip from 'material-ui/Chip';
import RatingBlock from 'components/Rating';
import getProposeHref from 'services/proposeHref';
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

    componentWillMount () {
        const { object } = this.props;
        this.proposeInfoHref = getProposeHref(object);
        this.addProposeToString = (str) => {
            return (
                <span className="mdl-typography--body-1">
                    {str} <a target="_blank" href={this.proposeInfoHref}>Предложить информацию</a>
                </span>
            )
        }
    }

    render () {
        const { object } = this.props;
        return (
            <div className="object-view">
                <h5>{object.title}</h5>
                <h5>Галлерея</h5>
                <ObjectSlider
                    photos={object.photos}
                    addProposeToString={this.addProposeToString}
                />
                <h5 className="object-view__title">Описание объекта</h5>
                <p>
                    {object.description ? object.description : this.addProposeToString('Описания еще не добавлено.')}
                </p>

                <h5>Тэги</h5>
                <div>
                    {!!object.tags.length && object.tags.map((tag) => (
                        <Chip style={{margin: 4}} >
                            { tag }
                        </Chip>
                    ))}
                    {!object.tags.length && this.addProposeToString('Теги еще не добавлены')}
                </div>
            </div>
        )
    }
}
