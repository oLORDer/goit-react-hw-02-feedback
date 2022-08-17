import PropTypes from 'prop-types';
import s from './feedback.module.scss';

export default function Section({ title, children }) {
  return (
    <section className={s.feedBack}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array,
};
