import React, { Component } from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <div
          className="col-md-3"
          style={{ margin: " 10px auto", borderRadius: "30px" }}
        >
          <form className="navbar-form" onSubmit={props.getuser}>
            <div className="input-group add-on">
              <input
                type="text"
                className="form-control"
                placeholder="Enter IFSC Code Here"
                name="username"
              />
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i className="fa fa-search" onClick={e => props.getuser} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Header;
