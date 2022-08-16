import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OrderDetailsScreen from "../screens/OrderDetailsScreen";
import OrderHelpScreen from "../screens/OrderHelpScreen";
import OrderScreen from "../screens/importer/OrderScreen";

import routes from "./routes";


const Stack = createNativeStackNavigator();

const OrderNavigator = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={ routes.ORDERS_LISTING }
        >
            <Stack.Screen name={ routes.ORDERS_LISTING } component={OrderScreen} />

            <Stack.Screen name={ routes.ORDER_DETAILS } component={OrderDetailsScreen} />

            <Stack.Screen name={ routes.ORDER_HELP } component={OrderHelpScreen} />
        </Stack.Navigator>
    )
}

export default OrderNavigator;