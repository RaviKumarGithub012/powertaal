import React from 'react';
import { StyleSheet } from 'react-native';
import Button from 'react-native-button';
import themeColors from '../../styles/theme-colors.json';


const OrangeBtn = ({ onPress, title, center, fluid, size, toRight, toLeft }) => {

  const isCenter = center && { marginLeft: 'auto', marginRight: 'auto' };
  const isRight = toRight && { marginLeft: 'auto' };
  const isLeft = toLeft && { marginRight: 'auto' };
  const isFluid = fluid && { width: '100%' };
  const small = size == 'small' && { fontSize: 16 };
  const medium = size == 'medium' && { fontSize: 20, paddingHorizontal: 25 };
  const large = size == 'large' && { fontSize: 24, paddingHorizontal: 30 };

  return (
    <Button style={[styles.themeBtn, isCenter, isLeft, isRight, large, medium, small, isFluid,]} onPress={onPress}>{title}</Button>
  )
}

const styles = StyleSheet.create({
  themeBtn: {
    backgroundColor: themeColors.btnColor,
    color: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 20,
    fontSize: 16,
    borderRadius: 30,
    fontWeight: '700'
  }
});

export default OrangeBtn;