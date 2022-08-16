import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoryScreen from "../screens/importer/CategoryScreen";
import CategoryItemListingsScreen from "../screens/importer/CategoryItemListingsScreen";

import routes from "./routes";


const Stack = createNativeStackNavigator();

const HomeNavigator = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={ routes.CATEGORY }
        >
            <Stack.Screen name={ routes.CATEGORY } component={CategoryScreen} />

            <Stack.Screen
                name={ routes.CATEGORY_ITEM_LISTINGS }
                component={CategoryItemListingsScreen}
                // options={{animation: "slide_from_right"}}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator;