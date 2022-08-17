import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FAQsScreen from "../screens/importer/FAQsScreen";
import ProfileEditScreen from "../unusedFiles/unusedScreens/ProfileEditScreen";
import ProfileScreen from "../screens/importer/ProfileScreen";

import routes from "./routes";


const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={ routes.PROFILE }
        >
            <Stack.Screen name={ routes.PROFILE } component={ProfileScreen} />

            <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />

            <Stack.Screen name={ routes.FAQ_S } component={FAQsScreen} />

            <Stack.Screen name="Rating" component={FAQsScreen} />

            <Stack.Screen name="Help" component={FAQsScreen} />
        </Stack.Navigator>
    )
}

export default ProfileNavigator;