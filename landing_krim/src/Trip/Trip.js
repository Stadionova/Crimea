import React from 'react';
// import mainPhoto from './mainPhoto.JPG';
import './MainPage.css';

function MainPage() {
    return (
        <div className="MainPage">
            {/* <img src={mainPhoto} className="MainPage-logo" alt="logo" /> */}
            <header className="MainPage-header">
                <div className="MainPage-header_links">
                    <a>Путешествие</a>
                    <a>Контакты</a>
                </div>
                <div>
                    <p>Крым "Крымская тропа"</p>
                    <a
                        className="MainPage-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Наш первый семейный поход
        </a>
                </div>
            </header>
        </div>
    )
}

export default MainPage;
