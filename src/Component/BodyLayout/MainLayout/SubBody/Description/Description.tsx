import React from 'react';
import './Description.scss';
import ListUsers from './ListUsers/ListUsers';
import Paragraph from './Paragraph/Paragraph';
import Recommendation from './Recommendation/Recommendation';

interface Props {
    
}

const Description: React.FunctionComponent<Props> = (Props) => {
    return (
        <div className="Description">
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
            <ListUsers></ListUsers>
            <Recommendation></Recommendation>
        </div>
    );
}


export default Description;