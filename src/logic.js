const createBoard = (rowsAmount, columnsAmount) => {
  let board = [];

  for (let i = 0; i < rowsAmount; ++i) {
    board[i] = [];

    for (let j = 0; j < columnsAmount; ++j) {
      const cellProperties = {
        row: i,
        column: j,
        isOpen: true,
        isFlagged: false,
        isMined: false,
        minesAround: 0,
      };

      board[i][j] = cellProperties;
    }
  }
  
  return board;
}

const shuffleMines = (board, minesAmount) => {
  const rowsAmount = board.length;
  const columnsAmount = board[0].length;

  for (let placedMinesAmount = 0; placedMinesAmount < minesAmount; ++placedMinesAmount) {
    const randomRow = Math.floor(Math.random() * rowsAmount);
    const randomColumn = Math.floor(Math.random() * columnsAmount);

    if (board[randomRow][randomColumn].isMined) {
      --placedMinesAmount;
    } else {
      board[randomRow][randomColumn].isMined = true;
    }
  }
}

export const startGame = (rowsAmount, columnsAmount, minesAmount) => {
  const board = createBoard(rowsAmount, columnsAmount);
  shuffleMines(board, minesAmount);
  return board;
}

export const cloneBoard = (board) => {
  return board.map((rows) => {
    return rows.map((cell) => {
      return { ...cell };
    });
  });
}

const getNeighbors = (board, row, column) => {
  const neighbors = [];

  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column, column + 1];

  rows.forEach((candidateRow) => {
    columns.forEach((candidateColumn) => {
      const isDifferent = candidateRow !== row || candidateColumn !== column;
      const isRowValid = row >= 0 && row < board.length;
      const isColumnValid = column >= 0 && column < board[0].length;

      if (isDifferent && isRowValid && isColumnValid) {
        neighbors.push(board[candidateRow][candidateColumn]);
      }
    });
  });

  return neighbors;
}

const checkNeighborhood = (board, row, column) => {
  const isSecure = (result, neighbor) => result && !neighbor.isMined;
  return getNeighbors(board, row, column).reduce(isSecure, true);
}

export const openCell = (board, row, column) => {
  const cell = board[row][column];
  
  if (!cell.isOpen) {
    cell.isOpen = true;

    if (cell.isMined) {
      cell.isExploded = true;
    } else if (checkNeighborhood(board, row, column)) {
      getNeighbors(board, row, column).forEach((neighbor) => {
        openCell(board, neighbor.row, neighbor.column);
      });
    } else {
      const neighbors = getNeighbors(board, row, column);
      cell.minesAround = neighbors.filter((neighbor) => neighbor.isMined).length;
    }
  }
}

const parseBoard = (board) => board.flat();

export const isOver = (board) => {
  const cells = parseBoard(board);
  const candidateExplosions = cells.filter(({ isExploded }) => isExploded);
  return candidateExplosions.indexOf(true) !== -1;
}

const isPending = (cell) => cell.isMined && !cell.isFlagged || !cell.isMined && !cell.isOpen;

export const isWinner = (board) => {
  const cells = parseBoard(board);
  return cells.filter((cell) => isPending(cell)).indexOf(true) === -1;
}

export const displayMines = (board) => parseBoard(board).filter((cell) => cell.isMined).forEach((cell) => cell.isOpen = true);

export const switchFlag = (board, row, column) => board[row][column].isFlagged = !board[row][column].isFlagged;