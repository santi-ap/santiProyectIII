import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScene from 'AwesomeProject/src/scenes/home/index';
import ProfileScene from 'AwesomeProject/src/scenes/profiles/index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScene} options={{ title: "Welcome!" }} />
      <Stack.Screen name="Profile" component={ProfileScene} options={{ title: 'Your Age' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
