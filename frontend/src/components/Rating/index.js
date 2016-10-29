import React, {
    Component,
    PropTypes,
} from 'react';
import Rating from 'react-rating';
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import {cyan500} from 'material-ui/styles/colors';
import './style.scss';
import RatingApi from 'api/rating';
import ObjectsApi from 'api/objects';
import Storage from 'services/storage';

class RatingEmpty extends Component {
    render () {
        return (
            <div className="ratings__item">
                <ToggleStarBorder color={cyan500} />
            </div>
        )
    }
}
class RatingFull extends Component {
    render () {
        return (
            <div className="ratings__item">
                <ToggleStar color={cyan500} />
            </div>
        )
    }
}

class RatingBlock extends Component {

    state = {
        rating: this.props.rating,
        votesCount: 5,
        readonly: false,
    };

    componentDidMount () {
        if (Storage.isVoted(this.props.objectId)) {
            this.setState({
                readonly: true
            })
        }
    }

    onRatingChange = (rating) => {
        const {objectId}= this.props;
        RatingApi
            .vote(objectId, rating)
            .then(ObjectsApi.getById.bind(null, objectId))
            .then((res) => {
                Storage.addVoted(objectId);
                this.setState({
                    rating: res.rating,
                    readonly: true
                })
            })
        ;
    };

    render () {
        const hint = this.state.readonly ? 'Спасибо за вашу оценку!' : ' Оцените этот объект: ';
        let ratingAvg = this.state.rating.avg;
        if ( null == ratingAvg ) {
            ratingAvg = 0;
        }
        return (
            <div className="ratings">
                <div className="mdl-typography--body-2">{ hint }</div>
                <Rating
                    empty={<RatingEmpty />}
                    placeholder={<RatingEmpty />}
                    full={<RatingFull />}
                    onChange={this.onRatingChange}
                    initialRate={this.state.rating.avg}
                    readonly={this.state.readonly}
                />
                <span className="mdl-typography--body-1">
                    &nbsp;
                    { ratingAvg.toFixed(1) }
                    &nbsp;
                    ({ this.state.rating.count })
                </span>
            </div>
        );
    }
}

export default RatingBlock;
