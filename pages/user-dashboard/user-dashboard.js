import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/header/header';
import FlagBox from '../../components/flag-box/flag-box';
import LinearGradient from 'react-native-linear-gradient';
import themeColors from '../../styles/theme-colors.json';
import { globalStyle } from '../../styles/global-style';

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: ''
    }
  }

  onLayout = (e) => {
    let layoutHeight = e.nativeEvent.layout.height;
    this.setState({ height: layoutHeight });
  }
  render() {
    return (
      <LinearGradient style={globalStyle.wrapper} colors={[themeColors.color_1, themeColors.color_2]}>
        <Header />
        <View style={styles.dashboard} onLayout={this.onLayout}>
          <ScrollView>
            <Fragment>
              <View style={styles.userControl}>
                <View style={styles.boxWrapper}>
                  <Text style={styles.flagHeading}>Woordenboek programma</Text>
                  <FlagBox txt={true} />
                </View>
                <View>
                  <View style={styles.divider}></View>
                </View>
                <View style={styles.boxWrapper}>
                  <FlagBox />
                </View>
              </View>

              <View style={styles.userControl}>
                <View style={styles.boxWrapper}>
                  <Text style={styles.flagHeading}>Woordenboek programma</Text>
                  <FlagBox />
                </View>
                <View>
                  <View style={styles.divider}></View>
                </View>
                <View style={styles.boxWrapper}>
                  <FlagBox />
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
  boxWrapper: {
    borderRadius: 10,
    backgroundColor: '#01baf3'
  },
  divider: {
    height: 30,
    backgroundColor: '#01baf3',
    marginHorizontal: 80,
    marginVertical: -2
  },
  flagHeading: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    marginTop: 12,
    fontWeight: '700',
  },
  layout: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  dashboard: {
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  userControl: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 10
  },
});

export default UserDashboard;