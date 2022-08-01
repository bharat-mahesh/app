import { StyleSheet, View } from 'react-native';

import AppButton from '../components/Button';
import AppText from '../components/Text';
import Icon from '../components/Icon';
import Screen from '../components/Screen';

import colors from '../configs/colors';


const WelcomeScreen = ( { navigation } ) => {

    return (
        <Screen style={styles.container}>
            <View style={styles.topSection}>
                <AppText style={styles.header}>
                    Welcome
                </AppText>

                <AppText style={styles.catchPhrase}>
                    Cowdy!!
                </AppText>
                
                <AppText style={styles.descp}>
                    Get connected real farmers with manufacturers to cut down third party cost!!!
                </AppText>
            </View>

            <View style={styles.imgSlideShow}>

                <View style={styles.img}>
                    <AppText>Page 2</AppText>
                </View>

            </View>

            <AppButton title="Get Started" onPress={() => navigation.navigate("Login")} />

            <View style={styles.bottomSection}>
                <Icon
                    backgroundColor={colors.primary}
                    name="arrow-right"
                    onPress={() => console.log("How it works clicked")}
                    size={40}
                />

                <AppText style={styles.bottomText}> How it Works </AppText>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingHorizontal: 10,
    },
    
    topSection: {
        alignItems: "center",
        padding: 10,
    },

    header: {
        fontSize: 38,
        paddingVertical: 20,
    },

    catchPhrase: {
        fontSize: 30,
        paddingVertical: 20,
        textDecorationLine: 'underline',
    },

    descp: {
        fontSize: 20,
        lineHeight: 30,
        textAlign: "center",
    },

    imgSlideShow: {
        backgroundColor: "lightblue",   //for testing
        height: "30%",                  //dummy placeholder
        width: "80%",                   //dummy placeholder
    },

    img: { },

    bottomSection: {
        alignItems: "center",
        flexDirection: "row",
        paddingBottom: 20,
    },

    bottomText: {
        fontSize: 20,
    },
});

export default WelcomeScreen;