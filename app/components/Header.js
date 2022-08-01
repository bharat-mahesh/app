import { View, StyleSheet } from 'react-native';

import AppText from './Text';

const Header = ( { headerStyles, IconLeft, IconRight, title, textStyle } ) => {
    return (
        <View style={[styles.topSection, headerStyles]}>
            { IconLeft }

            <AppText style={[styles.header, textStyle]}>{ title }</AppText>

            { IconRight }
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

    header: {
        textAlign: "center",
        fontSize: 30,
    },
});

export default Header;
