import React from 'react';
import classes from './MainPage.module.css';
import Navigation from '../Navigation/Navigation';

const MainPage = () => {
    return (
        <div className={classes.mainPage}>
            <header className={classes.header}>
                <Navigation />
                <div className={classes.title}>
                    <p>Полуостров Крым</p>
                    <h1>«Крымская тропа»</h1>
                    <span>Наш первый семейный поход</span>
                </div>
            </header>
        </div>
    )
}

export default MainPage;
