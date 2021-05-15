import React from 'react';
// import mainPhoto from './mainPhoto.JPG';
import './MainPage.css';

function MainPage() {
    return (
        <div className="MainPage">
            {/* <img src={mainPhoto} className="MainPage-logo" alt="logo" /> */}
            <header className="MainPage-header">
                <div>Путешествие</div>
                <div>Контакты</div>
                <p>Крым "Крымская тропа"</p>
                <a
                    className="MainPage-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Наш первый семейный поход
        </a>
            </header>
        </div>
    )
}

export default MainPage;
