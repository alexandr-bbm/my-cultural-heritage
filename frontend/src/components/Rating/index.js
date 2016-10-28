import React, {
    Component,
    PropTypes,
} from 'react';
import Rating from 'react-rating';

class RatingBlock extends Component {
    render() {
        return (
            <div>
                <Rating
                    onChange={this.props.onRatingChange}
                    placeholderRate={3}/>
            </div>
        );
    }
}

export default RatingBlock;
