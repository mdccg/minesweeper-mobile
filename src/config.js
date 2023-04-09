import { Dimensions } from 'react-native';

export const params = {
  blockSize: 30,
  borderWidth: 3,
  fontSize: 18,
  headerProportion: 0.15,
  difficulty: 0.1,
  getColumnsQuantity() {
    const { width } = Dimensions.get('window');
    return Math.floor(width / this.blockSize);
  },
  getRowsQuantity() {
    let { height } = Dimensions.get('window');
    height = height * (1 - this.headerProportion);
    return Math.floor(height / this.blockSize);
  }
};