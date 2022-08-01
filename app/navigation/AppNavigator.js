import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import ProfileNavigator from "./ProfileNavigator";

import MapScreen from "../screens/MapScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";

import colors from "../configs/colors";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    return(
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: colors.primary,
                tabBarActiveTintColor: colors.white,
                tabBarInactiveBackgroundColor: colors.light,
                tabBarInactiveTintColor: colors.black,
                tabBarLabelStyle: {
                    fontSize: 14,
                },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={SearchScreen}
                options={{
                    tabBarIcon: ( { size, color } ) => <Ionicons name="search" size={size} color={color} />
                }}
            />
            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                    tabBarIcon: ( { size, color } ) => <MaterialCommunityIcons name="map-marker-radius-outline" size={size} color={color} />
                }}
            />
            <Tab.Screen
                name="Accounts"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ( { size, color } ) => <MaterialCommunityIcons name="account" size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}

export default AppNavigator;