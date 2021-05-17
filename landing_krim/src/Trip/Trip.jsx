import React from 'react';
import classes from './Trip.module.css';
import Navigation from '../Navigation/Navigation';
import EachDay from '../EachDay/EachDay';

const Trip = () => {
    return (
        <div className={classes.trip}>
            <Navigation />
            <div>
                <p>11 дней пути от Судака до Бахчисарая.
                <br />Затем по 2 дня в Бахчисарае, Севастополе и Симферополе.
            </p>
            </div>
            <div className={classes.day}>
                <EachDay day={1} />
                <EachDay day={2} />
            </div>
            <div className={classes.day}>
                <EachDay day={3} />
                <EachDay day={4} />
            </div>
            <div className={classes.day}>
                <EachDay day={5} />
                <EachDay day={6} />
            </div>
            <div className={classes.day}>
                <EachDay day={7} />
                <EachDay day={8} />
            </div>
            <div className={classes.day}>
                <EachDay day={9} />
                <EachDay day={10} />
            </div>
        </div>
    )
}

export default Trip;
