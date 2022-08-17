import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export default function Feedback({
  state,
  leaveVote,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  const { good, neutral, bad } = state;

  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions
        options={Object.keys(state)}
        onLeaveFeedback={leaveVote}
      />
      {countTotalFeedback ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
}
