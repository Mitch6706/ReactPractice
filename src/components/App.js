import React from "react";
import ZipForm from "./ZipForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ""
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render() {
    return (
      <div className="app">
        <ZipForm onSubmit={this.onFormSubmit} />
      </div>
    );
  }

  onFormSubmit(zipcode) {
    this.setState({ zipcode });
  }
}

export default App;
