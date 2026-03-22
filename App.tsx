
import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import TypeScreen from './src/screens/TypeScreen';
import PuzzleDetailScreen from './src/screens/PuzzleDetailScreen';
import { ThemeProvider } from './src/theme/Theme';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Type: { typeId: string };
  Puzzle: { puzzleId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer theme={DarkTheme}>
        <StatusBar style="light" />
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Type" component={TypeScreen} />
          <Stack.Screen name="Puzzle" component={PuzzleDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
