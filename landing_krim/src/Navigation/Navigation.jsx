import React from 'react';
import classes from './Navigation.module.css';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className={classes.navigation}>
            <div className={classes.headerLinks}>
                <NavLink to='/main' >Главная страница</NavLink>
                <NavLink to='/trip' >Путешествие</NavLink>
                <NavLink to='/equipment' >Снаряжение</NavLink>
                <NavLink to='/contacts' >Контакты</NavLink>
            </div>
        </div>
    )
}

export default Navigation;
