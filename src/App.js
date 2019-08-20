import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    miliseconds: 0,
    minutes: 0,
    active: false
  };

  handleStart = () => {
    this.idInt = setInterval(() => this.showResult(), 10);
  };

  showResult = () => {
    if (this.state.miliseconds > 6000) {
      this.setState({
        minutes: this.state.minutes + 1,
        miliseconds: 0
      });
    } else {
      this.setState({
        active: true,
        miliseconds: this.state.miliseconds + 1
      });
    }
  };

  handleStop = () => {
    clearInterval(this.idInt);
    this.setState({
      active: false
    });
  };

  handleReset = () => {
    clearInterval(this.idInt);
    this.setState({
      active: false,
      miliseconds: 0,
      minutes: 0
    });
  };

  render() {
    let minutes = this.state.minutes;
    let seconds = (this.state.miliseconds / 100).toFixed(2);

    return (
      <div className="App">
        <div className="stoper">
          {minutes < 10 ? `0${minutes}` : minutes} :{" "}
          {seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <button
          className={!this.state.active ? "start" : "stop"}
          onClick={!this.state.active ? this.handleStart : this.handleStop}
        >
          {!this.state.active ? "start" : "stop"}
        </button>
        <button className="reset" onClick={this.handleReset}>
          reset
        </button>
      </div>
    );
  }
}

export default App;
