import { View, StyleSheet, Image, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

import Screen from '../../components/Screen';
import Header from '../../components/ui/Header';
import AppText from '../../components/ui/Text';
import colors from '../../configs/colors';
import routes from '../../navigation/routes';

const UserTypeScreen = ( { navigation } ) => {
    return (
        <Screen style={styles.container}>
            
            <Header title="Select User Type" />

            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.exporterContainer}
                onPress={() => navigation.navigate( routes.LOGIN, { userType: "exporter" } )}
            >
                <Image style={styles.exporter} source={require("../../assets/exporter.png")} />

                <AppText style={styles.text}>Exporter</AppText>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.importerContainer}
                onPress={() => navigation.navigate( routes.LOGIN, { userType: "importer" } )}
            >
                <Image style={styles.importer} source={require("../../assets/importer.png")} />

                <AppText style={styles.text}>Importer</AppText>
            </TouchableOpacity>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    },

    btnContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },

    
    exporterContainer: {
        width: "100%",
        margin: 10,
        alignItems: "center",
        padding: 10,
    },
    
    exporter: {
        borderWidth: 1,
        borderColor: colors.light_darker,
        width: "80%",
        height: Dimensions.get("screen").width * 0.533,
    },

    text: {
        fontFamily: "Nunito_Bold",
        fontSize: 30,
        color: "#000",
    },

    importerContainer: {
        width: "100%",
        margin: 10,
        alignItems: "center",
        padding: 10,
    },

    importer: {
        width: "80%",
        height: Dimensions.get("screen").width * 0.50,
    },
});

export default UserTypeScreen;