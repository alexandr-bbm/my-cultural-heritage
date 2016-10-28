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

class RatingEmpty extends Component {
    render() {
        return (
            <div className="ratings__item">
                <ToggleStarBorder color={cyan500}/>
            </div>
        )
    }
}
class RatingFull extends Component {
    render() {
        return (
            <div className="ratings__item">
                <ToggleStar color={cyan500}/>
            </div>
        )
    }
}

class RatingBlock extends Component {

    state = {
        rated: false,
        rating: this.props.rating,
        votesCount: 5,

    };

    componentDidMount () {
        const { objectId }= this.props;
        // RatingApi
        //     .getById(objectId)
        //     .then((res) => {
        //         this.setState({
        //             votesCount: '5',
        //         })
        //     })
    }

    onRatingChange = (rating) => {
        const { objectId }= this.props;
        RatingApi
            .vote(objectId, rating)
            .then(ObjectsApi.getById.bind(null, objectId))
            .then((res) => {
                this.setState({
                    rated: true,
                    rating: res.rating,
                    votesCount: this.state.votesCount + 1,
                })
            })
        ;
    };

    render() {
        const hint = this.state.rated ? 'Спасибо за вашу оценку!' : ' Оцените этот объект: ';
        return (
            <div className="ratings">
                <div>{ hint }</div>
                <Rating
                    empty={<RatingEmpty/>}
                    placeholder ={<RatingEmpty/>}
                    full={<RatingFull/>}
                    onChange={this.onRatingChange}
                    initialRate={this.state.rating}
                />
                { this.state.rating }
                ({ this.state.votesCount })
            </div>
        );
    }
}

export default RatingBlock;
