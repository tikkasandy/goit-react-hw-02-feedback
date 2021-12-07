import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.scss';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    const { message } = this.props;

    return <p className={s.Message}>{message}</p>;
  }
}

export default Notification;
