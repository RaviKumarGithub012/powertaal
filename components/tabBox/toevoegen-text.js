import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import OrangeBtn from '../theme-btn/orange-btn';
import BorderBtn from '../theme-btn/border-btn';

class ToevoegenText extends Component {
  render() {
    return (
      <>
        <Text style={styles.inputLabel}>Nederlands</Text>
        <TextInput multiline={true} numberOfLines={4} style={styles.input} placeholder='Nederlands' />

        <View style={styles.botttomButton}>
          <OrangeBtn title="Toevoegen" size="small" onPress={() => this.props.navigation.goBack()} />
          <View style={{marginLeft: 15}}>
            <BorderBtn title="Gereed" onPress={() => this.props.navigation.goBack()} size="small" />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  botttomButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 15,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    height: 100,
    textAlignVertical: 'top',
  },
  inputLabel: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 22,
    marginVertical: 5,
  },
  label: {
    fontWeight: '700'
  },
});


export default ToevoegenText;