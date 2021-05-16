import React from 'react';
import './Navigation.css';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="Navigation">
            <div className="Navigation-header_links">
                <NavLink to='/main' >Главная страница</NavLink>
                <NavLink to='/trip' >Путешествие</NavLink>
                <NavLink to='/equipment' >Снаряжение</NavLink>
                <NavLink to='/contacts' >Контакты</NavLink>
            </div>
        </div>
    )
}

export default Navigation;
