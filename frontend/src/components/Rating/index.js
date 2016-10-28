import React, {
    Component,
    PropTypes,
} from 'react';
import Rating from 'react-rating';
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import {cyan500} from 'material-ui/styles/colors';
import './style.scss';

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
    render() {
        return (
            <div className="ratings">
                <span> Оцените этот объект: </span>
                <Rating
                    empty={<RatingEmpty/>}
                    placeholder ={<RatingEmpty/>}
                    full={<RatingFull/>}
                    onChange={this.props.onRatingChange}
                    placeholderRate={3}/>
            </div>
        );
    }
}

export default RatingBlock;
