import { StyleSheet, View  } from 'react-native';

import AppText from '../components/Text';
import Screen from '../components/Screen';

const HelpScreen = ( props ) => {
    return (
        <Screen style={styles.container}>
            <AppText>Nirav ko contact karo</AppText>

            <AppText>Contact Us: +91 89868 30255</AppText>
            <AppText>Email Us: TeamMerci.SIH@gmail.edu</AppText>
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
