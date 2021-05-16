import React from 'react';
import './Trip.css';
import Navigation from '../Navigation/Navigation';
import EachDay from '../EachDay/EachDay';

function Trip() {
    return (
        <div className="Trip">
            <Navigation />
            <div>
                <p>11 дней пути от Судака до Бахчисарая.
                <br />Затем по 2 дня в Бахчисарае, Севастополе и Симферополе.
            </p>
            </div>
            <div className="Trip-day">
                <EachDay day='1' />
                <EachDay day='2' />
            </div>
            <div className="Trip-day">
                <EachDay day='3' />
                <EachDay day='4' />
            </div>
            <div className="Trip-day">
                <EachDay day='5' />
                <EachDay day='6' />
            </div>
            <div className="Trip-day">
                <EachDay day='7' />
                <EachDay day='8' />
            </div>
            <div className="Trip-day">
                <EachDay day='9' />
                <EachDay day='10' />
            </div>
        </div>
    )
}

export default Trip;
