import React from 'react';
import './Navigation.css';
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
    return (
        <div className='navigation' data={props.changeColor}>
            <div className='headerLinks'>
                <NavLink to='/main' >Главная страница</NavLink>
                <NavLink to='/trip' >Путешествие</NavLink>
                <NavLink to='/equipment' >Снаряжение</NavLink>
                <NavLink to='/contacts' >Контакты</NavLink>
            </div>
        </div>
    )
}

export default Navigation;
