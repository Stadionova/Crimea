import React from 'react';
import classes from './EachDay.module.css';
import { NavLink } from "react-router-dom";

import image1 from '../bigPhotos/day1.jpg';
import image2 from '../bigPhotos/day2.jpg';
import image3 from '../bigPhotos/day3.jpg';
import image4 from '../bigPhotos/day4.jpg';
import image5 from '../bigPhotos/day5.jpg';
import image6 from '../bigPhotos/day6.jpg';
import image7 from '../bigPhotos/day7.jpg';
import image8 from '../bigPhotos/day8.jpg';
import image9 from '../bigPhotos/day9.jpg';
import image10 from '../bigPhotos/day10.jpg';
import image11 from '../bigPhotos/day11.jpg';

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

const EachDay = (props) => {
    return (
        <div className={classes.eachDay}>
            <NavLink
                to={{
                    pathname: '/dayDesc/' + props.day,
                    day: props.day,
                    addHideText: props.addHideText
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
