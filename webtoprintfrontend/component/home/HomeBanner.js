import React, { Component } from 'react';
import Slider from 'react-slick';
import NextArrow from '../elements/carousel/NextArrow';
import PrevArrow from '../elements/carousel/PrevArrow';
import BannerItem from '../elements/media/BannerItem';
import Promotion from '../elements/media/Promotion';


const HomeBanner = () =>  {
    const carouselSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="ps-home-banner ps-home-banner--1">
            <div className="ps-container">
                <div className="ps-section__left">
                        <Slider
                            {...carouselSetting}
                            className="ps-carousel">
                            <BannerItem link="/" image="/static/img/yeolimprinting/banner_1595291566.png"/>
                        </Slider>
                </div>
                <div className="ps-section__right">
                    <Promotion link="/" image="/static/img/yeolimprinting/banner_1595291566.png"/>
                    <Promotion link="/" image="/static/img/yeolimprinting/banner_1595291566.png"/>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;
