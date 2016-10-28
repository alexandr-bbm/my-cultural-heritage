import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

import './style.scss';

export default class ObjectSlider extends React.Component {
    render () {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            arrows: true,
            variableWidth: false
        };
        const {photos, addProposeToString} = this.props;
        return (
            <div className="object-slider">
                {!photos.length && addProposeToString('Фотографий еще не добавлено')}
                {!!photos.length &&
                    <Slider {...settings}>
                        {photos.map((url, key) => (
                            <div className="object-slider__image-container" key={key}>
                                {/* todo delete on deployment */}
                                <img className="object-slider__image" src={url} alt="" />
                            </div>
                        ))}
                    </Slider>
                }
            </div>
        );
    }
}