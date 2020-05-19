import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import LagSlider from '../components/lag-slider/lag-slider';
import { AfterLogin } from '../after-login';
import { globalStyle } from '../styles/global-style';
import OrangeBtn from '../components/theme-btn/orange-btn';
import BorderBtn from '../components/theme-btn/border-btn';


const HomeScreen = props => {
  const { userLogin } = useContext(AfterLogin);
  const logOut = () => {
    userLogin(false);
  }

  return (
    <>
      <View style={[globalStyle.wrapper, styles.screenWrapper]}>
        <LagSlider>
          <View style={{ flex: 1, width: '100%', }}>
            <ScrollView style={{ paddingHorizontal: 60 }}>
              <View style={{ marginTop: 50 }}>
                <Text style={styles.CenterTxt}>STANDAARD:</Text>
                <Text style={styles.CenterTxt}>HELEMAAL GRATIS EN ZONDER {'\n'} REGISTRATIE.</Text>
                <View style={styles.bottomSpace}>
                  <OrangeBtn title="Start nu" size="medium" onPress={logOut} />
                </View>
              </View>
              <View>
                <Text style={styles.CenterTxt}>GEVORDERD:</Text>
                <Text style={styles.CenterTxt}>UW EIGEN ACCOUNT VOOR MAAR</Text>
                <Text style={styles.CenterTxt}>E 7,99 PER JAAR.</Text>
                <View style={styles.bottomSpace}>
                  <BorderBtn size="medium" title="Inloggen" onPress={() => props.navigation.push('login')} />
                </View>
              </View>
            </ScrollView>
          </View>
        </LagSlider>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottomSpace: {
    marginVertical: 30
  },
  screenWrapper: {
    position: 'relative',
    flexDirection: 'column'
  },
  CenterTxt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 19,
    fontWeight: "600",
    lineHeight: 28,
  },
});

export default HomeScreen;