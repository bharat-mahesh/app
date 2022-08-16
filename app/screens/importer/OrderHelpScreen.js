import { View, StyleSheet } from 'react-native';

import AppText from '../../components/ui/Text';
import Screen from '../../components/Screen';
import ExcludeStatusBar from '../../components/ui/ExcludeStatusBar';

const OrderHelpScreen = ( props ) => {
    return (
        <Screen style={styles.container}>
            <ExcludeStatusBar />
            <AppText>This Screen will have ways to contact for help if needed</AppText>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});

export default OrderHelpScreen;
