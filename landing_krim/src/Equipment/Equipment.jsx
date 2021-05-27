import React from 'react';
import classes from './Equipment.module.css';
import Navigation from '../Navigation/Navigation';

const Equipment = () => {
    return (
        <div className={classes.equipment}>
            <Navigation changeColor='black' />
            <div className={classes.text}>
                Наше снаряжение.
            </div>
        </div>
    )
}

export default Equipment;
