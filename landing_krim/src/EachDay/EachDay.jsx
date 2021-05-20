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

import day4DescImage1 from './photos/day4/day4_1.JPG';
import day4DescImage2 from './photos/day4/day4_2.JPG';
import day4DescImage3 from './photos/day4/day4_3.JPG';
import day4DescImage4 from './photos/day4/day4_4.JPG';
import day4DescImage5 from './photos/day4/day4_5.JPG';
import day4DescImage6 from './photos/day4/day4_6.JPG';

import day5DescImage1 from './photos/day5/day5_1.JPG';
import day5DescImage2 from './photos/day5/day5_2.JPG';
import day5DescImage3 from './photos/day5/day5_3.JPG';
import day5DescImage4 from './photos/day5/day5_4.JPG';
import day5DescImage5 from './photos/day5/day5_5.JPG';
import day5DescImage6 from './photos/day5/day5_6.JPG';

import day6DescImage1 from './photos/day6/day6_1.JPG';
import day6DescImage2 from './photos/day6/day6_2.JPG';
import day6DescImage3 from './photos/day6/day6_3.JPG';
import day6DescImage4 from './photos/day6/day6_4.JPG';
import day6DescImage5 from './photos/day6/day6_5.JPG';
import day6DescImage6 from './photos/day6/day6_6.JPG';

import day7DescImage1 from './photos/day7/day7_1.JPG';
import day7DescImage2 from './photos/day7/day7_2.JPG';
import day7DescImage3 from './photos/day7/day7_3.JPG';
import day7DescImage4 from './photos/day7/day7_4.JPG';
import day7DescImage5 from './photos/day7/day7_5.JPG';
import day7DescImage6 from './photos/day7/day7_6.JPG';

import day8DescImage1 from './photos/day8/day8_1.JPG';
import day8DescImage2 from './photos/day8/day8_2.JPG';
import day8DescImage3 from './photos/day8/day8_3.JPG';
import day8DescImage4 from './photos/day8/day8_4.JPG';
import day8DescImage5 from './photos/day8/day8_5.JPG';
import day8DescImage6 from './photos/day8/day8_6.JPG';

import day9DescImage1 from './photos/day9/day9_1.JPG';
import day9DescImage2 from './photos/day9/day9_2.JPG';
import day9DescImage3 from './photos/day9/day9_3.JPG';
import day9DescImage4 from './photos/day9/day9_4.JPG';
import day9DescImage5 from './photos/day9/day9_5.JPG';
import day9DescImage6 from './photos/day9/day9_6.JPG';

import day10DescImage1 from './photos/day10/day10_1.JPG';
import day10DescImage2 from './photos/day10/day10_2.JPG';
import day10DescImage3 from './photos/day10/day10_3.JPG';
import day10DescImage4 from './photos/day10/day10_4.JPG';
import day10DescImage5 from './photos/day10/day10_5.JPG';
import day10DescImage6 from './photos/day10/day10_6.JPG';

import day11DescImage1 from './photos/day11/day11_1.JPG';
import day11DescImage2 from './photos/day11/day11_2.JPG';
import day11DescImage3 from './photos/day11/day11_3.JPG';
import day11DescImage4 from './photos/day11/day11_4.JPG';
import day11DescImage5 from './photos/day11/day11_5.JPG';
import day11DescImage6 from './photos/day11/day11_6.JPG';

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
    '4': [day4DescImage1, day4DescImage2, day4DescImage3, day4DescImage4, day4DescImage5, day4DescImage6],
    '5': [day5DescImage1, day5DescImage2, day5DescImage3, day5DescImage4, day5DescImage5, day5DescImage6],
    '6': [day6DescImage1, day6DescImage2, day6DescImage3, day6DescImage4, day6DescImage5, day6DescImage6],
    '7': [day7DescImage1, day7DescImage2, day7DescImage3, day7DescImage4, day7DescImage5, day7DescImage6],
    '8': [day8DescImage1, day8DescImage2, day8DescImage3, day8DescImage4, day8DescImage5, day8DescImage6],
    '9': [day9DescImage1, day9DescImage2, day9DescImage3, day9DescImage4, day9DescImage5, day9DescImage6],
    '10': [day10DescImage1, day10DescImage2, day10DescImage3, day10DescImage4, day10DescImage5, day10DescImage6],
    '11': [day11DescImage1, day11DescImage2, day11DescImage3, day11DescImage4, day11DescImage5, day11DescImage6]
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
