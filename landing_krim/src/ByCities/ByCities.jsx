import React from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './ByCities.module.css';
import city1 from './city1.JPG';
import city2 from './city2.JPG';
import city3 from './city3.JPG';

class ByCities extends React.Component {
    onclick() {
        this.render(this.props);
    }
    render() {
        return (
            <div className={classes.description}>
                <Navigation changeColor='black' />
                <div className={classes.citiesWrapper}>
                    <div className={classes.cities}>
                        <p>БАХЧИСАРАЙ</p>
                        <img src={city1} alt=''></img>
                    </div>
                    <div className={classes.cities}>
                        <p>СЕВАСТОПОЛЬ</p>
                        <img src={city2} alt=''></img>
                    </div>
                    <div className={classes.cities}>
                        <p>СИМФЕРОПОЛЬ</p>
                        <img src={city3} alt=''></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default ByCities;
