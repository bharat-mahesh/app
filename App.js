import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from './app/navigation/navigationTheme';

import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppDrawer from "./app/navigation/AppDrawer";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme} >
        <AppDrawer />
    </NavigationContainer>
  );
}