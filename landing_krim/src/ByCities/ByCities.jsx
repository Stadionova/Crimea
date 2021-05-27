import React from 'react';
import EachCity from '../EachCity/EachCity';
import Navigation from '../Navigation/Navigation';
import classes from './ByCities.module.css';
import city1 from './city1.JPG';
import city2 from './city2.JPG';
import city3 from './city3.JPG';
import dataCityDesc from './dataCityDesc';

class ByCities extends React.Component {
    onclick() {
        this.render(this.props);
    }
    render() {
        return (
            <div className={classes.description}>
                <Navigation changeColor='black' />
                <div className={classes.citiesWrapper}>
                    <EachCity city={'БАХЧИСАРАЙ'} img={city1} cityNum={1} cityDesc={dataCityDesc[1]} />
                    <EachCity city={'СЕВАСТОПОЛЬ'} img={city2} cityNum={2} cityDesc={dataCityDesc[2]} />
                    <EachCity city={'СИМФЕРОПОЛЬ'} img={city3} cityNum={3} cityDesc={dataCityDesc[3]} />
                </div>
            </div>
        );
    }
}

export default ByCities;
