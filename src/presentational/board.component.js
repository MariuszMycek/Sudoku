import React from 'react';
import Tile from './tile.component';
import style from './board.component.scss';

const Board = props => (
  <div className={style.Board}>
    {props.tiles.map((tile, i) => {
      const initialTileIndexArray = props.noDotIndexArray;
      const initialTile = initialTileIndexArray.includes(i);

      return (
        <Tile
          key={i}
          tile={tile}
          boardUpdate={props.boardUpdate}
          index={i}
          initialTile={initialTile}
        />
      );
    })}
  </div>
);

export default Board;
