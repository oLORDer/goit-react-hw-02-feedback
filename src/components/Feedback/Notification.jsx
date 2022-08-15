import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <div style={{ margin: '10px', color: 'red' }}>{message}</div>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
