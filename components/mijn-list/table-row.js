import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const TableRow = () => {
  return (
    <View style={styles.sectionRow}>
      <View style={[styles.addedCol, styles.icon]}>
        <Image style={styles.imgIcon} source={require('../../static/images/add-more.png')} />
      </View>
      <Text style={[styles.addedCol, styles.selectCol]}>Fine</Text>
      <View style={[styles.addedCol, styles.icon]}>
      <Image style={styles.imgIcon} source={require('../../static/images/delete.png')} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  imgIcon: {
    resizeMode: 'contain',
    width: 18,
    height: 18,
    marginLeft: 'auto',
    marginRight: 'auto',
   },
  sectionRow: {
    flexDirection: 'row',
  },
  addedCol: {
    width: '33.33%',
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    paddingVertical: 5,
    borderLeftWidth: 0,
  },
  selectCol: { width: '80%', },
  icon: { width: '10%', },
});

export default TableRow;