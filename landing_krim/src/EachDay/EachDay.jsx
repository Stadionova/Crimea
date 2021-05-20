import React from 'react';
import classes from './EachDay.module.css';
import { NavLink } from "react-router-dom";
import image1 from './day1.jpg';
import image2 from './day2.jpg';
import image3 from './day3.jpg';
import image4 from './day4.jpg';
import image5 from './day5.jpg';
import image6 from './day6.jpg';
import image7 from './day7.jpg';
import image8 from './day8.jpg';
import image9 from './day9.jpg';
import image10 from './day10.jpg';
import image11 from './day11.jpg';

import day1DescImage1 from './photos/day1/day1_1.JPG';
import day1DescImage2 from './photos/day1/day1_2.JPG';
import day1DescImage3 from './photos/day1/day1_3.JPG';
import day1DescImage4 from './photos/day1/day1_4.JPG';
import day1DescImage5 from './photos/day1/day1_5.JPG';
import day1DescImage6 from './photos/day1/day1_6.JPG';

import day2DescImage1 from './photos/day2/day2_1.JPG';
import day2DescImage2 from './photos/day2/day2_2.JPG';
import day2DescImage3 from './photos/day2/day2_3.JPG';
import day2DescImage4 from './photos/day2/day2_4.JPG';
import day2DescImage5 from './photos/day2/day2_5.JPG';
import day2DescImage6 from './photos/day2/day2_6.JPG';

import day3DescImage1 from './photos/day3/day3_1.JPG';
import day3DescImage2 from './photos/day3/day3_2.JPG';
import day3DescImage3 from './photos/day3/day3_3.JPG';
import day3DescImage4 from './photos/day3/day3_4.JPG';
import day3DescImage5 from './photos/day3/day3_5.JPG';
import day3DescImage6 from './photos/day3/day3_6.JPG';

const backImages = {
    '1': image1,
    '2': image2,
    '3': image3,
    '4': image4,
    '5': image5,
    '6': image6,
    '7': image7,
    '8': image8,
    '9': image9,
    '10': image10,
    '11': image11
}

const dayDescImages = {
    '1': [day1DescImage1, day1DescImage2, day1DescImage3, day1DescImage4, day1DescImage5, day1DescImage6],
    '2': [day2DescImage1, day2DescImage2, day2DescImage3, day2DescImage4, day2DescImage5, day2DescImage6],
    '3': [day3DescImage1, day3DescImage2, day3DescImage3, day3DescImage4, day3DescImage5, day3DescImage6],
    '4': day1DescImage4,
    '5': day1DescImage5,
    '6': day1DescImage6
}

const EachDay = (props) => {
    return (
        <div className={classes.eachDay}>
            <NavLink
                to={{
                    pathname: '/dayDesc/' + props.day,
                    desc: props.desc,
                    img: backImages[props.day],
                    day: props.day,
                    addHideText: props.addHideText,
                    imagesDesc: dayDescImages[props.day]
                }}>
                <img src={backImages[props.day]} alt=''></img>
                <div className={classes.backImage}>
                    ДЕНЬ {props.day}
                    <p className={classes.addText}>{props.addHideText}</p>
                </div>
                <div className={classes.hoverLayer}></div>
            </NavLink>
        </div>
    )
}

export default EachDay;
