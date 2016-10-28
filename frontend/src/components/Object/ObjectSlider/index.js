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
        const images = [
            'http://www.tomsk.ru09.ru/foto/albums/tomsk/userpics/16375/normal_img_2841.jpg',
        ];
        return (
            <div className="object-slider">
                <Slider {...settings}>
                    {images.map((url) => (
                        <div className="object-slider__image-container">
                            <img className="object-slider__image" src={url} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}