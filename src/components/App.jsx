import { Component } from 'react';
import Feedback from './Feedback/Feedback';
export class App extends Component {
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
    return (
      <>
        <Feedback
          state={this.state}
          leaveVote={this.leaveVote}
          countTotalFeedback={this.countTotalFeedback()}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
