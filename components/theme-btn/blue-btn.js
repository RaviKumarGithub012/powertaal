import React from 'react';
import { StyleSheet } from 'react-native';
import Button from 'react-native-button';
import themeColors from '../../styles/theme-colors.json';

const BlueBtn = ({ onPress, title, center, fluid, color, size, theme }) => {

  const isCenter = center && { marginLeft: 'auto' };
  const isFluid = fluid && { width: '100%' };
  const small = size == 'small' && { fontSize: 16 };
  const medium = size == 'medium' && { fontSize: 20, paddingHorizontal: 25 };
  const large = size == 'large' && { fontSize: 24, paddingHorizontal: 30 };
  const txtColor = color == 'dark' && { color: '#000' };
  const bgColor = theme == 'orange' && { backgroundColor: themeColors.btnColor }

  return (
    <Button style={[styles.themeBtn, txtColor, bgColor, isCenter, large, medium, small, isFluid,]} onPress={onPress}>{title}</Button>
  )
}


const styles = StyleSheet.create({
  themeBtn: {
    backgroundColor: themeColors.btnBlue,
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    fontWeight: '700',
    fontSize: 15
  }
});

export default BlueBtn;