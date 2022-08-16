import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import CartNavigator from "./CartNavigator";
import HomeNavigator from "./HomeNavigator";
import OrderNavigator from "./OrderNavigator";
import ProfileNavigator from "./ProfileNavigator";

import colors from "../configs/colors";

import routes from "./routes";


const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    return(
        <Tab.Navigator
            screenOptions={{
                tabBarInactiveTintColor: colors.black,
                tabBarLabelStyle: {
                    fontSize: 14,
                },
                headerShown: false,
            }}
            initialRouteName={ routes.HOME }
        >
            <Tab.Screen
                name={ routes.HOME }
                component={HomeNavigator}
                options={{
                    tabBarIcon: ( { size, color } ) => <Ionicons name="search" size={size} color={color} />
                }}
            />
            <Tab.Screen
                name={ routes.CART }
                component={CartNavigator}
                options={{
                    tabBarIcon: ( { size, color } ) => <MaterialCommunityIcons name="cart-outline" size={size} color={color} />
                }}
            />
            <Tab.Screen
                name={ routes.ORDERS }
                component={OrderNavigator}
                options={{
                    tabBarIcon: ( { size, color } ) => <MaterialCommunityIcons name="dropbox" size={size} color={color} />
                }}
            />
            <Tab.Screen
                name={ routes.ACCOUNT }
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ( { size, color } ) => <MaterialCommunityIcons name="account-outline" size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}

export default AppNavigator;