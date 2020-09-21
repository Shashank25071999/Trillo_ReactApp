import React from 'react';
import './SideBar.scss';
import homeimage from "../../../Assets/SVG/home.svg";
import aircraft from "../../../Assets/SVG/aircraft-take-off.svg";
import key from "../../../Assets/SVG/key.svg";
import map from "../../../Assets/SVG/map.svg";
import SideNavItem from './SideNavItem/SideNavItem';
interface Props{

}

const SideBar:React.FunctionComponent<Props>=(Props)=>{

    return (
        <div className="SideBar">
            <nav>
            <ul>
                <SideNavItem img={homeimage} label="home" alt="home"></SideNavItem>
                <SideNavItem img={aircraft} label="airplane" alt="airplane"></SideNavItem>
                <SideNavItem img={key} label="key" alt="key"></SideNavItem>
                <SideNavItem img={map} label="book" alt="book"></SideNavItem>
            </ul>

            

            </nav>
            <div className="SideBar__copyright">
                <p>
                    All Rights are reserved
                </p>
            </div>
        </div>
    );
}

export default SideBar;