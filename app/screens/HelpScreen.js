import { View, StyleSheet } from 'react-native';

import AppText from '../components/Text';
import Screen from '../components/Screen';

const HelpScreen = ( props ) => {
    return (
        <Screen style={styles.container}>
            <AppText>This Section in Under Development</AppText>
            <AppText>Contact Us: 1111 1111</AppText>
            <AppText>Email Us: teamMerci@somaiya.edu</AppText>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
});

export default HelpScreen;
