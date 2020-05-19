import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AfterLogin } from '../../after-login';
import themeColors from '../../styles/theme-colors.json';
import { globalStyle } from '../../styles/global-style';
import BlueBtn from '../../components/theme-btn/blue-btn';
import OrangeBtn from '../../components/theme-btn/orange-btn';



const Login = props => {

  const { userLogin } = useContext(AfterLogin);

  const setLogin = () => {
    userLogin(true);
    props.navigation.navigate('startnu');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient style={globalStyle.wrapper} colors={[themeColors.color_1, themeColors.color_2]}>
        <View style={styles.mainWrapper}>
          <View>
            <ScrollView>
              <View style={styles.loginWrapper}>
                <Text style={styles.loginHeading}>Vul je e-mail in en wachtwood</Text>
                <TextInput style={[styles.loginInput, { marginBottom: 25 }]} value='rajeev@gmail.com' />
                <TextInput secureTextEntry={true} style={styles.loginInput} value='12344567' />
                <View style={styles.sectionRow}>
                  <BlueBtn title="Registreren" onPress={() => { props.navigation.goBack() }} size="small" />
                  <OrangeBtn title="InLoggen" onPress={setLogin} size="small" />
                </View>
                <Text style={{ marginLeft: 'auto', marginTop: 10, }}>wachtwoord vergeten</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  sectionRow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%'
  },
  loginHeading: {
    color: '#074C7A',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 20,
  },
  loginInput: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 20,
  },
  loginWrapper: {
    borderRadius: 6,
    paddingHorizontal: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 20,
    backgroundColor: '#01baf3',
  }
});

export default Login;