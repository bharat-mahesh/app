import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';

import AppText from './Text';

import colors from '../../configs/colors';


const Header = ( { headerStyles, textStyle, title } ) => {

    return (
        <View style={[styles.topSection, headerStyles]}>
            <AppText style={[styles.text, textStyle]}>
                { title }
            </AppText>
        </View>
    );
}

const styles = StyleSheet.create({

    topSection: {
        alignItems: "center",
        backgroundColor: colors.primary,
        justifyContent: "center",
        paddingBottom: 15,
        width: "100%",
    },

    text: {
        backgroundColor: colors.primary,
        color: "#fff",
        fontFamily: "Nunito_Medium",
        fontSize: 40,
        paddingTop: Constants.statusBarHeight,
        textAlign: "center",
    },
});

export default Header;