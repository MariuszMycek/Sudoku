import React from 'react';
import style from './info.component.scss';

const Info = props => (
  <div className={style.InfoWrapper} onClick={props.closeInfo}>
    <div className={style.Info}>{props.infoText}</div>
  </div>
);

export default Info;
