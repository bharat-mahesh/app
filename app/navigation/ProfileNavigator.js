import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HelpScreen from "../screens/HelpScreen";
import ProfileEditScreen from "../screens/ProfileEditScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Profile" component={ProfileScreen} />

            <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />

            <Stack.Screen name="Wallet" component={HelpScreen} />

            <Stack.Screen name="Rating" component={HelpScreen} />

            <Stack.Screen name="Help" component={HelpScreen} />
        </Stack.Navigator>
    )
}

export default ProfileNavigator;