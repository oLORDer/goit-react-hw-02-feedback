// import PropTypes, { string } from 'prop-types';
import st from './feedback.module.scss';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <h1>Please leave feedback</h1>

      <div className={st.list}>
        {options.map(el => (
          <button
            key={nanoid()}
            type="button"
            name={el}
            onClick={onLeaveFeedback}
          >
            {el}
          </button>
        ))}
      </div>
    </>
  );
};

//       <button onClick={() => this.leaveVote('good')}>Good</button>
//       <button onClick={() => this.leaveVote('neutral')}>Neutral</button>
//       <button onClick={() => this.leaveVote('bad')}>Bad</button>
export default FeedbackOptions;
