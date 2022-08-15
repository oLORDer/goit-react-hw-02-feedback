import { Component } from 'react';
import s from './feedback.module.scss';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

export default class fBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveVote = ({ target }) => {
    const { name } = target;

    this.setState(prevState => {
      const value = prevState[name];

      return {
        [name]: value + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    // const value = this.state[propertyName];
    const result = (100 / total) * this.state.good;
    return Number(result.toFixed(2));
  };

  render() {
    const { good, neutral, bad } = this.state;
    // const total = this.countTotalFeedback();
    // const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={s.feedBack}>
        <h1>Please leave feedback</h1>
        <div className={s.list}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.leaveVote}
          />
          {/* <button onClick={() => this.leaveVote('good')}>Good</button>
          <button onClick={() => this.leaveVote('neutral')}>Neutral</button>
          <button onClick={() => this.leaveVote('bad')}>Bad</button> */}
        </div>
        <h2>Statistics</h2>
        <ul>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </ul>
      </div>
    );
  }
}
