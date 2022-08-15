// import PropTypes, { string } from 'prop-types';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(el => (
    <button key={nanoid()} type="button" name={el} onClick={onLeaveFeedback}>
      {el}
    </button>
  ));
};

//       <button onClick={() => this.leaveVote('good')}>Good</button>
//       <button onClick={() => this.leaveVote('neutral')}>Neutral</button>
//       <button onClick={() => this.leaveVote('bad')}>Bad</button>
export default FeedbackOptions;
