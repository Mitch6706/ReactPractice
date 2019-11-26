import React from "react";
import ZipForm from "./ZipForm";
import { get } from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: "",
      city: {},
      dates: [],
      selectedDate: null
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
    get(`https://mhzv1.csb.app/weather/${zipcode}`).then(({ data }) => {
      const { city, list: dates } = data;

      this.setState({ zipcode, city, dates, selectedDate: null });
    });
  }
}

export default App;
