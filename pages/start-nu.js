import React, { useContext } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import LagSlider from '../components/lag-slider/lag-slider';
import Header from '../components/header/header';
import LinearGradient from 'react-native-linear-gradient';
import { AfterLogin } from '../after-login';
import themeColors from '../styles/theme-colors.json';
import { globalStyle } from '../styles/global-style';
import OrangeBtn from '../components/theme-btn/orange-btn';
import BorderBtn from '../components/theme-btn/border-btn';


const StartNu = props => {
  const { islogin } = useContext(AfterLogin);
  return (
    <LinearGradient style={globalStyle.wrapper} colors={[themeColors.color_1, themeColors.color_2]}>
      <Header />
      <LagSlider>
        <View style={styles.startWrapper}>
          <ScrollView style={{ paddingHorizontal: 60 }}>
            <View style={styles.btnSection}>
              <OrangeBtn fluid={true} size="large" title="Leren" onPress={() => { props.navigation.push('leren') }} />
              <View style={{marginVertical: 30}}>
                <BorderBtn title="Overtypen" onPress={() => { props.navigation.push('overtypen') }} />
              </View>
              {islogin && <BorderBtn title="Mijn Profile" onPress={() => { props.navigation.push('userdashboard') }} />}
              <Text style={styles.heading}>Welke taalcombinatie kiest u?</Text>
              <Text style={styles.subHeading}>klik op een van de onderstaande knoppen</Text>
            </View>
          </ScrollView>
        </View>
      </LagSlider>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  subHeading: {
    textAlign: 'center',
    color: '#fff',
    marginVertical: 5
  },
  heading: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginTop: '20%',
    marginBottom: 10
  },
  btnSection: {
    marginTop: 50,
  },
  startWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
});

export default StartNu;