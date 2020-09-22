import React from 'react';
import ReviewBox from './ReviewBox/ReviewBox';
import './ReviewSection.scss';

interface Props {
    
}

const ReviewSection: React.FunctionComponent<Props> = (Props) => {
    return (
        <div className="ReviewSection">
            <ReviewBox></ReviewBox>
            <ReviewBox></ReviewBox>
            <div className="button__container">
                <button className="button">Show all</button>
            </div>
        </div>
    );
}


export default ReviewSection;