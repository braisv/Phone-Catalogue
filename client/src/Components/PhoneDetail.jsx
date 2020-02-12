import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faChevronCircleDown
} from "@fortawesome/free-solid-svg-icons";
import "./PhoneDetail.scss";

const PhoneDetail = () => {
  const { phones } = useSelector(state => {
    return {
      phones: state.phones
    };
  });

  const params = useParams().phoneId;
  const [phone, setPhone] = useState("");
  const [features, setFeatures] = useState(false);

  useEffect(() => {
    setPhone(phones.filter(el => (el.id === +params ? el : null))[0]);
  }, [phone, phones, params]);

  const openFeatures = () => {
    setFeatures(!features)
    if (!features) {
      document.querySelector(".feature-section").style.height = '140px';
      document.querySelector(".feature-section").style.margin = '10px';
      document.querySelector(".feature-section").style.opacity = '1';
    }
    if (features) {
      document.querySelector(".feature-section").style.height = '0';
      document.querySelector(".feature-section").style.margin = '0';
      document.querySelector(".feature-section").style.opacity = '0';
    }
  }

  return (
    <div className="phone-detail flex-column">
      <div className="div1 flex">{phone.manufacturer}</div>
      <div className="div2 flex">{phone.name}</div>
      <div className="div8">
        <img
          src={`/images/${phone.imageFileName}`}
          alt={phone.name}
          classNameName="grid-detail"
        />
      </div>
      <div
        className="features-phone flex-column"
        onClick={() => openFeatures()}
      >
        Features
        {!features ? (
          <FontAwesomeIcon icon={faChevronCircleUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronCircleDown} />
        )}
    
          <div className="feature-section flex">
            <div className="feature">Color: {phone.color}</div>
            <div className="feature">Price: {phone.price}$</div>
            <div className="feature">Screen: {phone.screen}</div>
            <div className="feature">Processor: {phone.processor}</div>
            <div className="feature">Ram: {phone.ram}</div>
          </div>

      </div>
      <div className="div9 flex">{phone.description}</div>
    </div>
  );
};

export default PhoneDetail;
