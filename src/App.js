import "./styles.css";
import React, { createRef } from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  componentDidMount() {
    console.log((this.inputRef.current.value = "1000"));
  }

  getValue() {
    console.log(this.inputRef.current.value);
     this.inputRef.current.style.color="red";
     this.inputRef.current.style.backgroudColor="orange";
  }

  render() {
    return (
      <div className="App">
        <h1>ref in class component</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.getValue()}>click me</button>
      </div>
    );
  }
}
