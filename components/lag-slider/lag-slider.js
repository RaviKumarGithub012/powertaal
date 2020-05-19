import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import Button from 'react-native-button';
import { globalStyle } from '../../styles/global-style';
import themeColors from '../../styles/theme-colors.json';

const { width } = Dimensions.get('window');

const newHeight = width - 20;
const Item = 100 * 0.6;

const LagSlider = props => {

  const [toRotate, setToRotate] = useState(0);
  const [itemRotate, setItemRotate] = useState(0);
  const [isActive, setIsActive] = useState(0);
  const rotateValue = new Animated.Value(0);

  const rotateBox = value => {
    rotateValue.setValue(0);
    setToRotate(value);
  }

  useEffect(() => {
    Animated.timing(rotateValue,
      {
        toValue: 1,
        duration: 600,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start();
    if (toRotate >= 0) {
      setItemRotate(-Math.abs(toRotate));
    } else {
      setItemRotate(Math.abs(toRotate));
    }
  }, [toRotate, itemRotate]);

  const tranformStyle = {
    rotate: rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '' + toRotate + 'deg']
    })
  }

  const itemStyle = {
    rotate: rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '' + itemRotate + 'deg']
    })
  }


  return (
    <View style={globalStyle.wrapper}>

      <View style={[globalStyle.wrapper]}>
        {props.children}
      </View>

      <Animated.View style={[styles.slideWrapper, { transform: [tranformStyle] }]}>
        <View style={styles.innerBox}></View>
        <View style={[styles.icon, styles.icon_1]}>
          <Button onPress={() => {
            rotateBox(90);
            setIsActive(2);
          }}>
            <Animated.Text style={[styles.txt, { transform: [itemStyle, { scale: isActive === 2 ? 1 : 0.86 }] }]}>test 0.1</Animated.Text>
          </Button>
        </View>
        <View style={[styles.icon, styles.icon_2]}>
          <Button onPress={() => {
            rotateBox(45);
            setIsActive(1);
          }}>
            <Animated.Text style={[styles.txt, { transform: [itemStyle, { scale: isActive === 1 ? 1 : 0.86 }] }]}>test 0.2</Animated.Text>
          </Button>
        </View>
        <View style={[styles.icon, styles.icon_3]}>
          <Button onPress={() => {
            rotateBox(0);
            setIsActive(0);
          }}>
            <Animated.Text style={[styles.txt, { transform: [itemStyle, { scale: isActive === 0 ? 1 : 0.86 }] }]}>test 0.3</Animated.Text>
          </Button>
        </View>
        <View style={[styles.icon, styles.icon_4]}>
          <Button onPress={() => {
            rotateBox(-45);
            setIsActive(3);
          }}>
            <Animated.Text style={[styles.txt, { transform: [itemStyle, { scale: isActive === 3 ? 1 : 0.86 }] }]}>test 0.4</Animated.Text>
          </Button>
        </View>
        <View style={[styles.icon, styles.icon_5]}>
          <Button onPress={() => {
            rotateBox(-90);
            setIsActive(4);
          }}>
            <Animated.Text style={[styles.txt, { transform: [itemStyle, { scale: isActive === 4 ? 1 : 0.86 }] }]}>test 0.5</Animated.Text>
          </Button>
        </View>
        <View style={[styles.icon, styles.icon_6]}>
          <Button onPress={() => {
            rotateBox(225);
            setIsActive(5);
          }}>
            <Animated.Text style={[styles.txt, { transform: [itemStyle, { scale: isActive === 5 ? 1 : 0.86 }] }]}>test 0.6</Animated.Text>
          </Button>
        </View>
        <View style={[styles.icon, styles.icon_7]}>
          <Button onPress={() => {
            rotateBox(180);
            setIsActive(6);
          }}>
            <Animated.Text style={[styles.txt, { transform: [itemStyle, { scale: isActive === 6 ? 1 : 0.86 }] }]}>test 0.7</Animated.Text>
          </Button>
        </View>
        <View style={[styles.icon, styles.icon_8]}>
          <Button onPress={() => {
            rotateBox(135);
            setIsActive(7);
          }}>
            <Animated.Text style={[styles.txt, { transform: [itemStyle, { scale: isActive === 7 ? 1 : 0.89 }] }]}>test 0.8</Animated.Text>
          </Button>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  slideWrapper: {
    backgroundColor: '#fff',
    height: newHeight,
    borderRadius: newHeight / 2,
    width: newHeight,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    marginBottom: - ((width / 2) - 50)
  },
  innerBox: {
    position: 'absolute',
    height: newHeight,
    borderRadius: (newHeight) / 2,
    width: newHeight,
    backgroundColor: themeColors.color_1,
    transform: [{ scale: 0.6 }]
  },
  icon: {
    width: Item,
    height: Item,
    margin: -Item / 2,
    position: 'absolute',
    left: (newHeight / 2) + 2,
    top: (newHeight / 2) + 2
  },
  txt: {
    backgroundColor: 'red',
    width: Item,
    height: Item,
    borderRadius: Item / 2,
    left: 0,
    top: 0,
    paddingHorizontal: 6,
    paddingVertical: 15
  },
  icon_1: {
    transform: [{ rotate: '-45deg' }, { translateX: -((newHeight / 2) - (Item * 1.2)) }, { translateY: -((newHeight / 2) - (Item * 1.2)) }, { rotate: '45deg' }]
  },
  icon_2: {
    transform: [{ rotate: '0deg' }, { translateX: -((newHeight / 2) - (Item * 1.2)) }, { translateY: -((newHeight / 2) - (Item * 1.2)) }, { rotate: '-0deg' }]
  },
  icon_3: {
    transform: [{ rotate: '45deg' }, { translateX: -((newHeight / 2) - (Item * 1.2)) }, { translateY: -((newHeight / 2) - (Item * 1.2)) }, { rotate: '-45deg' }]
  },
  icon_4: {
    transform: [{ rotate: '90deg' }, { translateX: -((newHeight / 2) - (Item * 1.2)) }, { translateY: -((newHeight / 2) - (Item * 1.2)) }, { rotate: '-90deg' }]
  },
  icon_5: {
    transform: [{ rotate: '135deg' }, { translateX: -((newHeight / 2) - (Item * 1.2)) }, { translateY: -((newHeight / 2) - (Item * 1.2)) }, { rotate: '-135deg' }]
  },
  icon_6: {
    transform: [{ rotate: '180deg' }, { translateX: -((newHeight / 2) - (Item * 1.2)) }, { translateY: -((newHeight / 2) - (Item * 1.2)) }, { rotate: '-180deg' }]
  },
  icon_7: {
    transform: [{ rotate: '225deg' }, { translateX: -((newHeight / 2) - (Item * 1.2)) }, { translateY: -((newHeight / 2) - (Item * 1.2)) }, { rotate: '-225deg' }]
  },
  icon_8: {
    transform: [{ rotate: '270deg' }, { translateX: -((newHeight / 2) - (Item * 1.2)) }, { translateY: -((newHeight / 2) - (Item * 1.2)) }, { rotate: '-270deg' }]
  },
});

export default LagSlider;