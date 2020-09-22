import React from 'react';
import './SideNavItem.scss';

interface Props {
    img: string;
    label: string;
    alt?:string;
}

const SideNavItem: React.FunctionComponent<Props> = (Props) => {
    return (
        <div className="SideNavItem">
            <img className="SideNavItem__img" src={Props.img} alt={Props.alt}></img>
            <li className="SideNavItem__list">
                {Props.label}
            </li>

        </div>
    );
}


export default SideNavItem;