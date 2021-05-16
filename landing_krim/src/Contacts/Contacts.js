import React from 'react';
import './Contacts.css';
import Navigation from '../Navigation/Navigation';

function Contacts() {
    return (
        <div className="contacts">
            <Navigation />
            <div className="contacts-text">
                <p>Инстаграмм</p>
                <p>Вк</p>
            </div>
        </div>
    )
}

export default Contacts;
