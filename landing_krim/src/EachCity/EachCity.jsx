import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './EachCity.module.css';

class EachCity extends React.Component {
    render() {
        const currentClass = this.props.hideTextClass;
        return (
            <div className={classes.description}>
                <NavLink
                    to={{
                        pathname: '/city/' + this.props.cityNum,
                        desc: this.props.cityDesc,
                        bigPhoto: this.props.img,
                        cityNum: this.props.cityNum
                    }}>
                    <div className={classes.citiesWrapper}>
                        <div className={classes.cities}>
                            <p className={classes.cityName}>{this.props.city}</p>
                            <img src={this.props.img} alt=''></img>
                            <p className={classes[currentClass]}>{this.props.hideText}</p>
                        </div>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default EachCity;
