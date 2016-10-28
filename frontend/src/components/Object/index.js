import React, {PropTypes} from 'react';
import ObjectSlider from './ObjectSlider';

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
            <div>

                <ObjectSlider />
                {object.description}
            </div>
        )
    }
}
