import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class DataRow extends Component {
  render() {
    return (
      <View style={[styles.rowFlex, {backgroundColor: this.props.rowBg}]}>
        <Text style={styles.cell}>1</Text>
        <Text style={[styles.cell, styles.cellLarge]}>Rajeev</Text>
        <Text style={[styles.cell, styles.cellLarge]}>31/10/2019</Text>
        <Text style={[styles.cell, {borderRightWidth: 0}]}>138</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowFlex: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  cell: {
    borderRightWidth: 2,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  cellLarge: {
    flexGrow: 2
  }
});

export default DataRow;