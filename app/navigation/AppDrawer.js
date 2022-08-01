import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';

import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
                <Drawer.Screen name="Home" component={SearchScreen} />
                <Drawer.Screen name="Profile" component={ProfileScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default AppDrawer;