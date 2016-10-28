import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

export default class ObjectSlider extends React.Component {
    render () {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true
        };
        const images = [
            'http://www.tomsk.ru09.ru/foto/albums/tomsk/userpics/16375/normal_img_2841.jpg',
            'http://sobory.ru/pic/34550/34591bb.jpg',
        ];
        return (
            <div className="object-slider">
                <Slider {...settings}>
                    {images.map((url) => (
                        <div>
                            <img src={url} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}