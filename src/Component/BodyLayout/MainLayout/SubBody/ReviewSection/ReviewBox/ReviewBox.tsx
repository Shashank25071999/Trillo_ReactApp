import React from 'react';
import './ReviewBox.scss';
import photo from '../../../../../../Assets/photo.jpg';
interface Props {
    
}

const ReviewBox: React.FunctionComponent<Props> = (Props) => {
    return (
        <div className="ReviewBox">
            <p className="ReviewBox__para">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div className="ReviewBox__usercontainer">
                <img className="ReviewBox__usercontainer__photo" src={photo} alt="user">
                </img>
                <div className="ReviewBox__usercontainer__namedate">
                    <p className="ReviewBox__usercontainer__namedate__name">Nick Smith</p>
                    <p className="ReviewBox__usercontainer__namedate__date">Sept 13th 2020</p>
                </div>

                <div className="ReviewBox__usercontainer__rating">
                    9.3
                </div>

            </div>
        </div>
    );
}


export default ReviewBox;