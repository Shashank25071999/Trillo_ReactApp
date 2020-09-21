import React from 'react';
import './ImageContainer.scss';
interface Props{
    src:string;
    alt:string;
}
const ImageContainer:React.FunctionComponent<Props>=(Props)=>{
    return (
        
            <div className="ImageContainer">
                <img src={Props.src} alt={Props.alt}>
                
                </img>
            </div>
        
    );
}

export default ImageContainer;