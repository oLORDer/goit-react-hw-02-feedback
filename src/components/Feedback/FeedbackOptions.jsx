// import PropTypes, { string } from 'prop-types';
import PropTypes from 'prop-types';
import st from './feedback.module.scss';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
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

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
