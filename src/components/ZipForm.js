import React, { Component } from "react";

class ZipForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ""
    };
    this.inputUpdated = this.inputUpdated.bind(this);
  }
  render() {
    return (
      <div clasName="zip-form">
        <form>
          <label htmlFor="zipcode">Zip Code</label>
          <input
            className="form-control"
            type="input"
            name="zipcode"
            value={this.state.zipcode}
            onInput={this.inputUpdated}
          />
          <button type="submit" className="btn btn-success">
            Get the forecast
          </button>
        </form>
      </div>
    );
  }

  inputUpdated(e) {
    const { value } = e.target;
    this.setState({ zipcode: value });
  }
}

export default ZipForm;
