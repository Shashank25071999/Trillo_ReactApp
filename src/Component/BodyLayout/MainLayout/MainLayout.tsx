import React from 'react';
import './MainLayout.scss';
import img1 from '../../../Assets/img1.jpg';
import img2 from '../../../Assets/img2.jpg';
import img3 from '../../../Assets/img3.jpg';
import star from '../../../Assets/SVG/star.svg';
import location from '../../../Assets/SVG/location-pin.svg';
import ImageContainer from '../../ImageContainer/ImageContainer';
import SubBody from './SubBody/SubBody';
interface Props{

}

const MainLayout:React.FunctionComponent<Props>=(Props)=>{
return (
    <main className="MainLayout">
        <div className="ImageContainer">
            <img className="ImageContainer__image" src={img1} alt='img1'>
            </img>
            <img src={img2} alt='img1' className="ImageContainer__image">
            </img>
            <img className="ImageContainer__image" src={img3} alt='img1'>
            </img>
        </div>

        <div className="OverviewContainer">
            <h1 className="OverviewContainer__Heading">Hotel Las Palmas</h1>
            <div className="OverviewContainer__Star">
            <ImageContainer src={star} alt="star"></ImageContainer>
            <ImageContainer src={star} alt="star"></ImageContainer>
            <ImageContainer src={star} alt="star"></ImageContainer>
            <ImageContainer src={star} alt="star"></ImageContainer>
            <ImageContainer src={star} alt="star"></ImageContainer>
            </div>

            <div className="OverviewContainer__Location">
            <ImageContainer src={location} alt="star"></ImageContainer>
            <button className="OverviewContainer__InlineButton"> Shastri Nagar</button>
            </div>

            <div className="OverviewContainer__Rating">
                <div className="OverviewContainer__Rating__Rate">8.6</div>
                <div>426 votes</div>
            </div>
        </div>

        <SubBody>
            
        </SubBody>
    </main>
);
}

export default MainLayout;