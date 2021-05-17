import React from 'react';
import './EachDay.css';
import { NavLink } from "react-router-dom";

function EachDay(props) {
    return (
        <div className="EachDay">
            <NavLink to={'/day/' + props.day}>День {props.day}.</NavLink>
        </div>
    )
}

export default EachDay;
