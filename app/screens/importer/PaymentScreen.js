import { StyleSheet } from 'react-native';

import AppText from '../../components/ui/Text';
import ExcludeStatusBar from '../../components/ui/ExcludeStatusBar';
import Screen from '../../components/Screen';

const PaymentScreen = ( props ) => {
    return (
        <Screen style={styles.container}>
            <ExcludeStatusBar />
            <AppText>Welcome insde ImporterPayment Screen</AppText>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});

export default PaymentScreen;
