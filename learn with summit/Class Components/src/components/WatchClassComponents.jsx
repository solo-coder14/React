import React, { Component } from "react";

class Watch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  formatTime(date) {
    return date.toLocaleTimeString(this.props.local);
  }

  render() {
    return (
      <div className="text-center text-2xl font-mono mt-4">
        <h2>Current Time:</h2>
        <p className="text-4xl">{this.formatTime(this.state.time)}</p>
      </div>
    );
  }
}

export default Watch;
