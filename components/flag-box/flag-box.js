import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from 'react-native-button';
import UserBtn from '../theme-btn/user-btn';
import themeColors from '../../styles/theme-colors.json';
import { useNavigation } from '@react-navigation/native';


const FlagBox = props => {
  const navigate = useNavigation();
  return (
    <View>
      <View style={styles.sectionRow}>
        <View style={[styles.col, { width: '45%' }]}>
          <View style={[styles.flag, { backgroundColor: themeColors.boxBlue }]}>
            <Image style={styles.flagImg} source={require('../../static/images/nederlands.png')} />
            <Text style={styles.flagText}>Nederlands</Text>
          </View>
          <UserBtn title="Toevoegen" bgColor={themeColors.userColor_1} onPress={() => navigate.navigate('toevoegen')} />
          <UserBtn title="Leren" bgColor={themeColors.userColor_2} onPress={() => navigate.navigate('leren')} />
        </View>

        {props.txt &&
          <View style={styles.txtCol}>
            <Button style={styles.txtMedium} onPress={() => navigate.navigate('textfile')}>TXT</Button>
          </View>
        }

        <View style={[styles.col, { width: '45%' }]}>

          <View style={[styles.flag, { backgroundColor: themeColors.redFlag }]}>
            <Image style={styles.flagImg} source={require('../../static/images/engles.png')} />
            <Text style={styles.flagText}>Nederlands</Text>
          </View>
          <UserBtn title="Mijn lijst" bgColor={themeColors.userColor_3} onPress={() => navigate.navigate('mijnLijst')} />
          <UserBtn title="Overtypen" onPress={() => navigate.navigate('overtypen')} bgColor={themeColors.userColor_4} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtMedium: {
    backgroundColor: themeColors.boxBlue,
    color: '#fff',
    width: 38,
    fontSize: 11,
    fontWeight: '700',
    borderRadius: 38 / 2,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  flagImg: {
    width: '100%',
    height: 60,
    resizeMode: 'contain'
  },
  col: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  txtCol: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 25
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flagHeading: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    marginVertical: 15,
    fontWeight: '700',
  },
  flagText: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 5,
    color: '#fff',
  },
  flag: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default FlagBox;