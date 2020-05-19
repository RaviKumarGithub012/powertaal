import React, { Fragment } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/header/header';
import LinearGradient from 'react-native-linear-gradient';
import OrangeBtn from '../../components/theme-btn/orange-btn';
import { globalStyle } from '../../styles/global-style';
import themeColors from '../../styles/theme-colors.json';


const Overtypen = props => {
  return (
    <LinearGradient style={globalStyle.wrapper} colors={[themeColors.color_1, themeColors.color_2]}>
      <Fragment>
        <Header />
        <View style={[globalStyle.wrapper, globalStyle.topSpace]}>
          <ScrollView>
            <View>
              <Text style={styles.heading}>Vul U naam in</Text>
              <View style={styles.boxWrapper}>
                <Text style={styles.heading}>Naam</Text>
                <TextInput style={styles.nameInput} placeholder='Username' placeholderTextColor='#dfdfdf' />
                <OrangeBtn center={true} title="Volgende..." onPress={() => props.navigation.navigate('gamescreen')} size="medium" />
              </View>
            </View>
          </ScrollView>
        </View>
      </Fragment>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  nameInput: {
    textAlign: 'center',
    backgroundColor: '#01baf3',
    padding: 5,
    height: 30,
    borderRadius: 4,
    marginRight: 0,
    marginBottom: 30
  },
  heading: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginBottom: 20
  },
  boxWrapper: {
    backgroundColor: themeColors.boxBlue,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  heading: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginBottom: 30
  },
});

export default Overtypen;