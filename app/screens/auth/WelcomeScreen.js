import { Image, StyleSheet, View } from 'react-native';

import AppButton from '../../components/ui/Button';
import AppText from '../../components/ui/Text';
import Screen from '../../components/Screen';

import colors from '../../configs/colors';

import routes from '../../navigation/routes';


const WelcomeScreen = ( { navigation } ) => {

    return (
        <Screen style={styles.container}>
            <View style={styles.topSection}>

                <AppText style={styles.header}>
                    WELCOME
                </AppText>

                <AppText style={styles.descp}>
                    A platform that directly connects Indian dairy exporters and international dairy importers
                </AppText>
            </View>

            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require("../../assets/logo.png")} />
            </View>

            <AppButton title="Get Started" onPress={() => navigation.navigate(routes.LOGIN)} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingHorizontal: 10,
        paddingTop: 0,
    },
    
    topSection: {
        alignItems: "center",
    },

    header: {
        color: colors.primary,
        fontFamily: "Nunito_ExtraBold",
        fontSize: 44,
        paddingBottom: 80,
    },

    descp: {
        fontSize: 22,
        lineHeight: 30,
        textAlign: "center",
        paddingBottom: 10,
    },

    imgContainer: {
        alignItems: "center",
        height: "30%",
        justifyContent: "center",
        width: "80%",
    },

    img: {
        height: "200%",
        marginTop: 100,
        width: "200%",
    },
});

export default WelcomeScreen;