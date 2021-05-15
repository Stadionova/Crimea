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
                <EachDay />
                <EachDay />
            </div>
            <div className="Trip-day">
                <EachDay />
                <EachDay />
            </div>
            <div className="Trip-day">
                <EachDay />
                <EachDay />
            </div>
            <div className="Trip-day">
                <EachDay />
                <EachDay />
            </div>
            <div className="Trip-day">
                <EachDay />
                <EachDay />
            </div>
        </div>
    )
}

export default Trip;
