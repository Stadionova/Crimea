import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './EachCity.module.css';

class EachCity extends React.Component {
    render() {
        return (
            <div className={classes.description}>
                <NavLink
                    to={{
                        pathname: '/city/' + this.props.cityNum,
                        desc: this.props.cityDesc,
                        bigPhoto: this.props.img
                    }}>
                    <div className={classes.citiesWrapper}>
                        <div className={classes.cities}>
                            <p>{this.props.city}</p>
                            <img src={this.props.img} alt=''></img>
                        </div>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default EachCity;
