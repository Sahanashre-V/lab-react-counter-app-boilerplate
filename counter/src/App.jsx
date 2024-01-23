import { Component } from "react";

class counter extends Component {
  constructor() {
    super();
    this.state = {
      num: 0,
    };
  }
  sum() {
    this.setState({ num: this.state.num + 1 });
  }

  sub() {
    this.setState({ num: this.state.num - 1 });
  }

  reset() {
    this.setState({ num: 0 });
  }

  render() {
    return (
      <div>
        <h1 className="topic">Counter App</h1>
        <h2 className="num">{this.state.num}</h2>
        <div className="box">
        <button className="b1"
          onClick={() => {
            this.sum();
          }}
        >
          +
        </button>
        <button className="b2" onClick={this.sub.bind(this)}>-</button>
        <button className="b3" onClick={this.reset.bind(this)}>Reset</button>
        </div>
      </div>
    );
  }
}

export default counter;