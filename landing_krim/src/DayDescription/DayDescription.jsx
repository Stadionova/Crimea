import React from 'react';
import classes from './DayDescription.module.css';
import Navigation from '../Navigation/Navigation';

function DayDescription(props) {
    const data = props && props.location && props.location;
    return (
        <div className={classes.description}>
            <Navigation changeColor='black' />
            <div className={classes.eachDay}>
                <img src={data.img} alt=''></img>
                <div className={classes.backImage}>
                    День {data.day}
                    <p className={classes.addText}>{data.addHideText}</p>
                </div>
                <div className={classes.hoverLayer}></div>
            </div>
            <div>
                <p>{data.aboutProps}</p>
            </div>
        </div>
    )
}

export default DayDescription;
