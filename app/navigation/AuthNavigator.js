import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import WelcomeScreen from "../screens/auth/WelcomeScreen";

import routes from "./routes";


const Stack = createNativeStackNavigator();

const AuthNavigator = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={ routes.WELCOME }
        >
            <Stack.Screen name={ routes.WELCOME } component={WelcomeScreen} />

            <Stack.Screen name={ routes.LOGIN } component={LoginScreen} />

            <Stack.Screen name={ routes.REGISTER } component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigator;