import React from 'react';
import classes from './DayDescription.module.css';
import Navigation from '../Navigation/Navigation';
import dataDaysDesc from '../dataDaysDesc';

function DayDescription(props) {
    const data = props && props.location && props.location;
    return (
        <div className={classes.description}>
            <Navigation changeColor='black' />
            <div className={classes.eachDay}>
                <img src={data.img} alt=''></img>
                <div className={classes.hoverLayer}></div>
            </div>
            <div>
                <p>{data.aboutProps}</p>
            </div>
            <div>
                <p>{dataDaysDesc[data.day]}</p>
            </div>
        </div>
    )
}

export default DayDescription;
