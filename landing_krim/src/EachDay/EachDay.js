import React from 'react';
import './EachDay.css';

function EachDay(props) {
    return (
        <div className="EachDay">
            День {props.day}.
        </div>
    )
}

export default EachDay;
