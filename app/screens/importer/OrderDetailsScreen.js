import { View, StyleSheet } from 'react-native';

import AppText from '../../components/ui/Text';
import Screen from '../../components/Screen';
import ExcludeStatusBar from '../../components/ui/ExcludeStatusBar';

const OrderDetailsScreen = ( props ) => {
    
    return (
        <Screen style={styles.container}>
            <ExcludeStatusBar />
            
            <AppText>This Screen will show all the order details like: order status, about the farm, payment details, date of order,                (Transport route?????)</AppText>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});

export default OrderDetailsScreen;
