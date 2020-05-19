import React from 'react';
import { Image, StyleSheet, ImageBackground } from 'react-native';



const SplashScreen = () => {
  return (
    <>
      <ImageBackground source={require('../../static/images/splash-bg.png')} style={styles.splace}>
        <Image style={styles.logo} source={require('../../static/images/logo.png')} />
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  splace: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  logo: {
    width: '100%',
    height: 'auto',
    resizeMode: 'contain',
    marginBottom: 100,
  },
});

export default SplashScreen;
