import React from 'react';
import style from './presenter.module.scss';

export default props => (
  <div className={style.presenter}>
    <div className={style.textIntroduction}>
      <div>
        <p>{props.name}</p>
        <p>&nbsp;/&nbsp;</p>
        {/* no-break whitespace，空白*/}
        <p>{props.title}</p>
      </div>
      <hr />
      <p>{props.children}</p>
    </div>
    <img src={props.src} alt="照片" />
  </div>
);
