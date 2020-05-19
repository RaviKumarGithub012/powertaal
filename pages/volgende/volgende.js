import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const Volgende = () => {
  const [loadingText, setLoadingText] = useState('Lezen');
  const changeBannerText = () => {
    let count = 0;
    const textRound = setInterval(() => {
      count++;
      count === 1 ? setLoadingText('Luisteren') : null;
      count === 2 ? setLoadingText('Schrijven') : null;

      count === 2 ? clearInterval(textRound) : null;
    }, 1000);
  }

  useEffect(() => {
    changeBannerText();
  }, []);

  return (
    <View>
      <ImageBackground source={require('../../static/images/keybord.jpg')} style={styles.bgImage}>
        <Text style={styles.mdText}>
          {loadingText}
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  mdText: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: '#193f9a',
    color: '#fff',
    fontSize: 20,
  },
});

export default Volgende;