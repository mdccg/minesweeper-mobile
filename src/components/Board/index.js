import { View, StyleSheet } from 'react-native';
import Cell from './../Cell';

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

const Board = ({
  board,
  openCell,
  switchFlag
}) => {
  return (
    <View style={styles.board}>
      {board.map((_, indexRow) => (
        <Row key={indexRow}>
          {board[indexRow].map((cellProperties, indexCell) => (
            <Cell
              key={indexCell}
              {...cellProperties}
              openCell={openCell}
              switchFlag={switchFlag} />
          ))}
        </Row>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    alignItems: 'center',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
});

export default Board;