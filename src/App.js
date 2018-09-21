import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import ShowDetails from "./components/ShowDetails";

class App extends Component {
  state = {
    Bank: "",
    IFSC: "",
    Branch: "",
    Address: "",
    Contact: "",
    City: "",
    District: "",
    State: "",
    RTGS: "",
    BankCode: ""
  };
  getuser = e => {
    e.preventDefault();
    const userCode = e.target.elements.username.value;
    let data = fetch(`https://ifsc.razorpay.com/${userCode}`).then(res => {
      res.json().then(res => {
        const Bank = res.BANK;
        const IFSC = res.IFSC;
        const Branch = res.BRANCH;
        const Address = res.ADDRESS;
        const Contact = res.CONTACT;
        const City = res.CITY;
        const District = res.DISTRICT;
        const State = res.STATE;
        const RTGS = res.RTGS;
        const BankCode = res.BANKCODE;
        this.setState({
          Bank,
          IFSC,
          Branch,
          Address,
          Contact,
          City,
          District,
          State,
          RTGS,
          BankCode
        });
      });
    });
  };
  render() {
    const {
      Bank,
      IFSC,
      Branch,
      Address,
      Contact,
      City,
      District,
      State,
      RTGS,
      BankCode
    } = this.state;
    return (
      <div>
        <Header branding="Test App" getuser={this.getuser} />
        <ShowDetails
          Bank={Bank}
          IFSC={IFSC}
          Branch={Branch}
          Address={Address}
          Contact={Contact}
          City={City}
          District={District}
          State={State}
          RTGS={RTGS}
          BankCode={BankCode}
        />
      </div>
    );
  }
}

export default App;
