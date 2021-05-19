import React from 'react';
import './Navigation.module.css';
import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css';
import inst from './inst.png';
import vk from './vk.png';

const Navigation = (props) => {
    return (
        <div className={classes.navigation} data={props.changeColor}>
            <div className={classes.headerLinks}>
                <NavLink to='/main'>Главная страница</NavLink>
                <NavLink to='/trip'>Путешествие</NavLink>
                <NavLink to='/equipment'>Снаряжение</NavLink>
                <NavLink to='/cities'>По городам</NavLink>
            </div>
            <div className={classes.contacts}>
                <a href="https://instagram.com/stadionova/">
                    <img
                        className={classes.inst}
                        alt="Instagram"
                        src={inst}>
                    </img>
                </a>
                <a href="https://vk.com/tr.julia">
                    <img
                        className={classes.vk}
                        alt="Vkontakte"
                        src={vk}>
                    </img>
                </a>
            </div>
        </div>
    )
}

export default Navigation;
