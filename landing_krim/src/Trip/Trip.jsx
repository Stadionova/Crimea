import React from 'react';
import classes from './Trip.module.css';
import Navigation from '../Navigation/Navigation';
import EachDay from '../EachDay/EachDay';
import dayDescriptions from '../dayDescriptions';
import hideTripText from './hideTripText';

const Trip = () => {
    return (
        <div className={classes.trip}>
            <Navigation changeColor='black' />
            <div className={classes.summaryText}>
                <p>Наш поход длился 11 дней.
                <br />Шли мы от Судака до Бахчисарая по Крымской тропе.
                <br />Затем сошли с тропы и провели по 2 дня в каждом из городов: Бахчисарай, Севастополь и Симферополь.
            </p>
            </div>
            <div className={classes.day}>
                <EachDay day={1} addHideText={hideTripText[1]} />
                <EachDay day={2} addHideText={hideTripText[2]} />
            </div>
            <div className={classes.day}>
                <EachDay day={3} addHideText={hideTripText[3]} />
                <EachDay day={4} addHideText={hideTripText[4]} />
            </div>
            <div className={classes.day}>
                <EachDay day={5} desc={dayDescriptions[5]} addHideText={hideTripText[5]} />
                <EachDay day={6} desc={dayDescriptions[6]} addHideText={hideTripText[6]} />
            </div>
            <div className={classes.day}>
                <EachDay day={7} addHideText={hideTripText[7]} />
                <EachDay day={8} addHideText={hideTripText[8]} />
            </div>
            <div className={classes.day}>
                <EachDay day={9} addHideText={hideTripText[9]} />
                <EachDay day={10} addHideText={hideTripText[10]} />
            </div>
            <div className={classes.day}>
                <EachDay day={11} addHideText={hideTripText[11]} />
            </div>
            <p className={classes.footer}>© 2021 Мама и Дети, Крым</p>
        </div>
    )
}

export default Trip;
