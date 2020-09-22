import React from 'react';
import Description from './Description/Description';
import ReviewSection from './ReviewSection/ReviewSection';
import './SubBody.scss';

interface Props {
    
}

const SubBody: React.FunctionComponent<Props> = (Props) => {
    return (
        <div className="OverallContainer">
        <div className="SubBody">
            <Description></Description>
            <ReviewSection></ReviewSection>
        </div>

        <div className="ctcsection">
            <p className="ctcsection__para">Good To know we have 4 room selected for you</p>
            <button className="ctcsection__bookingbutton">Book now</button>
        </div>    
        </div>
        
    );
}


export default SubBody;