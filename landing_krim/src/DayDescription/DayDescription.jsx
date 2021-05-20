import React from 'react';
import classes from './DayDescription.module.css';
import Navigation from '../Navigation/Navigation';
import dataDaysDesc from '../dataDaysDesc';

function DayDescription(props) {
    const data = props && props.location && props.location;
    const dataImages = data && data.imagesDesc;
    return (
        <div className={classes.description}>
            <Navigation changeColor='black' />
            <div className={classes.eachDay}>
                <img src={data.img} alt=''></img>
                <div className={classes.hoverLayer}></div>
            </div>
            <div className={classes.shortDesc}>
                <p>{data.desc}</p>
            </div>
            <div className={classes.fullDesc}>
                <p>{dataDaysDesc[data.day][0]}</p>
                <p>{dataDaysDesc[data.day][1]}</p>
                <p>{dataDaysDesc[data.day][2]}</p>
                <div className={classes.photoGallery}>
                    <ul>
                        <div>
                            <li><img src={dataImages[0]} alt=''></img></li>
                            <li><img src={dataImages[1]} alt=''></img></li>
                            <li><img src={dataImages[2]} alt=''></img></li>
                        </div>
                        <div>
                            <li><img src={dataImages[3]} alt=''></img></li>
                            <li><img src={dataImages[4]} alt=''></img></li>
                            <li><img src={dataImages[5]} alt=''></img></li>
                        </div>
                    </ul>
                </div>
                <p>{dataDaysDesc[data.day][3]}</p>
            </div>
            <div className={classes.fullDesc}>
                <p>{dataDaysDesc[data.day][4]}</p>
            </div>
            <div>
                <p>ФОТО СЛАЙДЕР</p>
            </div>
        </div>
    )
}

export default DayDescription;
