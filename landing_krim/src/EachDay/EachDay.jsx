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
    '10': image10
}

const EachDay = (props) => {
    return (
        <div className={classes.eachDay}>
            <img src={backImages[props.day]} alt=''></img>
            <div className={classes.backImage}>
                <NavLink to={'/day/' + props.day}>
                    День {props.day}
                </NavLink>
            </div>
        </div>
    )
}

export default EachDay;
