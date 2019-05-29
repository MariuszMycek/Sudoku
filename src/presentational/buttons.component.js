import React from 'react';
import style from './buttons.component.scss';

const Buttons = props => (
  <div className={style.Buttons}>
    <div className={style.newGameWrapper}>
      <form action='#' className={style.difficultyForm}>
        <div className={style.formCheck}>
          <input
            id='easy'
            type='radio'
            name='difficulty'
            value='easy'
            checked={props.difficulty === 'easy'}
            onChange={props.handleOptionChange}
            className={style.formCheckInput}
          />
          <label className={style.formLabel} htmlFor='easy'>
            Easy
          </label>
        </div>
        <div className={style.formCheck}>
          <input
            id='medium'
            type='radio'
            name='difficulty'
            value='medium'
            checked={props.difficulty === 'medium'}
            onChange={props.handleOptionChange}
            className={style.formCheckInput}
          />
          <label className={style.formLabel} htmlFor='medium'>
            Medium
          </label>
        </div>
        <div className={style.formCheck}>
          <input
            id='hard'
            type='radio'
            name='difficulty'
            value='hard'
            checked={props.difficulty === 'hard'}
            onChange={props.handleOptionChange}
            className={style.formCheckInput}
          />
          <label className={style.formLabel} htmlFor='hard'>
            Hard
          </label>
        </div>
        <div className={style.formCheck}>
          <input
            id='very-hard'
            type='radio'
            name='difficulty'
            value='very-hard'
            checked={props.difficulty === 'very-hard'}
            onChange={props.handleOptionChange}
            className={style.formCheckInput}
          />
          <label className={style.formLabel} htmlFor='very-hard'>
            Very-hard
          </label>
        </div>
      </form>
    </div>
    <div className={style.utilityButtonsWrapper}>
      <button onClick={props.newGame}>New Game</button>
      <button onClick={props.checkSolution}>Check</button>
      <button onClick={props.restart}>Restart</button>
      <button onClick={props.solve}>Solve</button>
    </div>
  </div>
);

export default Buttons;
