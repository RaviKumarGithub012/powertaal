import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Image style={styles.logo} source={require('../../static/images/logo-in.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icons: {
    color: '#fff',
  },
  logo: {
    resizeMode: 'contain',
    height: 50,
  },
});

export default Header;