import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/home-screen';
import StartNu from './pages/start-nu';
import Leren from './pages/leren/leren';
import Overtypen from './pages/overtypen/overtypen';
import GameScren from './pages/game-screen/game-screen';
import ScoreBoard from './pages/score-board/score-board';
import Login from './pages/login/login';
import UserDashboard from './pages/user-dashboard/user-dashboard';
import Toevoegen from './pages/toevoegen/toevoegen';
import MijnList from './pages/mijn-lijst/mijn-lijst';
import TextFile from './pages/text';



const Stack = createStackNavigator();

const AppNavigator = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }} initialRouteName="home">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="startnu" component={StartNu} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="leren" component={Leren} />
        <Stack.Screen name="gamescreen" component={GameScren} />
        <Stack.Screen name="overtypen" component={Overtypen} />
        <Stack.Screen name="scoreboard" component={ScoreBoard} />
        <Stack.Screen name="userdashboard" component={UserDashboard} />
        <Stack.Screen name="toevoegen" component={Toevoegen} />
        <Stack.Screen name="mijnLijst" component={MijnList} />
        <Stack.Screen name="textfile" component={TextFile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;