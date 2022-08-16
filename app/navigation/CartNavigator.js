import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CartScreen from "../screens/importer/CartScreen";
import ConfirmOrderScreen from "../screens/importer/ConfirmOrderScreen";
import PaymentScreen from "../screens/importer/PaymentScreen";

import routes from "./routes";


const Stack = createNativeStackNavigator();

const CartNavigator = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={ routes.IMPORTER_CART }
        >
            <Stack.Screen name={ routes.IMPORTER_CART } component={CartScreen} />

            <Stack.Screen name={ routes.CONFIRM_ORDER } component={ConfirmOrderScreen} />

            <Stack.Screen name={ routes.PAYMENT } component={PaymentScreen} />
        </Stack.Navigator>
    )
}

export default CartNavigator;