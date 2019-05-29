import React, { Component } from 'react';
import style from './App.scss';
import { hot } from 'react-hot-loader';
import sudoku from 'sudoku-umd';
import Board from '../presentational/board.component';
import Info from '../presentational/info.component';
import Buttons from '../presentational/buttons.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialBoard: '',
      board: '',
      renderInfo: true,
      infoText: 'Choose difficulty and press New Game button to start',
      difficulty: 'easy'
    };
  }

  stringToArray(string) {
    const array = string.split('');
    return array;
  }

  dotsToEmptyString(array) {
    const dotsToEmptyString = array.map(item => {
      let newItem = item;
      if (item === '.') {
        newItem = '';
      }
      return newItem;
    });
    return dotsToEmptyString;
  }

  tilesContent = () =>
    this.dotsToEmptyString(this.stringToArray(this.state.board));

  newGame = () => {
    const newSudoku = sudoku.generate(this.state.difficulty);
    this.setState({
      initialBoard: newSudoku,
      board: newSudoku
    });
    this.setState({ renderInfo: false });
  };

  restart = () => {
    this.closeInfo();
    this.setState({ board: this.state.initialBoard });
  };

  solve = () => {
    const solution = sudoku.solve(this.state.board);
    this.closeInfo();
    if (solution) {
      this.setState({ board: solution });
    } else {
      this.setState({ renderInfo: true });
      this.setState({
        infoText: 'Sorry, you are following the wrong path...'
      });
      setTimeout(() => this.setState({ renderInfo: false }), 3000);
    }
  };

  checkSolution = () => {
    const isSolved = sudoku.solve(this.state.board);
    this.setState({ renderInfo: true });
    if (isSolved && !this.state.board.includes('.')) {
      this.setState({
        infoText: 'Congratulations! You solved the puzzle!'
      });
    } else if (isSolved) {
      this.setState({
        infoText: 'You are on the right way to win!'
      });
    } else {
      this.setState({
        infoText: 'Sorry, you are following the wrong path...'
      });
    }
    setTimeout(() => this.setState({ renderInfo: false }), 3000);
  };

  boardUpdate = (index, value) => {
    const boardAsArray = this.stringToArray(this.state.board);
    let newValue;
    const regEx = /[1-9]/;
    if (!value.match(regEx)) {
      newValue = '.';
    } else {
      newValue = value;
    }
    boardAsArray[index] = newValue;
    this.setState({ board: boardAsArray.join('') });
  };

  closeInfo = () => {
    this.setState({ renderInfo: false });
  };

  initialTileIndex() {
    const initialBoardArray = this.stringToArray(this.state.initialBoard);
    let noDotIndexArray = [];
    initialBoardArray.forEach((element, i) => {
      if (element !== '.') {
        noDotIndexArray.push(i);
      }
    });
    return noDotIndexArray;
  }
  handleOptionChange = e => {
    this.setState({
      difficulty: e.target.value
    });
  };

  render() {
    return (
      <div className={style.App}>
        <h1>Sudoku</h1>
        <div className={style.boardWrapper}>
          <Board
            tiles={this.tilesContent()}
            boardUpdate={this.boardUpdate}
            renderTiles={this.state.renderTiles}
            noDotIndexArray={this.initialTileIndex()}
          />
          {this.state.renderInfo ? (
            <Info infoText={this.state.infoText} closeInfo={this.closeInfo} />
          ) : null}
        </div>
        <Buttons
          difficulty={this.state.difficulty}
          handleOptionChange={this.handleOptionChange}
          newGame={this.newGame}
          checkSolution={this.checkSolution}
          restart={this.restart}
          solve={this.solve}
        />
      </div>
    );
  }
}

export default hot(module)(App);
