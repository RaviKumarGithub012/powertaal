import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import Checkbox from 'react-native-modest-checkbox';
import Header from '../../components/header/header';
import LinearGradient from 'react-native-linear-gradient';
import themeColors from '../../styles/theme-colors.json';
import { globalStyle } from '../../styles/global-style';
import OrangeBtn from '../../components/theme-btn/orange-btn';

const LerenHome = props => {
  const [check, setcheck] = useState(false);
  return (
    <LinearGradient style={globalStyle.wrapper} colors={[themeColors.color_1, themeColors.color_2]}>
      <Header />
      <View style={[globalStyle.wrapper, globalStyle.topSpace]}>
        <ScrollView>
          <View style={styles.boxWrapper}>
            <View style={styles.section}>
              <View style={[styles.rowSectoin, styles.marginDown]}>
                <Text style={styles.inputLabel}>English</Text>
                <Image source={require('../../static/images/Speaker.png')} style={styles.soundIcon} />
              </View>
              <View style={styles.rowSectoin}>
                <TextInput placeholder='Human' style={styles.lagInput} placeholderTextColor='#000' />
              </View>
            </View>
            <View style={styles.section}>
              <View style={[styles.rowSectoin, styles.marginDown]}>
                <Text style={styles.inputLabel}>Neaderlands</Text>
                <Image source={require('../../static/images/Speaker.png')} style={styles.soundIcon} />
              </View>
              <View style={styles.rowSectoin}>
                <TextInput placeholder='Human' style={styles.lagInput} placeholderTextColor='#000' />
              </View>
            </View>
            <View>
              <View style={styles.progress}>
                <Image source={require('../../static/images/progress.png')} style={styles.progressBar} />
              </View>
              <View style={{ width: '45%' }}>
                <Checkbox
                  label='Automtatisch herhalen'
                  labelStyle={styles.checkbox}
                  onChange={() => { setcheck(!check) }}
                  checked={check}
                  checkboxStyle={{ height: 15, width: 15 }}
                  uncheckedImage={require('../../static/images/uncheckbox.jpg')}
                  checkedImage={require('../../static/images/checkbox.jpg')}
                />
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <OrangeBtn size="small" toLeft={true} title="Stopen" onPress={() => props.navigation.goBack()} />
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    color: '#fff',
    fontSize: 12
  },
  progressBar: {
    marginLeft: -2,
    width: '60%',
    height: 15
  },
  progress: {
    width: '100%',
    marginRight: 10,
    marginVertical: 20,
    height: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden'
  },
  marginDown: {
    marginBottom: 10
  },
  inputLabel: {
    color: '#fff',
  },
  soundIcon: {
    resizeMode: 'contain',
    height: 20,
    marginLeft: -5
  },
  lagInput: {
    backgroundColor: '#01baf3',
    width: '100%',
    padding: 5,
    height: 30,
    borderRadius: 4,
    marginRight: 0
  },
  rowSectoin: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  section: {
    marginTop: 20
  },
  boxWrapper: {
    backgroundColor: '#193f9a',
    padding: 15,
    borderRadius: 8
  },
  start: {
    width: 140,
    color: '#fff',
    marginBottom: 20,
    backgroundColor: '#ff7101',
    paddingVertical: 4,
    fontSize: 14,
    borderRadius: 30,
    fontWeight: '700',
  },
});

export default LerenHome;