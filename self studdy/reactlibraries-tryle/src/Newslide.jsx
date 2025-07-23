import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Imgone from './assets/img-one.jpg'
import Imgtwo from './assets/img-two.webp'
import Imgthree from './assets/img-four.jpeg'

import './slide.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";



function Newslide() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src="https://picsum.photos/id/237/1000/500" alt="" />
                </div>
                <div>
                    <img src="https://picsum.photos/id/237/1000/500" alt="" />
                </div>
                <div>
                    <img src="https://picsum.photos/id/237/1000/500" alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default Newslide;
