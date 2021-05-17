import React from 'react';
import classes from './Contacts.module.css';
import Navigation from '../Navigation/Navigation';

function Contacts() {
    return (
        <div className={classes.contacts}>
            <Navigation changeColor='black' />
            <div className={classes.text}>
                <p>Инстаграмм</p>
                <p>Вк</p>
            </div>
        </div>
    )
}

export default Contacts;
