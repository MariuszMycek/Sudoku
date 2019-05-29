import React from 'react';
import style from './tile.component.scss';

const Tile = props => {
  return (
    <input
      type='tel'
      className={style.Tile}
      value={props.tile}
      onKeyPress={e => e.target.select()}
      disabled={props.initialTile}
      onChange={e => {
        props.boardUpdate(props.index, e.target.value);
      }}
    />
  );
};

export default Tile;
