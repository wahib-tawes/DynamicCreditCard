import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Formater(str) {
  var str = str.substring(0, 19).replace(/\D/g, "");
  var arr = [];
  for (var i = 0; i < str.length; i += 4) {
    arr.push(str.slice(i, i + 4));
  }
  return arr.join(" ");
}

function NameValidator(str) {
  return str.substring(0, 19).replace(/([^A-Z])/gi, "");
}

function dateValidator(str) {
  var str = str.substring(0, 5).replace(/\D/gi, "");
  var arr = [];
  for (var i = 0; i < str.length; i += 2) {
    arr.push(str.slice(i, i + 2));
  }
  return arr.join("/");
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ccnValue: "xxxx xxxx xxxx xxxx",
      Name: "Card Holder",
      date: "12/12"
    };

    /* this.handleChange = this.handleChange.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);*/
  }
  handleChange = event => {
    this.setState({ ccnValue: Formater(event.target.value) });
  };

  handleChangeName = event => {
    this.setState({ Name: NameValidator(event.target.value) });
    console.log(event.target.value);
  };

  handleChangeDate = event => {
    this.setState({ date: dateValidator(event.target.value) });
    console.log(event.target.value);
  };
  render() {
    return (
      <div>
        <div className="App">
          <div className="card-name">CREDIT CARD</div>
          <div className="card-emv-chip">
            <img src="https://www.thebeneficial.com/portals/beneficialbankwebsite/images/chip.png" />
          </div>
          <div className="contain">
            <div className="card-item">
              <div className="card-number">
                <span>{this.state.ccnValue}</span>
              </div>
              <div className="card-under-number">
                <div className="card-4digits">5422</div>
                <div className="validity-item">
                  <p className="text">
                    VALID<br />
                    THRU
                  </p>
                  <div className="validity-content">
                    <p className="p1">MONTH/YEAR</p>
                    <p className="p2">{this.state.date}</p>
                  </div>
                </div>
              </div>
              <div className="card-holder">{this.state.Name}</div>
            </div>
            <div className="card-network-logo">
              <img src="http://www.debtproofliving.com/Portals/0/Blog/images/2007/11/visa_mastercard.jpg" />
            </div>
          </div>
        </div>
        <form>
          <label>
            CCN:
            <input
              type="text"
              value={this.state.ccnValue}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              value={this.state.Name}
              onChange={this.handleChangeName}
            />
          </label>
          <label>
            Date:
            <input
              type="text"
              value={this.state.date}
              onChange={this.handleChangeDate}
            />
          </label>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
