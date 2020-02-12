import React from "react";
import { connect } from "react-redux";
import PhonePic from "./PhonePic";
import "./PhoneGrid.scss"

const PhoneGrid = ({ phones }) => {

  if (!phones[0])
  return (
    <div className="spinner">
      <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
  return (
       <div className="phones-grid">
        {phones.map((phone, i) => (
        <PhonePic key={i} phone={phone} />
      ))}
        </div>
  );
};

const mapStateToProps = state => ({
  phones: state.phones
});

export default connect(mapStateToProps)(PhoneGrid);
