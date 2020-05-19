import React from 'react';
import { StyleSheet } from 'react-native';
import Button from 'react-native-button';

const UserBtn = ({ title, onPress, bgColor }) => {
  return (
    <Button style={[styles.themeBtn, { backgroundColor: bgColor }]} onPress={onPress}>{title}</Button>
  )
}

const styles = StyleSheet.create({
  themeBtn: {
    color: '#fff',
    padding: 4,
    fontWeight: '700',
    fontSize: 13,
    borderRadius: 20,
    marginTop: 15
  },
});

export default UserBtn;