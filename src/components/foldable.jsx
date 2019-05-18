import React from 'react';
import style from './foldable.module.scss';

import Arrow from '../images/Arrow.svg';

class Foldable extends React.Component {
  constructor(props) {
    super(props);
    let first = props.children.findIndex(
      i => typeof i === 'object' && i.props.children
    );
    if (first === -1)
      throw new Error('No children found, please check your markdown');
    let temp = [...props.children]; // 在react裡面直接改props不太好，所以直接複製一份
    temp.splice(0, first + 1);
    this.state = { open: false, summary: props.children[first], detail: temp };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps() {}

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className={style.foldable}>
        <div style={{ cursor: 'pointer' }} onClick={this.handleClick}>
          <Arrow className={(this.state.open && style.arrow__clicked) || ''} />
          <div className={style.summary}>{this.state.summary}</div>
        </div>
        {this.state.open && (
          <div className={style.detail}>{this.state.detail}</div>
        )}
      </div>
    );
  }
}

export default Foldable;
