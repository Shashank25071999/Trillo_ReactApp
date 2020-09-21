import React from "react";
import search from '../../Assets/SVG/magnifying-glass.svg';
import chat from '../../Assets/SVG/chat.svg';
import bookmark from '../../Assets/SVG/bookmark.svg';
import userPhoto from '../../Assets/photo.jpg';
import '../HeaderLayout/HeaderLayout.scss';
import logo from '../../Assets/favicon.png';
import InputField from "../InputField/InputField";

interface Props {
}


const HeaderLayout: React.FunctionComponent<Props> = (Props) => {

    return (
        <div>

            <header className="Header">
                <img className="Header__logo" src={logo} alt="logo"></img>
                <div className="Header__searchbox">
                    <InputField type="text"></InputField>
                    <button className="Header__searchbox__logo">
                        <img  src={search} alt="search"></img>
                    </button>
                </div>

                <nav className="Header__nav">
                    <div className="Header__nav__box">
                    <img className="Header__nav__icon" src={bookmark} alt="search"></img>
                    <span className="Header__nav__icon__span">8</span>
                    </div>
                    <div className="Header__nav__box">
                    <img className="Header__nav__icon" src={chat} alt="search"></img>
                    <span className="Header__nav__icon__span" >8</span>
                    </div>
                    <div className="Header__nav__box">
                    <img src={userPhoto} alt="search" className="Header__nav__userphoto"></img>
                    <span className="Header__nav__icon__span">8</span>
                    </div>
                </nav>


            </header>
        </div>
    );
}

export default HeaderLayout;