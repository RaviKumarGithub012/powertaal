import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header/header';
import LinearGradient from 'react-native-linear-gradient';
import themeColors from '../../styles/theme-colors.json';
import { globalStyle } from '../../styles/global-style';

const Contact = () => {
  return (
    <LinearGradient style={globalStyle.wrapper} colors={[themeColors.color_1, themeColors.color_2]}>
      <View>
        <Header />
        <Text style={{color: '#fff', textAlign: 'center', marginTop: 80}}>Contact Us</Text>
      </View>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({});

export default Contact;