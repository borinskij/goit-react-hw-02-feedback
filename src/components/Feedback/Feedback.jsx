import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  hendelClick = event => {
    const { name } = event.target;
    console.log(this.state[name]);
    return this.setState({ [name]: this.state[name] + 1 });
  };

  render() {
    const { good, neutral, bad } = this.state;
    let total = 0;
    function countTotalFeedback() {
      total = good + neutral + bad;
      return total;
    }
    countTotalFeedback(good, neutral, bad);

    let count = 0;
    function countPositiveFeedbackPercentage() {
      count = (good / total) * 100;
      return count.toFixed(2);
    }
    countPositiveFeedbackPercentage();
    return (
      <>
        <h1>Please leave feedback</h1>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-success"
            name="good"
            onClick={this.hendelClick}
          >
            Good
          </button>
          <button
            type="button"
            className="btn btn-warning"
            name="neutral"
            onClick={this.hendelClick}
          >
            Neutral
          </button>
          <button
            type="button"
            className="btn btn-danger"
            name="bad"
            onClick={this.hendelClick}
          >
            Bad
          </button>
        </div>
        <h2>Statictic</h2>
        <ul>
          <li>
            <span>Good</span>:{this.state.good}
          </li>
          <li>
            <span>Neutral</span>: {this.state.neutral}
          </li>
          <li>
            <span>Bad</span>: {this.state.bad}
          </li>
          <li>
            <span>Total</span>: {total}
          </li>
          <li>
            <span>Positive feedback</span>: {count} %
          </li>
        </ul>
      </>
    );
  }
}
