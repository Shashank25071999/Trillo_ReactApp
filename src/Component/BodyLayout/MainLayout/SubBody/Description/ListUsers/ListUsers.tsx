import React from 'react';
import './ListUsers.scss';


interface Props {
    
}

const  ListUsers: React.FunctionComponent<Props> = (Props) => {
    return (
        <div className="ListUsers">
            <ul className="ListUsers__unlist">
                <li className="ListUsers__unlist__listitem">Close to the beach</li>
                <li className="ListUsers__unlist__listitem">Close to the beach</li>
                <li className="ListUsers__unlist__listitem">Close to the beach</li>
                <li className="ListUsers__unlist__listitem">Close to the beach</li>
                <li className="ListUsers__unlist__listitem">Close to the beach</li>
                <li className="ListUsers__unlist__listitem">Close to the beach</li>
            </ul>

        </div>
    );
}


export default ListUsers;