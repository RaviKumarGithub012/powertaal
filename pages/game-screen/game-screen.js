import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import Checkbox from 'react-native-modest-checkbox';
import Header from '../../components/header/header';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'react-native-button';
import themeColors from '../../styles/theme-colors.json';
import { globalStyle } from '../../styles/global-style';
import Volgende from '../volgende/volgende';


const GameScren = props => {

  const [check, setcheck] = useState(false);
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setScreen(true);
    }, 3500);
  }, []);

  if (screen) {
    return (
      <LinearGradient style={globalStyle.wrapper} colors={[themeColors.color_1, themeColors.color_2]}>
        <Header />
        <View style={[globalStyle.wrapper, globalStyle.topSpace]}>
          <ScrollView>
            <View style={styles.boxWrapper}>
              <View style={styles.sectionRow}>
                <View style={{ width: '28%' }}>
                  <Image source={require('../../static/images/Speaker.png')} style={{ resizeMode: 'contain', height: 20 }} />
                </View>
                <Text style={styles.counterNumber}>00:00:19</Text>
                <View>
                  <Checkbox
                    labelBefore={true}
                    label='Verbergen'
                    labelStyle={{ color: '#fff', fontSize: 12 }}
                    onChange={() => { setcheck(!check) }}
                    checked={check}
                    checkboxStyle={{ height: 15, width: 15 }}
                    uncheckedImage={require('../../static/images/uncheckbox.jpg')}
                    checkedImage={require('../../static/images/checkbox.jpg')}
                  />
                </View>
              </View>
              <Text style={styles.reSearch}>research</Text>
              <TextInput style={styles.reSearchInput} />
              <Text style={styles.druk}>Druk op [Enter]</Text>
              <View style={styles.progress}></View>
              <Button onPress={() => props.navigation.push('scoreboard')}>After Completing Game</Button>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    );
  } else {
    return <Volgende />
  }
}

const styles = StyleSheet.create({
  progress: {
    width: '100%',
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowOpacity: 0.85,
    shadowColor: '#fff',
    shadowRadius: 100,
    elevation: 5
  },
  druk: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginVertical: 10
  },
  reSearchInput: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 10,
    marginBottom: 20,
    textAlign: 'center'
  },
  reSearch: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    marginVertical: 10
  },
  counterNumber: {
    backgroundColor: '#193f9a',
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    padding: 10,
    borderRadius: 8
  },
  sectionRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  boxWrapper: {
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: 'column',
    backgroundColor: themeColors.color_1,
  }
});

export default GameScren;