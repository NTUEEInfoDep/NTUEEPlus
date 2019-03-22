import React from 'react';
import style from './foldable.module.scss';

import Arrow from '../images/Arrow.svg';

class Foldable extends React.Component {
  constructor(props) {
    super(props);
    [this.summary, this.detail] = this.props.children
      .filter(i => typeof i === 'object') // 拿前兩個傳入的object chilren當作summary和detail
      .map(i => i.props.children[0]); // 只取那兩個Object的props.children中的第一個東西
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className={style.foldable} onClick={this.handleClick}>
        <Arrow className={this.state.open && style.arrow__clicked} />
        <p className={style.summary}>{this.summary}</p>
        {this.state.open && <p className={style.detail}>{this.detail}</p>}
      </div>
    );
  }
}

export default Foldable;
