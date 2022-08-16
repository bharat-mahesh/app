
//Navigation is not yet understood by me so this file is incomplete

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import HelpScreen from "../screens/HelpScreen";
import MapScreen from "../screens/MapScreen";

import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {

    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={SearchScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Map" component={MapScreen} />
            <Drawer.Screen name="Edit Personal Info" component={HelpScreen} />
        </Drawer.Navigator>
    );
};

export default AppDrawer;