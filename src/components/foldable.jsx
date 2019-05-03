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
    this.summary = props.children[first];
    props.children.splice(0, first + 1);
    this.detail = props.children;
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className={style.foldable}>
        <div style={{ cursor: 'pointer' }} onClick={this.handleClick}>
          <Arrow className={(this.state.open && style.arrow__clicked) || ''} />
          <div className={style.summary}>{this.summary}</div>
        </div>
        {this.state.open && <div className={style.detail}>{this.detail}</div>}
      </div>
    );
  }
}

export default Foldable;
