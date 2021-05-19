import React from 'react';
import classes from './DayDescription.module.css';
import Navigation from '../Navigation/Navigation';

function DayDescription(props) {
    return (
        <div className={classes.description}>
            <Navigation changeColor='black' />
            <div>
                <p>{
                    props && props.location
                    && props.location.aboutProps}</p>
            </div>
        </div>
    )
}

export default DayDescription;
