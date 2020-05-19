import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LerenHome from './leren-home';
import Overtypen from '../overtypen/overtypen';
import themeColors from '../../styles/theme-colors.json';
import Contact from '../contact/contact';

const Tab = createBottomTabNavigator();

const Leren = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      inactiveTintColor: '#fff',
      activeTintColor: themeColors.btnColor,
      style: {
        backgroundColor: themeColors.color_2,
        height: 70
      },
      labelStyle: {
        fontSize: 13,
        marginBottom: 10
      }
    }}>
      <Tab.Screen options={{
        tabBarIcon: ({ focused }) => {
          const image = focused ? require('../../static/images/home-active.png') : require('../../static/images/home.png');
          return <Image source={image} style={styles.icon} />
        }
      }} name="Home" component={LerenHome} />

      <Tab.Screen options={{
        tabBarLabel: 'Over Ons',
        tabBarIcon: ({ focused }) => {
          const image = focused ? require('../../static/images/info-active.png') : require('../../static/images/info.png');
          return <Image source={image} style={styles.icon} />
        }
      }} name="overtypen" component={Overtypen} />

      <Tab.Screen options={{
        tabBarLabel: 'Contact',
        tabBarIcon: ({ focused }) => {
          const image = focused ? require('../../static/images/mail-active.png') : require('../../static/images/mail.png');
          return <Image source={image} style={styles.icon} />
        }
      }} name="contact" component={Contact} />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain',
    marginTop: 10,
    width: 26
  }
});

export default Leren;