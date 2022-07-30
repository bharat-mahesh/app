import { View, StyleSheet } from 'react-native';

import Swiper from 'react-native-swiper';

import colors from '../configs/colors';

import AppText from '../components/Text';
import AppButton from '../components/Button';
import Icon from '../components/Icon';
import Screen from '../components/Screen';


const HomeScreen1 = ( props ) => {
    return (
        <Screen style={styles.container}>
            <View style={styles.topSection}>
                <AppText style={styles.header}>
                    Home Page 1
                </AppText>

                <AppText style={styles.catchPhrase}>
                    Cowdy!!
                </AppText>
                
                <AppText style={styles.descp}>
                    Get connected with real farmers and cut down the third party cost!...
                </AppText>
            </View>

            <View style={styles.imgSlideShow}>
                <View style={styles.img}><AppText>Page 1</AppText></View>
            </View>

            <AppButton title="Get Started" />

            <View style={styles.bottomSection}>
                <Icon name="arrow-right" size={40} backgroundColor={colors.primary} onPress={() => console.log("hello")} />

                <AppText style={styles.bottomText}> How it Works </AppText>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingHorizontal: 10,
        justifyContent: "space-evenly",
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
        textAlign: "center",
    },

    imgSlideShow: {
        backgroundColor: "lightblue",   //for testing
        height: "30%",                  //dummy placeholder
        width: "80%",                   //dummy placeholder
    },

    img: { },

    bottomSection: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 20,
    },

    bottomText: {
        fontSize: 20,
    },
});

export default HomeScreen1;
