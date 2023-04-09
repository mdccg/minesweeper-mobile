import { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Mine from './../Mine';
import Flag from './../Flag';
import styles from './styles';

const Cell = ({
  isOpen,
  isMined,
  minesAround,
  isExploded,
  isFlagged,
}) => {
  const [cellStyles, setCellStyles] = useState([styles.cell, styles.default]);
  const [characterColor, setCharacterColor] = useState('#000');

  useEffect(() => {
    const getCharacterColor = () => {
      if (minesAround === 1) {
        setCharacterColor('#2A28D7');
      } else if (minesAround > 1 && minesAround < 4) {
        setCharacterColor('#2B520F');
      } else if (minesAround >= 4) {
        setCharacterColor('#F00');
      }
    }
    getCharacterColor();
  }, [minesAround]);

  const handlePress = () => {
    alert('BOOOM!');
  }

  useEffect(() => {
    if (isOpen) {
      setCellStyles(cellStyles => [...cellStyles, styles.opened]);
    }

    if (isExploded) {
      setCellStyles(cellStyles => [...cellStyles, styles.exploded]);
    }
  }, [isOpen, isExploded]);

  return (
    <TouchableOpacity onPress={isOpen || isFlagged ? undefined : handlePress} style={cellStyles}>
      {/*
        * FIXME
        * Validar cada possibilidade com todos os props do componente
        */}
      {isOpen && !isMined && minesAround > 0 && (
        <Text style={[styles.cellText, { color: characterColor }]}>{minesAround}</Text>
      )}
      {isOpen && isMined && <Mine />}
      {!isOpen && isFlagged && <Flag />}
    </TouchableOpacity>
  );
}



export default Cell;