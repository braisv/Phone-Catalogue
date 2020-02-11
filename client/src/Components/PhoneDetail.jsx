import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./PhoneDetail.scss"

const PhoneDetail = () => {
  const { phones } = useSelector(state => {
    return {
      phones: state.phones
    };
  });

  const params = useParams().phoneId;
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setPhone(phones.filter(el => (el.id === +params ? el : null))[0]);
  }, [phone, phones, params]);

  return (
    <div class="parent">
      <div class="div1 flex">{phone.manufacturer}</div>
      <div class="div2 flex">{phone.name}</div>
      <div class="div3 flex">{phone.color}</div>
      <div class="div4 flex">{phone.price}</div>
      <div class="div5 flex">{phone.screen}</div>
      <div class="div6 flex">{phone.processor}</div>
      <div class="div7 flex">{phone.ram}</div>
      <div class="div8"><img src={`/images/${phone.imageFileName}`} alt={phone.name} className="grid-detail" /></div>
      <div class="div9 flex">{phone.description}</div>
    </div>
  );
};

export default PhoneDetail;
