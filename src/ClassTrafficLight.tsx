import { Component } from 'react';

type State = {
  lights: string[];
  lightIndex: number;
};

export class ClassTrafficLight extends Component<object, State> {
  state: State = {
    lights: ['red', 'yellow', 'green'],
    lightIndex: 0
  };

  nextState = () => {
    this.setState(prevState => ({ lightIndex: (prevState.lightIndex + 1) % prevState.lights.length }));
  };

  render() {
    const { lights, lightIndex } = this.state;

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {lights.map((color, index) => (
            <div key={color} className={`circle ${lightIndex === index ? color : 'black'}`}></div>
          ))}
        </div>
        <button className="next-state-button" onClick={this.nextState}>Next State</button>
      </div>
    );
  }
}