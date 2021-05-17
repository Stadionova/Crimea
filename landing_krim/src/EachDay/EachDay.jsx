import React from 'react';
import classes from './EachDay.module.css';
import { NavLink } from "react-router-dom";

const EachDay = (props) => {
    return (
        <div className={classes.eachDay}>
            <NavLink to={'/day/' + props.day}>День {props.day}</NavLink>
        </div>
    )
}

export default EachDay;
