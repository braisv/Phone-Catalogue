import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/fetchData";
import PhonePic from "./PhonePic";
import "./PhoneGrid.scss"

const PhoneGrid = ({ phones }) => {

  return (
        <div className="container">
        <div className="restaurant-grid">
        {phones.map((phone, i) => (
        <PhonePic key={i} phone={phone} />
      ))}
        </div>
      </div>
  );
};

const mapStateToProps = state => ({
  phones: state.phones
});

const mapDispatchToProps = { fetchData };

export default connect(mapStateToProps, mapDispatchToProps)(PhoneGrid);
