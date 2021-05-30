import React from 'react';
import classes from './DayDescription.module.css';
import Navigation from '../Navigation/Navigation';
import dataDaysDesc from '../dataDaysDesc';
import tourists from './icon.png';
import SwiperSlider from '../Swiper/Swiper';
import { NavLink } from 'react-router-dom';
import dayDescriptions from '../dayDescriptions';

import image1 from '../bigPhotos/day1.jpg';
import image2 from '../bigPhotos/day2.jpg';
import image3 from '../bigPhotos/day3.jpg';
import image4 from '../bigPhotos/day4.jpg';
import image5 from '../bigPhotos/day5.jpg';
import image6 from '../bigPhotos/day6.jpg';
import image7 from '../bigPhotos/day7.jpg';
import image8 from '../bigPhotos/day8.jpg';
import image9 from '../bigPhotos/day9.jpg';
import image10 from '../bigPhotos/day10.jpg';
import image11 from '../bigPhotos/day11.jpg';

import day1BigImage1 from './photos/day1/big/day1_1.JPG';
import day1BigImage2 from './photos/day1/big/day1_2.JPG';
import day1BigImage3 from './photos/day1/big/day1_3.JPG';
import day1BigImage4 from './photos/day1/big/day1_4.JPG';
import day1BigImage5 from './photos/day1/big/day1_5.JPG';
import day1BigImage6 from './photos/day1/big/day1_6.JPG';

import day2BigImage1 from './photos/day2/big/day2_1.JPG';
import day2BigImage2 from './photos/day2/big/day2_2.JPG';
import day2BigImage3 from './photos/day2/big/day2_3.JPG';
import day2BigImage4 from './photos/day2/big/day2_4.JPG';
import day2BigImage5 from './photos/day2/big/day2_5.JPG';
import day2BigImage6 from './photos/day2/big/day2_6.JPG';

import day3BigImage1 from './photos/day3/big/day3_1.JPG';
import day3BigImage2 from './photos/day3/big/day3_2.JPG';
import day3BigImage3 from './photos/day3/big/day3_3.JPG';
import day3BigImage4 from './photos/day3/big/day3_4.JPG';
import day3BigImage5 from './photos/day3/big/day3_5.JPG';
import day3BigImage6 from './photos/day3/big/day3_6.JPG';

import day4BigImage1 from './photos/day4/big/day4_1.JPG';
import day4BigImage2 from './photos/day4/big/day4_2.JPG';
import day4BigImage3 from './photos/day4/big/day4_3.JPG';
import day4BigImage4 from './photos/day4/big/day4_4.JPG';
import day4BigImage5 from './photos/day4/big/day4_5.JPG';
import day4BigImage6 from './photos/day4/big/day4_6.JPG';

import day5BigImage1 from './photos/day5/big/day5_1.JPG';
import day5BigImage2 from './photos/day5/big/day5_2.JPG';
import day5BigImage3 from './photos/day5/big/day5_3.JPG';
import day5BigImage4 from './photos/day5/big/day5_4.JPG';
import day5BigImage5 from './photos/day5/big/day5_5.JPG';
import day5BigImage6 from './photos/day5/big/day5_6.JPG';

import day6BigImage1 from './photos/day6/big/day6_1.JPG';
import day6BigImage2 from './photos/day6/big/day6_2.JPG';
import day6BigImage3 from './photos/day6/big/day6_3.JPG';
import day6BigImage4 from './photos/day6/big/day6_4.JPG';
import day6BigImage5 from './photos/day6/big/day6_5.JPG';
import day6BigImage6 from './photos/day6/big/day6_6.JPG';

import day7BigImage1 from './photos/day7/big/day7_1.JPG';
import day7BigImage2 from './photos/day7/big/day7_2.JPG';
import day7BigImage3 from './photos/day7/big/day7_3.JPG';
import day7BigImage4 from './photos/day7/big/day7_4.JPG';
import day7BigImage5 from './photos/day7/big/day7_5.JPG';
import day7BigImage6 from './photos/day7/big/day7_6.JPG';

import day8BigImage1 from './photos/day8/big/day8_1.JPG';
import day8BigImage2 from './photos/day8/big/day8_2.JPG';
import day8BigImage3 from './photos/day8/big/day8_3.JPG';
import day8BigImage4 from './photos/day8/big/day8_4.JPG';
import day8BigImage5 from './photos/day8/big/day8_5.JPG';
import day8BigImage6 from './photos/day8/big/day8_6.JPG';

import day9BigImage1 from './photos/day9/big/day9_1.JPG';
import day9BigImage2 from './photos/day9/big/day9_2.JPG';
import day9BigImage3 from './photos/day9/big/day9_3.JPG';
import day9BigImage4 from './photos/day9/big/day9_4.JPG';
import day9BigImage5 from './photos/day9/big/day9_5.JPG';
import day9BigImage6 from './photos/day9/big/day9_6.JPG';

import day10BigImage1 from './photos/day10/big/day10_1.JPG';
import day10BigImage2 from './photos/day10/big/day10_2.JPG';
import day10BigImage3 from './photos/day10/big/day10_3.JPG';
import day10BigImage4 from './photos/day10/big/day10_4.JPG';
import day10BigImage5 from './photos/day10/big/day10_5.JPG';
import day10BigImage6 from './photos/day10/big/day10_6.JPG';

import day11BigImage1 from './photos/day11/big/day11_1.JPG';
import day11BigImage2 from './photos/day11/big/day11_2.JPG';
import day11BigImage3 from './photos/day11/big/day11_3.JPG';
import day11BigImage4 from './photos/day11/big/day11_4.JPG';
import day11BigImage5 from './photos/day11/big/day11_5.JPG';
import day11BigImage6 from './photos/day11/big/day11_6.JPG';

import day1MinImage1 from './photos/day1/small/day1_1.JPG';
import day1MinImage2 from './photos/day1/small/day1_2.JPG';
import day1MinImage3 from './photos/day1/small/day1_3.JPG';
import day1MinImage4 from './photos/day1/small/day1_4.JPG';
import day1MinImage5 from './photos/day1/small/day1_5.JPG';
import day1MinImage6 from './photos/day1/small/day1_6.JPG';

import day2MinImage1 from './photos/day2/small/day2_1.JPG';
import day2MinImage2 from './photos/day2/small/day2_2.JPG';
import day2MinImage3 from './photos/day2/small/day2_3.JPG';
import day2MinImage4 from './photos/day2/small/day2_4.JPG';
import day2MinImage5 from './photos/day2/small/day2_5.JPG';
import day2MinImage6 from './photos/day2/small/day2_6.JPG';

import day3MinImage1 from './photos/day3/small/day3_1.JPG';
import day3MinImage2 from './photos/day3/small/day3_2.JPG';
import day3MinImage3 from './photos/day3/small/day3_3.JPG';
import day3MinImage4 from './photos/day3/small/day3_4.JPG';
import day3MinImage5 from './photos/day3/small/day3_5.JPG';
import day3MinImage6 from './photos/day3/small/day3_6.JPG';

import day4MinImage1 from './photos/day4/small/day4_1.JPG';
import day4MinImage2 from './photos/day4/small/day4_2.JPG';
import day4MinImage3 from './photos/day4/small/day4_3.JPG';
import day4MinImage4 from './photos/day4/small/day4_4.JPG';
import day4MinImage5 from './photos/day4/small/day4_5.JPG';
import day4MinImage6 from './photos/day4/small/day4_6.JPG';

import day5MinImage1 from './photos/day5/small/day5_1.JPG';
import day5MinImage2 from './photos/day5/small/day5_2.JPG';
import day5MinImage3 from './photos/day5/small/day5_3.JPG';
import day5MinImage4 from './photos/day5/small/day5_4.JPG';
import day5MinImage5 from './photos/day5/small/day5_5.JPG';
import day5MinImage6 from './photos/day5/small/day5_6.JPG';

import day6MinImage1 from './photos/day6/small/day6_1.JPG';
import day6MinImage2 from './photos/day6/small/day6_2.JPG';
import day6MinImage3 from './photos/day6/small/day6_3.JPG';
import day6MinImage4 from './photos/day6/small/day6_4.JPG';
import day6MinImage5 from './photos/day6/small/day6_5.JPG';
import day6MinImage6 from './photos/day6/small/day6_6.JPG';

import day7MinImage1 from './photos/day7/small/day7_1.JPG';
import day7MinImage2 from './photos/day7/small/day7_2.JPG';
import day7MinImage3 from './photos/day7/small/day7_3.JPG';
import day7MinImage4 from './photos/day7/small/day7_4.JPG';
import day7MinImage5 from './photos/day7/small/day7_5.JPG';
import day7MinImage6 from './photos/day7/small/day7_6.JPG';

import day8MinImage1 from './photos/day8/small/day8_1.JPG';
import day8MinImage2 from './photos/day8/small/day8_2.JPG';
import day8MinImage3 from './photos/day8/small/day8_3.JPG';
import day8MinImage4 from './photos/day8/small/day8_4.JPG';
import day8MinImage5 from './photos/day8/small/day8_5.JPG';
import day8MinImage6 from './photos/day8/small/day8_6.JPG';

import day9MinImage1 from './photos/day9/small/day9_1.JPG';
import day9MinImage2 from './photos/day9/small/day9_2.JPG';
import day9MinImage3 from './photos/day9/small/day9_3.JPG';
import day9MinImage4 from './photos/day9/small/day9_4.JPG';
import day9MinImage5 from './photos/day9/small/day9_5.JPG';
import day9MinImage6 from './photos/day9/small/day9_6.JPG';

import day10MinImage1 from './photos/day10/small/day10_1.JPG';
import day10MinImage2 from './photos/day10/small/day10_2.JPG';
import day10MinImage3 from './photos/day10/small/day10_3.JPG';
import day10MinImage4 from './photos/day10/small/day10_4.JPG';
import day10MinImage5 from './photos/day10/small/day10_5.JPG';
import day10MinImage6 from './photos/day10/small/day10_6.JPG';

import day11MinImage1 from './photos/day11/small/day11_1.JPG';
import day11MinImage2 from './photos/day11/small/day11_2.JPG';
import day11MinImage3 from './photos/day11/small/day11_3.JPG';
import day11MinImage4 from './photos/day11/small/day11_4.JPG';
import day11MinImage5 from './photos/day11/small/day11_5.JPG';
import day11MinImage6 from './photos/day11/small/day11_6.JPG';

const backImages = {
    '1': image1,
    '2': image2,
    '3': image3,
    '4': image4,
    '5': image5,
    '6': image6,
    '7': image7,
    '8': image8,
    '9': image9,
    '10': image10,
    '11': image11
}

const miniPhotos = {
    '1': [day1MinImage1, day1MinImage2, day1MinImage3, day1MinImage4, day1MinImage5, day1MinImage6],
    '2': [day2MinImage1, day2MinImage2, day2MinImage3, day2MinImage4, day2MinImage5, day2MinImage6],
    '3': [day3MinImage1, day3MinImage2, day3MinImage3, day3MinImage4, day3MinImage5, day3MinImage6],
    '4': [day4MinImage1, day4MinImage2, day4MinImage3, day4MinImage4, day4MinImage5, day4MinImage6],
    '5': [day5MinImage1, day5MinImage2, day5MinImage3, day5MinImage4, day5MinImage5, day5MinImage6],
    '6': [day6MinImage1, day6MinImage2, day6MinImage3, day6MinImage4, day6MinImage5, day6MinImage6],
    '7': [day7MinImage1, day7MinImage2, day7MinImage3, day7MinImage4, day7MinImage5, day7MinImage6],
    '8': [day8MinImage1, day8MinImage2, day8MinImage3, day8MinImage4, day8MinImage5, day8MinImage6],
    '9': [day9MinImage1, day9MinImage2, day9MinImage3, day9MinImage4, day9MinImage5, day9MinImage6],
    '10': [day10MinImage1, day10MinImage2, day10MinImage3, day10MinImage4, day10MinImage5, day10MinImage6],
    '11': [day11MinImage1, day11MinImage2, day11MinImage3, day11MinImage4, day11MinImage5, day11MinImage6]
}

const bigPhotosSlider = {
    '1': [day1BigImage1, day1BigImage2, day1BigImage3, day1BigImage4, day1BigImage5, day1BigImage6],
    '2': [day2BigImage1, day2BigImage2, day2BigImage3, day2BigImage4, day2BigImage5, day2BigImage6],
    '3': [day3BigImage1, day3BigImage2, day3BigImage3, day3BigImage4, day3BigImage5, day3BigImage6],
    '4': [day4BigImage1, day4BigImage2, day4BigImage3, day4BigImage4, day4BigImage5, day4BigImage6],
    '5': [day5BigImage1, day5BigImage2, day5BigImage3, day5BigImage4, day5BigImage5, day5BigImage6],
    '6': [day6BigImage1, day6BigImage2, day6BigImage3, day6BigImage4, day6BigImage5, day6BigImage6],
    '7': [day7BigImage1, day7BigImage2, day7BigImage3, day7BigImage4, day7BigImage5, day7BigImage6],
    '8': [day8BigImage1, day8BigImage2, day8BigImage3, day8BigImage4, day8BigImage5, day8BigImage6],
    '9': [day9BigImage1, day9BigImage2, day9BigImage3, day9BigImage4, day9BigImage5, day9BigImage6],
    '10': [day10BigImage1, day10BigImage2, day10BigImage3, day10BigImage4, day10BigImage5, day10BigImage6],
    '11': [day11BigImage1, day11BigImage2, day11BigImage3, day11BigImage4, day11BigImage5, day11BigImage6]
}

class DayDescription extends React.Component {
    onclick() {
        this.render(this.props);
    }
    render() {
        const data = this.props && this.props.location;
        const dataImages = miniPhotos[this.props.location.day];
        const dataImagesSlider = bigPhotosSlider[this.props.location.day];
        return (
            <div className={classes.description}>
                <Navigation changeColor='black' />
                <div className={classes.eachDay}>
                    <p>ДЕНЬ {data.day}</p>
                    <img src={backImages[this.props.location.day]} alt=''></img>
                    <div className={classes.hoverLayer}></div>
                </div>
                <div className={classes.shortDesc}>
                    <h5>{dayDescriptions[this.props.location.day]}</h5>
                </div>
                <div className={classes.fullDesc}>
                    <p className={classes.text1}>
                        {dataDaysDesc[data.day] && dataDaysDesc[data.day][0]}
                    </p>
                    <img className={classes.tourist} src={tourists} alt='tourist'></img>
                    <p className={classes.text2}>
                        {dataDaysDesc[data.day] && dataDaysDesc[data.day][1]}
                    </p>
                </div>
                <SwiperSlider sliderPhotos={dataImagesSlider} />
                <div className={classes.fullDesc}>
                    <div className={classes.fullDescPar}>
                        <p className={classes.text3}>
                            {dataDaysDesc[data.day] && dataDaysDesc[data.day][2]}
                        </p>
                        <p className={classes.text4}>
                            {dataDaysDesc[data.day] && dataDaysDesc[data.day][3]}
                        </p>
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
                    <p className={classes.text5}>
                        {dataDaysDesc[data.day] && dataDaysDesc[data.day][4]}
                    </p>
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
                </NavLink>
            </div>
        );
    }
}

export default DayDescription;
