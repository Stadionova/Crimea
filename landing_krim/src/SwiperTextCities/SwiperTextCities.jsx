
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import classes from './SwiperTextCities.module.css';

import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const SwiperTextCities = (props) => {
    const data = props && props.sliderPhotos;
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                navigation={true}
                slidesPerView={1}
                loop={true}
                loopPreventsSlide={false}
                speed={800}
                className={classes.mySwiper}
            >
                <SwiperSlide className={classes.slider}>
                    <img src={data[0]} alt=''></img>
                    <p>Ночью было тепло, главное спать в берушах и успех обеспечен. 
                       Проснулись в 5:31, готовим завтрак и выдвигаемся на экскурсию по Бахчисараю. 
                       Пошли мы в мужской монастырь, рано утром - тихо, никого нет, красота. 
                       Дальше по тропе дошли до каменных пещер, 
                       где раньше жили люди, интересно, но дороговато, 200р за вход.</p>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <img src={data[1]} alt=''></img>
                    <p>HELLO_2</p>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <img src={data[2]} alt=''></img>
                    <p>HELLO_3</p>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <img src={data[3]} alt=''></img>
                    <p>HELLO_4</p>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <img src={data[4]} alt=''></img>
                    <p>HELLO_5</p>
                </SwiperSlide>
                <SwiperSlide className={classes.slider}>
                    <img src={data[5]} alt=''></img>
                    <p>HELLO_6</p>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SwiperTextCities;
