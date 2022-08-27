import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";

import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useState } from "react";

function App() {

  const userAuthenticated = useState(false);
  return (
    <NavigationContainer
        theme={navigationTheme}
    >
      {
        userAuthenticated
        ?
        (
          <AppNavigator />
        ) : (
          <AuthNavigator />
        )
      }
    </NavigationContainer>
  );
}

export default withAuthenticator(App) 