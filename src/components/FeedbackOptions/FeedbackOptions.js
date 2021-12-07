import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import s from './FeedbackOptions.module.scss';

class Feedback extends Component {
  static propTypes = {
    options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        <ul className={s.Buttons}>
          {Object.keys(options).map(key => (
            <li key={key} className={s.Buttons__item}>
              <Button label={key} onLeaveFeedback={onLeaveFeedback} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Feedback;
