import React from 'react';
import classes from './EachDay.module.css';
import { NavLink } from "react-router-dom";
import image1 from './day1.JPG';
import image2 from './day2.JPG';

const backImages = {
    '1': image1,
    '2': image2
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
