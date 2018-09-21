import React, { Component } from "react";
import "../ShowDetails.css";
const ShowDetails = props => {
  return (
    <div className="container" style={{ border: "1px solid black" }}>
      <div className="form-group row element">
        <label className="col-sm-2">BANK</label>
        <div className="col-sm-10">{props.Bank}</div>
      </div>
      <div className="form-group row element">
        <label className="col-sm-2">IFSC</label>
        <div className="col-sm-10">{props.IFSC}</div>
      </div>
      <div className="form-group row element">
        <label className="col-sm-2">BRANCH</label>
        <div className="col-sm-10">{props.Branch}</div>
      </div>
      <div className="form-group row element">
        <label className="col-sm-2">ADDRESS</label>
        <div className="col-sm-10">{props.Address}</div>
      </div>
      <div className="form-group row element">
        <label className="col-sm-2 ">CONTACT</label>
        <div className="col-sm-10">{props.Contact}</div>
      </div>
      <div className="form-group row element">
        <label className="col-sm-2">CITY</label>
        <div className="col-sm-10">{props.City}</div>
      </div>
      <div className="form-group row element">
        <label className="col-sm-2 ">DISTRICT</label>
        <div className="col-sm-10 ">{props.District}</div>
      </div>
      <div className="form-group row element">
        <label className="col-sm-2">STATE</label>
        <div className="col-sm-10">{props.state}</div>
      </div>
      <div className="form-group row element">
        <label className="col-sm-2">BANK CODE</label>
        <div className="col-sm-10">{props.BankCode}</div>
      </div>
      <div className="form-group row element">
        <label className="col-sm-2">RTGS</label>
        <div className="col-sm-10">{props.RTGS}</div>
      </div>
    </div>
  );
};
export default ShowDetails;
