import React from 'react';
import { Link } from "react-router-dom";
import "./PhonePic.scss"

const PhonePic = ({ phone }) => {
    return (
        <div className="grid-photo-wrap flex" >
        <Link to={`/phone/${phone.id}`}>
            {phone.imageFileName ? <img src={`/images/${phone.imageFileName}`} alt={phone.name} className="grid-photo" /> : <div>{phone.name}</div>}
        </Link>
    </div>
    )
}

export default PhonePic
