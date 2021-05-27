
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import classes from './Swiper.module.css';

import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperSlider = (props) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                pagination={{
                    "clickable": true
                }}
                navigation={true}
                slidesPerView={1}
                loop={true}
                loopPreventsSlide={false}
                speed={800}
                className={classes.mySwiper}
            >
                <SwiperSlide className={classes.slider}>
                    <img src={props && props.sliderPhotos && props.sliderPhotos[0]} alt=''></img>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <img src={props && props.sliderPhotos && props.sliderPhotos[1]} alt=''></img>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <img src={props && props.sliderPhotos && props.sliderPhotos[2]} alt=''></img>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <img src={props && props.sliderPhotos && props.sliderPhotos[3]} alt=''></img>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <img src={props && props.sliderPhotos && props.sliderPhotos[4]} alt=''></img>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <img src={props && props.sliderPhotos && props.sliderPhotos[5]} alt=''></img>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SwiperSlider;
