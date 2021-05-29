import React from 'react';
import classes from './City.module.css';
import Navigation from '../Navigation/Navigation';
import city1_1 from './city1_1.JPG';
import city1_2 from './city1_2.JPG';
import city2_1 from './city2_1.JPG';
import city2_2 from './city2_2.JPG';
import city3_1 from './city3_1.JPG';
import city3_2 from './city3_2.JPG';

const smallImages = {
    '1': [city1_1, city1_2],
    '2': [city2_1, city2_2],
    '3': [city3_1, city3_2]
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
