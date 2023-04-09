import { StyleSheet } from 'react-native';
import { params } from './../../config';

const styles = StyleSheet.create({
  cell: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  default: {
    backgroundColor: '#999',
    borderTopColor: '#CCC',
    borderLeftColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderTopColor: '#888',
    borderLeftColor: '#888',
    borderRightColor: '#888',
    borderBottomColor: '#888',
    borderWidth: 2,
  },
  exploded: {
    backgroundColor: '#F00',
  },
  cellText: {
    fontWeight: 700,
    fontSize: params.fontSize,
  },
});

export default styles;