import React from 'react';
import './App.css';

class Calculator extends React.Component {
  state = {
    operand1: 0,
    operand2: 0,
    result: 0
  };

  componentDidMount() {
    this.setState({ operand1: 0 });
    this.setState({ operand2: 1 });
  }

  handleChange1(event) {
    const value = event.target.value;
    this.setState({operand1: value});
  }
  handleChange2(event) {
    const value = event.target.value;
    this.setState({operand2: value});
  }

  render() {
    return (
      <div>
        <div>
          <label>First number:</label>
          <input type="text"
                 pattern="[0-9]*"
                 onInput={this.handleChange1.bind(this)}
                 defaultValue={this.state.operand1}/>
        </div>

        <div>
          <label>Second number:</label>
          <input type="text"
                 pattern="[0-9]*"
                 onInput={this.handleChange2.bind(this)}
                 defaultValue={this.state.operand2}/>
        </div>

        <div>
          <label>Operation:</label>
          <man-operators></man-operators>
        </div>

        <div>
          <p>Your result is: {this.state.result}</p>
        </div>
      </div>
    )
  }
}

export default Calculator;
