import React from 'react';
import classes from './City.module.css';
import Navigation from '../Navigation/Navigation';
// import dataDaysDesc from '../dataDaysDesc';
// import SwiperSlider from '../Swiper/Swiper';

class City extends React.Component {
    onclick() {
        this.render(this.props);
    }
    render() {
        const data = this.props && this.props.location;
        // const dataImages = dayDescImages[this.props.location.day];
        // const dataImagesSlider = swiperSliderPhotos[this.props.location.day];
        return (
            <div className={classes.description}>
                <Navigation changeColor='black' />
                <div className={classes.eachDay}>
                    <img src={data.bigPhoto} alt=''></img>
                </div>
                <div className={classes.cityDayDesc}>
                    <img src={data.bigPhoto} alt=''></img>
                    <p>{data.desc[0]}</p>
                </div>
                <div className={classes.cityDayDesc}>
                    <img src={data.bigPhoto} alt=''></img>
                    <p>{data.desc[1]}</p>
                </div>
                {/* <SwiperSlider sliderPhotos={dataImagesSlider} />
                <div className={classes.fullDesc}>
                    <div className={classes.fullDescPar}>
                        <p>{dataDaysDesc[data.day] && dataDaysDesc[data.day][2]}</p>
                        <p>{dataDaysDesc[data.day] && dataDaysDesc[data.day][3]}</p>
                    </div>
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
                <NavLink
                    to={{
                        pathname: `/dayDesc/${+this.props.location.day - 1}`,
                        desc: this.props.location.desc,
                        day: +this.props.location.day - 1,
                        addHideText: this.props.location.addHideText
                    }}>
                    {
                        this.props.location.day >= 2
                            ? <button
                                className={classes.buttonPrev}
                                onClick={() => this.onclick()}>Предыдущий день</button>
                            : ''
                    }
                </NavLink>
                <NavLink
                    to={{
                        pathname: `/dayDesc/${+this.props.location.day + 1}`,
                        desc: this.props.location.desc,
                        day: +this.props.location.day + 1,
                        addHideText: this.props.location.addHideText
                    }}>
                    {
                        this.props.location.day <= 10
                            ? <button
                                className={classes.buttonNext}
                                onClick={() => this.onclick()}>Следующий день</button>
                            : ''
                    }
                </NavLink> */}
            </div>
        );
    }
}

export default City;
