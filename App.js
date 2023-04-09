import { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Board from './src/components/Board';
import { params } from './src/config';
import { startGame } from './src/logic';

class App extends Component {
  constructor(props) {
    super();
    this.state = this.createState();
  }

  createState = () => {
    const rowsAmount = params.getRowsQuantity();
    const columnsAmount = params.getColumnsQuantity();
    const minesAmount = Math.floor(rowsAmount * columnsAmount * params.difficulty);

    const board = startGame(rowsAmount, columnsAmount, minesAmount);

    const object = {
      board,
      isWinner: false,
      isLoser: false,
    };

    return object;
  }

  render() {
    return (
      <SafeAreaView>
        <Board board={this.state.board} />
      </SafeAreaView>
    );
  }
}

export default App;