import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/header/header';
import DataRow from './data-row';
import LinearGradient from 'react-native-linear-gradient';
import themeColors from '../../styles/theme-colors.json';
import { globalStyle } from '../../styles/global-style';
import BlueBtn from '../../components/theme-btn/blue-btn';


class ScoreBoard extends Component {
  render() {
    return (
      <LinearGradient style={globalStyle.wrapper} colors={[themeColors.color_1, themeColors.color_2]}>
        <Header />
        <View style={[globalStyle.wrapper, globalStyle.topSpace, {marginBottom: 30}]}>
          <ScrollView>
            <Fragment>
              <View style={styles.tableWrapper}>
                <Text style={styles.tableHeading}>SCOREBOARD</Text>
                <View style={{ flex: 1 }}>
                  <ScrollView>
                    <Fragment>
                      <DataRow rowBg='#ff7101' />
                      <DataRow />
                    </Fragment>
                  </ScrollView>
                </View>
                <View style={styles.buttonBox}>
                  <View style={{ marginRight: 20 }}>
                    <BlueBtn onPress={() => this.props.navigation.navigate('home')} title="Home" />
                  </View>
                  <BlueBtn onPress={() => this.props.navigation.navigate('gamescreen')} title="Opnieuw" theme="orange" color="dark" />
                </View>
              </View>
            </Fragment>
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  buttonBox: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'center'
  },
  tableWrapper: {
    borderWidth: 1,
    borderColor: '#0671B6',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  tableHeading: {
    fontSize: 17,
    fontWeight: '600',
    backgroundColor: '#0671B6',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: 30,
  }
});

export default ScoreBoard;