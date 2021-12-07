import { Component } from 'react';
import s from './Section.module.scss';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className={s.Section}>
        <h2 className={s.Title}>{title}</h2>
        {children}
      </section>
    );
  }
}

export default Section;
