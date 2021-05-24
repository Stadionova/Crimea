import React from 'react';
import classes from './DayDescription.module.css';
import Navigation from '../Navigation/Navigation';
import dataDaysDesc from '../dataDaysDesc';
import tourists from './icon.png';
import SwiperSlider from '../Swiper/Swiper';

const DayDescription = (props) => {
    const data = props && props.location && props.location;
    const dataImages = data && data.imagesDesc;
    const dataImagesSlider = data && data.sliderPhotos;
    return (
        <div className={classes.description}>
            <Navigation changeColor='black' />
            <div className={classes.eachDay}>
                <p>ДЕНЬ{data.day}</p>
                <img src={data.img} alt=''></img>
                <div className={classes.hoverLayer}></div>
            </div>
            <div className={classes.shortDesc}>
                <h5>{data.desc}</h5>
            </div>
            <div className={classes.fullDesc}>
                <p>{dataDaysDesc[data.day] && dataDaysDesc[data.day][0]}</p>
                <img className={classes.tourist} src={tourists} alt='tourist'></img>
                <p>{dataDaysDesc[data.day] && dataDaysDesc[data.day][1]}</p>
            </div>
            <SwiperSlider sliderPhotos={dataImagesSlider} />
            <div className={classes.fullDesc}>
                <p>{dataDaysDesc[data.day] && dataDaysDesc[data.day][2]}</p>
                <p>{dataDaysDesc[data.day] && dataDaysDesc[data.day][3]}</p>
                <div className={classes.photoGallery}>
                    <ul>
                        <div>
                            <li><img src={dataImages && dataImages[0]} alt=''></img></li>
                            <li><img src={dataImages && dataImages[1]} alt=''></img></li>
                            <li><img src={dataImages && dataImages[2]} alt=''></img></li>
                        </div>
                        <div>
                            <li><img src={dataImages && dataImages[3]} alt=''></img></li>
                            <li><img src={dataImages && dataImages[4]} alt=''></img></li>
                            <li><img src={dataImages && dataImages[5]} alt=''></img></li>
                        </div>
                    </ul>
                </div>
                <p>{dataDaysDesc[data.day] && dataDaysDesc[data.day][4]}</p>
            </div>
            <button
                onClick={() => {
                    // window.location = `/dayDesc/${data.day + 1}`;
                    window.location = '/main';
                }}
            >Следующий день</button>
        </div>
    )
}

export default DayDescription;
