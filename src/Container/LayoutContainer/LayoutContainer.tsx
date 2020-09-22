import React from "react";
import './LayoutContainer.scss';
interface Props{

}

const LayoutContainer:React.FunctionComponent<Props>=(Props)=>{
    return (
        <div className="LayoutContainer">
        {
            Props.children
        }
        </div>
    );
}

export default LayoutContainer;