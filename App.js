import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/reducer';

import SplashScreen from './components/splace-screen/splash-screen';
import LinearGradient from 'react-native-linear-gradient';
import AppNavigator from './nav';
import themeColors from './styles/theme-colors.json';
import { AfterLogin } from './after-login';
import { globalStyle } from './styles/global-style';
import { AccessToken } from './store/actions/access_token';


const store = createStore(rootReducer);


const App = () => {

  const [screen, setScreen] = useState(true);
  const [islogin, setIslogin] = useState(false);

  const userLogin = response => {
    setIslogin(response);
  }

  useEffect(() => {
    setTimeout(() => {
      setScreen(false);
      AccessToken();
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.MainScreen}>
        <LinearGradient style={globalStyle.wrapper} colors={[themeColors.color_1, themeColors.color_2]}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
            {screen ? <SplashScreen /> :
              <AfterLogin.Provider value={{ userLogin: userLogin, islogin: islogin }}>
                <AppNavigator />
              </AfterLogin.Provider>
            }
          </View>
        </LinearGradient>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  MainScreen: {
    height: '100%',
    width: '100%',
  },
});
export default App;