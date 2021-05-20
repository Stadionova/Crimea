import React from 'react';
import classes from './DayDescription.module.css';
import Navigation from '../Navigation/Navigation';
import dataDaysDesc from '../dataDaysDesc';
import image1 from './photos/day1/day1_1.JPG';
import image2 from './photos/day1/day1_2.JPG';
import image3 from './photos/day1/day1_3.JPG';
import image4 from './photos/day1/day1_4.JPG';
import image5 from './photos/day1/day1_5.JPG';
import image6 from './photos/day1/day1_6.JPG';

function DayDescription(props) {
    const data = props && props.location && props.location;
    return (
        <div className={classes.description}>
            <Navigation changeColor='black' />
            <div className={classes.eachDay}>
                <img src={data.img} alt=''></img>
                <div className={classes.hoverLayer}></div>
            </div>
            <div>
                <p>{data.aboutProps}</p>
            </div>
            <div>
                <p>{dataDaysDesc[data.day]}</p>
            </div>
            <div className={classes.photoGallery}>
                <ul>
                    <div>
                        <li><img src={image1} alt=''></img></li>
                        <li><img src={image2} alt=''></img></li>
                        <li><img src={image3} alt=''></img></li>
                    </div>
                    <div>
                        <li><img src={image4} alt=''></img></li>
                        <li><img src={image5} alt=''></img></li>
                        <li><img src={image6} alt=''></img></li>
                    </div>
                </ul>
            </div>
            <div>
                <p>ФОТО СЛАЙДЕР</p>
            </div>
        </div>
    )
}

export default DayDescription;
