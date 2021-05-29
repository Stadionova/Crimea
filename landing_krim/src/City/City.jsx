import React from 'react';
import classes from './City.module.css';
import Navigation from '../Navigation/Navigation';
import city1_1 from './city1_1.JPG';
import city1_2 from './city1_2.JPG';

const smallImages = {
    '1': [city1_1, city1_2]
}

class City extends React.Component {
    onclick() {
        this.render(this.props);
    }
    render() {
        const data = this.props && this.props.location;
        return (
            <div className={classes.description}>
                <Navigation changeColor='black' />
                <div className={classes.eachDay}>
                    <img src={data.bigPhoto} alt=''></img>
                </div>
                <div className={classes.cityDayDesc}>
                    <img src={smallImages[data.cityNum][0]} alt=''></img>
                    <p>{data.desc[0]}</p>
                </div>
                <div className={classes.cityDayDesc}>
                    <img src={smallImages[data.cityNum][1]} alt=''></img>
                    <p>{data.desc[1]}</p>
                </div>
                <p className={classes.footer}>© 2021 Мама и Дети, Крым</p>
            </div>
        );
    }
}

export default City;
