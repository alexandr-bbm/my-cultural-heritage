import React, {
    Component,
    PropTypes,
} from 'react';
import * as reactRating from 'react-rating';

class Rating extends Component {
    render() {
        return (
            <div>
                <Rating placeholderRate={3}/>
            </div>
        );
    }
}

export default Rating;
