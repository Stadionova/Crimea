import React from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './ByCities.module.css';

class ByCities extends React.Component {
    onclick() {
        this.render(this.props);
    }
    render() {
        return (
            <div className={classes.description}>
                <Navigation changeColor='black' />
                <div className={classes.citiesWrapper}>
                    <div className={classes.cities}>БАХЧИСАРАЙ</div>
                    <div className={classes.cities}>СЕВАСТОПОЛЬ</div>
                    <div className={classes.cities}>СИМФЕРОПОЛЬ</div>
                </div>
            </div>
        );
    }
}

export default ByCities;
