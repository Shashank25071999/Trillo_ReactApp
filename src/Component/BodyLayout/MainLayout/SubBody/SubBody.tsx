import React from 'react';
import Description from './Description/Description';
import ReviewSection from './ReviewSection/ReviewSection';
import './SubBody.scss';

interface Props {
    
}

const SubBody: React.FunctionComponent<Props> = (Props) => {
    return (
        <div className="SubBody">
            <Description></Description>
            <ReviewSection></ReviewSection>
        </div>
    );
}


export default SubBody;