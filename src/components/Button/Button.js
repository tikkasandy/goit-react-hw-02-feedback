import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.scss';

class Button extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { label, onLeaveFeedback } = this.props;

    return (
      <button className={s.Button} onClick={() => onLeaveFeedback(label)}>
        {label}
      </button>
    );
  }
}
export default Button;
