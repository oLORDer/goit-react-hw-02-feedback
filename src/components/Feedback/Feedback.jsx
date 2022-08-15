import s from './feedback.module.scss';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

export default function Feedback({
  state,
  leaveVote,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  const { good, neutral, bad } = state;

  return (
    <div className={s.feedBack}>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={leaveVote}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      ></Statistics>
    </div>
  );
}
