
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

export default function SwiperSlider(props) {
    console.log('props ', props.sliderPhotos);
    return (
        <>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }} pagination={{
                "clickable": true
            }} navigation={true} className={classes.mySwiper}>
                <SwiperSlide className={classes.slider}>
                    <img src={props.sliderPhotos[0]} alt=''></img>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <img src={props.sliderPhotos[1]} alt=''></img>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <img src={props.sliderPhotos[2]} alt=''></img>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <img src={props.sliderPhotos[3]} alt=''></img>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <img src={props.sliderPhotos[4]} alt=''></img>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <img src={props.sliderPhotos[5]} alt=''></img>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
