import React from 'react';
import ImageContainer from '../../../../../ImageContainer/ImageContainer';
import photo from '../../../../../../Assets/photo.jpg';
import './Recommendation.scss';

interface Props {
    
}

const Recommendation: React.FunctionComponent<Props> = (Props) => {
    return (
        <div className="Recommendation">
            <p className="Recommendation__para">Lucy and three others recommended this hotel</p>
            <img className="Recommendation__image" src={photo} alt="user"></img>
            <img className="Recommendation__image" src={photo} alt="user"></img>
            <img className="Recommendation__image" src={photo} alt="user"></img>
            <img className="Recommendation__image" src={photo} alt="user"></img>
            <img className="Recommendation__image" src={photo} alt="user"></img>
        </div>
    );
}


export default Recommendation;