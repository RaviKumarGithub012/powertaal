import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Checkbox from 'react-native-modest-checkbox';
import Header from '../components/header/header';
import LinearGradient from 'react-native-linear-gradient';
import themeColors from '../styles/theme-colors.json';
import { globalStyle } from '../styles/global-style';
import OrangeBtn from '../components/theme-btn/orange-btn';


class TextFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      rangeLow: 0,
      rangehigh: 100,
    }
  }

  render() {
    const { check, rangeLow, rangehigh } = this.state;
    return (
      <>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <LinearGradient style={globalStyle.wrapper} colors={[themeColors.color_1, themeColors.color_2]}>
            <Header />
            <View style={styles.mainWrapper}>
              <ScrollView>
                <View style={styles.mdWrapper}>
                  <Text style={styles.tab}>Text</Text>
                  <View style={styles.sectionRow}>
                    <Text style={styles.heading}>Nederlands</Text>
                    <Image style={styles.soundIcon} source={require('../static/images/Speaker.png')} />
                  </View>
                  <TextInput textAlignVertical='top' multiline={true} numberOfLines={4} style={styles.textarea} placeholder='Nederlands' />
                  <View style={styles.sectionRow}>
                    <Text style={styles.heading}>Nederlands</Text>
                    <Image style={styles.soundIcon} source={require('../static/images/Speaker.png')} />
                  </View>
                  <TextInput textAlignVertical='top' multiline={true} numberOfLines={4} style={styles.textarea} placeholder='Nederlands' />
                  <View style={styles.progress}></View>
                  <Checkbox
                    label='Automtatisch herhalen'
                    labelStyle={{ color: '#fff', fontSize: 12 }}
                    onChange={() => {
                      this.setState({ check: !check });
                    }}
                    checked={check}
                    checkboxStyle={{ height: 15, width: 15 }}
                    uncheckedImage={require('../static/images/uncheckbox.jpg')}
                    checkedImage={require('../static/images/checkbox.jpg')}
                  />
                  <View style={{ paddingBottom: 10 }}>
                    <OrangeBtn toRight={true} title="Stoppen" onPress={() => this.props.navigation.navigate('home')} size="small" />
                  </View>
                </View>
              </ScrollView>
            </View>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    marginTop: 50
  },
  progress: {
    marginRight: 10,
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#ddd',
    height: 12,
    borderRadius: 10
  },
  heading: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700'
  },
  soundIcon: {
    resizeMode: 'contain',
    width: 20,
    marginLeft: 5
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textarea: {
    marginRight: 12,
    width: '100%',
    backgroundColor: '#fff'
  },
  tab: {
    backgroundColor: '#01baf3',
    color: '#fff',
    marginTop: -30,
    width: 50,
    textAlign: 'center',
    paddingVertical: 10,
    marginLeft: -20,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  start: {
    color: '#fff',
    backgroundColor: '#ff7101',
    paddingVertical: 4,
    paddingHorizontal: 20,
    fontSize: 14,
    marginBottom: 6,
    borderRadius: 30,
    fontWeight: '600',
    borderWidth: 1,
    borderColor: '#fff',
  },
  mdWrapper: {
    backgroundColor: '#01baf3',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    marginTop: 40,
  }
});

export default TextFile;