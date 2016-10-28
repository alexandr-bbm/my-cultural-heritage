import React, {
    Component,
    PropTypes,
} from 'react';
import Rating from 'react-rating';
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ToggleStarHalf from 'material-ui/svg-icons/toggle/star-half';
import './style.scss';

class RatingEmpty extends Component {
    render() {
        return (
            <div className="rating">
                <ToggleStarBorder />
            </div>
        )
    }
}
class RatingFull extends Component {
    render() {
        return (
            <div className="rating">
                <ToggleStar />
            </div>
        )
    }
}

class RatingBlock extends Component {
    render() {
        return (
            <div>
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
