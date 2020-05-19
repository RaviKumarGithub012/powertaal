import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TableRow from './table-row';
import OrangeBtn from '../theme-btn/orange-btn';


class SelectWords extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.boxWrapper}>
          <Text style={styles.panelHeading}>Selected Words</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Text style={styles.addedCol}>Test</Text>
            <Text style={styles.addedCol}>Fine</Text>
            <Text style={styles.addedCol}>agressie</Text>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <OrangeBtn center={true} onPress={() => this.props.navigation.goBack()} title="Leegmaken" size="small" />
          </View>
        </View>
        <View style={[styles.boxWrapper], { marginTop: 15 }}>
          <Text style={styles.panelHeading}>NEDERLANDS NEDERLANDS</Text>
          <ScrollView style={[styles.scrollHeight, { paddingVertical: 6, paddingHorizontal: 0 }]}>
            <TableRow />
          </ScrollView>
          <View style={styles.bottomRow}>
            <OrangeBtn center={true} onPress={() => this.props.navigation.goBack()} title="Leegmaken" size="small" />
            <View style={{ marginLeft: 15 }}>
              <OrangeBtn center={true} onPress={() => this.props.navigation.goBack()} title="Alles wissen" size="small" />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  boxWrapper: {
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderColor: '#ddd'
  },
  panelHeading: {
    backgroundColor: '#01baf3',
    color: '#fff',
    paddingVertical: 5,
    textAlign: 'center',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  addedCol: {
    width: '33.33%',
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    paddingVertical: 5,
    borderLeftWidth: 0,
  },
  selectCol: { width: '40%' },
  icon: { width: '10%' },
  scrollHeight: {
    maxHeight: 95,
    padding: 6
  },
  start: {
    width: 120,
    color: '#fff',
    backgroundColor: '#ff7101',
    paddingVertical: 5,
    fontSize: 14,
    borderRadius: 30,
    fontWeight: '700',
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export default SelectWords;