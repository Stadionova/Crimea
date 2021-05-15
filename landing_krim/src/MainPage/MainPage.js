import React from 'react';
import './MainPage.css';
import Navigation from '../Navigation/Navigation';

function MainPage() {
    return (
        <div className="MainPage">
            <header className="MainPage-header">
                <Navigation />
                <div className="MainPage-title">
                    <p>Полуостров Крым</p>
                    <h1>«Крымская тропа»</h1>
                    {/* <a
                        className="MainPage-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    > */}
                    <a>Наш первый семейный поход</a>
                </div>
            </header>
        </div>
    )
}

export default MainPage;
