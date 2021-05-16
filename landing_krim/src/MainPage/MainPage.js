import React from 'react';
import './MainPage.css';
import Navigation from '../Navigation/Navigation';

const MainPage = () => {
    return (
        <div className="MainPage">
            <header className="MainPage-header">
                <Navigation />
                <div className="MainPage-title">
                    <p>Полуостров Крым</p>
                    <h1>«Крымская тропа»</h1>
                    <span>Наш первый семейный поход</span>
                </div>
            </header>
        </div>
    )
}

export default MainPage;
