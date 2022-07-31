import { View, StyleSheet } from 'react-native';

import Close from './Close';
import AppText from './Text';

const ScreenHeader = ( { headerStyles, title, titleStyles, onPress } ) => {
    return (
        <View style={[styles.topSection, headerStyles]}>
            <Close style={styles.close} onPress={onPress} />

            <AppText style={[styles.header, titleStyles]}>{ title }</AppText>
        </View>
    );
}

const styles = StyleSheet.create({

    topSection: {
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },

    close: {
        position: "absolute",
        top: 20,
        left: 20,
    },

    header: {
        // right: 20,  // 20 because 40 is the diameter of the icon present in the same container
        textAlign: "center",
        fontSize: 30,
    },
});

export default ScreenHeader;
