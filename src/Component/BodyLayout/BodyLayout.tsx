import React from 'react';
import './BodyLayout.scss';
interface Props{

}

const BodyLayout:React.FunctionComponent<Props>=(Props)=>{
    return (
        <div className="BodyLayout">
            {
                Props.children
            }
        </div>
    );
}

export default BodyLayout;