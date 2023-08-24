import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={css.statistics}>
      <li className="stat-item">
        Good: <span className="count">{good}</span>
      </li>
      <li className="stat-item">
        Neutral: <span className="count">{neutral}</span>
      </li>
      <li className="stat-item">
        Bad: <span className="count">{bad}</span>
      </li>
      <li className="stat-item">
        Total: <span className="count">{total}</span>
      </li>
      <li className="stat-item">
        Positive feedback: <span className="count">{positivePercentage}%</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
