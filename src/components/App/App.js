import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = { advice: "" };
  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        console.log(advice);
        this.setState({ advice });
      })
      .catch((error) => {
        console.log("errors");
      });
  };
  render() {
    return (
      <div className="app">
        <div className="card">
          <h2 className="heading">{this.state.advice}</h2>
          <button className="button" onClick={this.fetchAdvice}>
            <span>New Advice</span>
          </button>
        </div>
      </div>
    );
  }
}
export default App;
