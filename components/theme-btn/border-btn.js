import React from 'react';
import { StyleSheet } from 'react-native';
import Button from 'react-native-button';


const BorderBtn = ({ onPress, title, center, fluid, size }) => {

  const isCenter = center && { marginLeft: 'auto' };
  const isFluid = fluid && { width: '100%' };
  const small = size == 'small' && { fontSize: 16, paddingVertical: 4, };
  const medium = size == 'medium' && { fontSize: 20 };
  const large = size == 'large' && { fontSize: 24, paddingHorizontal: 30 };

  return (
    <Button style={[styles.themeBtn, isCenter, large, medium, small, isFluid]} onPress={onPress}>{title}</Button>
  )
}

const styles = StyleSheet.create({
  themeBtn: {
    paddingVertical: 6,
    color: '#fff',
    fontSize: 24,
    paddingHorizontal: 20,
    fontWeight: '700',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 30,
  }
});

export default BorderBtn;