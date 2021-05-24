import React from 'react';
import classes from './Trip.module.css';
import Navigation from '../Navigation/Navigation';
import EachDay from '../EachDay/EachDay';
import dayDescriptions from '../dayDescriptions';
import additionalBeforeHoverHideText from '../additionalBeforeHoverHideText';

const Trip = () => {
    return (
        <div className={classes.trip}>
            <Navigation changeColor='black' />
            <div>
                <p>Наш поход длился 11 дней.
                <br />Шли мы от Судака до Бахчисарая по Крымской тропе.
                <br />Затем сошли с тропы и провели по 2 дня в каждом из городов: Бахчисарай, Севастополь и Симферополь.
            </p>
            </div>
            <div className={classes.day}>
                <EachDay day={1} desc={dayDescriptions[1]} addHideText={additionalBeforeHoverHideText[1]} />
                <EachDay day={2} desc={dayDescriptions[2]} addHideText={additionalBeforeHoverHideText[2]} />
            </div>
            <div className={classes.day}>
                <EachDay day={3} desc={dayDescriptions[3]} addHideText={additionalBeforeHoverHideText[3]} />
                <EachDay day={4} desc={dayDescriptions[4]} addHideText={additionalBeforeHoverHideText[4]} />
            </div>
            <div className={classes.day}>
                <EachDay day={5} desc={dayDescriptions[5]} addHideText={additionalBeforeHoverHideText[5]} />
                <EachDay day={6} desc={dayDescriptions[6]} addHideText={additionalBeforeHoverHideText[6]} />
            </div>
            <div className={classes.day}>
                <EachDay day={7} desc={dayDescriptions[7]} addHideText={additionalBeforeHoverHideText[7]} />
                <EachDay day={8} desc={dayDescriptions[8]} addHideText={additionalBeforeHoverHideText[8]} />
            </div>
            <div className={classes.day}>
                <EachDay day={9} desc={dayDescriptions[9]} addHideText={additionalBeforeHoverHideText[9]} />
                <EachDay day={10} desc={dayDescriptions[10]} addHideText={additionalBeforeHoverHideText[10]} />
            </div>
            <div className={classes.day}>
                <EachDay day={11} desc={dayDescriptions[11]} addHideText={additionalBeforeHoverHideText[11]} />
            </div>
        </div>
    )
}

export default Trip;
