import React, { useState } from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';

const Footer = props => {
  const [flink, setflink] = useState(null);
  return (
    <View style={{ backgroundColor: '#281a7b', paddingHorizontal: 30, paddingTop: 10, paddingBottom: 5, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      <TouchableHighlight onPress={() => {
        setflink(0);
        props.navigation.navigate('Home')
      }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={flink == 0 ? require('../../static/images/home-active.png') : require('../../static/images/home.png')} style={{ resizeMode: 'contain', height: 25, marginTop: 2 }} />
          <Text style={{ color: flink == 0 ? '#ff7101' : '#fff' }}>Home</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {
        setflink(1);
        props.navigation.navigate('Overtypen')
      }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={flink == 1 ? require('../../static/images/info-active.png') : require('../../static/images/info.png')} style={{ resizeMode: 'contain', height: 25, marginTop: 2 }} />
          <Text style={{ color: flink == 1 ? '#ff7101' : '#fff' }}>Over Ons</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => { setflink(2); }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={flink == 2 ? require('../../static/images/mail-active.png') : require('../../static/images/mail.png')} style={{ resizeMode: 'contain', height: 20, marginBottom: 3, marginTop: 2 }} />
          <Text style={{ color: flink == 2 ? '#ff7101' : '#fff' }}>Contact</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default Footer;