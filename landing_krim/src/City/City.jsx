import React from 'react';
import classes from './City.module.css';
import Navigation from '../Navigation/Navigation';
import citiesSummaryData from './citiesSummaryData';
import citiesPlaceInDetail from './citiesPlaceInDetail';

import city1_1 from './city1/city1_1.JPG';
import city1_2 from './city1/city1_2.JPG';
import city1_3 from './city1/city1_3.JPG';
import city1_4 from './city1/city1_4.JPG';
import city1_5 from './city1/city1_5.JPG';
import city1_6 from './city1/city1_6.JPG';
import city1_7 from './city1/city1_7.JPG';
import city1_8 from './city1/city1_8.JPG';
import city1_9 from './city1/city1_9.JPG';

import city2_1 from './city2/city2_1.JPG';
import city2_2 from './city2/city2_2.JPG';
import city2_3 from './city2/city2_3.JPG';
import city2_4 from './city2/city2_4.JPG';
import city2_5 from './city2/city2_5.JPG';
import city2_6 from './city2/city2_6.JPG';
import city2_7 from './city2/city2_7.JPG';
import city2_8 from './city2/city2_8.JPG';
import city2_9 from './city2/city2_9.JPG';

import city3_1 from './city3/city3_1.JPG';
import city3_2 from './city3/city3_2.JPG';
import city3_3 from './city3/city3_3.JPG';
import city3_4 from './city3/city3_4.JPG';
import city3_5 from './city3/city3_5.JPG';
import city3_6 from './city3/city3_6.JPG';
import city3_7 from './city3/city3_7.JPG';
import city3_8 from './city3/city3_8.JPG';
import city3_9 from './city3/city3_9.JPG';

import SwiperTextCities from '../SwiperTextCities/SwiperTextCities';
import EachCity from '../EachCity/EachCity';

const smallImages = {
    '1': [city1_1, city1_2, city1_3, city1_4, city1_5, city1_6, city1_7, city1_8, city1_9],
    '2': [city2_1, city2_2, city2_3, city2_4, city2_5, city2_6, city2_7, city2_8, city2_9],
    '3': [city3_1, city3_2, city3_3, city3_4, city3_5, city3_6, city3_7, city3_8, city3_9]
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
                <p className={classes.summaryData}>
                    {citiesSummaryData[data.cityNum]}
                </p>
                <EachCity
                    city={'БАХЧИКЭМП'}
                    img={smallImages[data.cityNum][8]}
                    cityNum={1}
                    hideText={citiesPlaceInDetail[1][0]}
                    hideTextClass={'detailedCityPlace'}
                />
                <EachCity
                    city={'ПЕЩЕРЫ_1'}
                    img={smallImages[data.cityNum][5]}
                    cityNum={2}
                    hideText={citiesPlaceInDetail[1][1]}
                    hideTextClass={'detailedCityPlace'}
                />
                <EachCity
                    city={'ПЕЩЕРЫ_2'}
                    img={smallImages[data.cityNum][0]}
                    cityNum={3}
                    hideText={citiesPlaceInDetail[1][2]}
                    hideTextClass={'detailedCityPlace'}
                />
                {/* <SwiperTextCities sliderPhotos={smallImages[data.cityNum]} /> */}
                <p className={classes.footer}>© 2021 Мама и Дети, Крым</p>
            </div>
        );
    }
}

export default City;
