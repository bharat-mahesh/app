import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HelpScreen from "../unusedFiles/unusedScreens/HelpScreen";
import ProfileEditScreen from "../unusedFiles/unusedScreens/ProfileEditScreen";
import ProfileScreen from "../screens/importer/ProfileScreen";

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