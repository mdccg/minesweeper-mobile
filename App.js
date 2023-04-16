import { Component } from 'react';
import { SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Board from './src/components/Board';
import { params } from './src/config';
import {
  startGame,
  cloneBoard,
  openCell,
  isOver,
  isWinner as getIsWinner,
  displayMines,
  switchFlag
} from './src/logic';

class App extends Component {
  constructor() {
    super();
    this.state = this.createState();
  }

  createState = () => {
    const rowsAmount = params.getRowsQuantity();
    const columnsAmount = params.getColumnsQuantity();
    const minesAmount = Math.floor(rowsAmount * columnsAmount * params.difficulty);

    const board = startGame(rowsAmount, columnsAmount, minesAmount);
    const isWinner = false;
    const isLoser = false;
    const returnObject = { board, isWinner, isLoser };

    return returnObject;
  }

  openCell = (row, column) => {
    const board = cloneBoard(this.state.board);
    
    openCell(board, row, column);
    
    const isLoser = isOver(board);
    const isWinner = getIsWinner(board);

    if (isLoser) {
      displayMines(board);
      alert('Ooh, céus! Puxa vida... Quem sabe na próxima?');
    }

    if (isWinner) {
      alert('Você venceu.');
    }

    console.table(board);

    this.setState({ board, isWinner, isLoser });
  }

  switchFlag = (row, column) => {
    const board = cloneBoard(this.state.board);
    switchFlag(board, row, column);
    this.setState({ board });
  }

  newGame = () => {
    this.setState(this.createState());
  }

  render() {
    return (
      <SafeAreaView>
        <Board board={this.state.board} openCell={this.openCell} switchFlag={this.switchFlag} />
        <TouchableOpacity onPress={this.newGame} style={styles.resetButton}>
          <Text>Resetar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  resetButton: {
    backgroundColor: 'lightblue',
    width: 'fit-content',
    padding: 16,
    borderRadius: 2,
  },
});

export default App;