import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.scss';

class Statistics extends Component {
  static propTypes = {
    options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
    const { options, total, positivePercentage } = this.props;

    return (
      <div>
        <ul className={s.Votes}>
          {Object.keys(options).map(key => (
            <li key={key} className={s.Buttons__item}>
              <p>
                {key}: {options[key]}
              </p>
            </li>
          ))}
        </ul>
        <p className={s.Statistics}>Total: {total}</p>
        <p className={s.Statistics}>
          {' '}
          Positive feedback: {positivePercentage}%
        </p>
      </div>
    );
  }
}

export default Statistics;
