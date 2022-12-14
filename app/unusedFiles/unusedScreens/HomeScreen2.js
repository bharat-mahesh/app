import { View, StyleSheet } from 'react-native';

import { useNavigation } from "@react-navigation/native"

import Swiper from 'react-native-swiper';

import colors from '../../configs/colors';

import AppText from '../../components/ui/Text';
import AppButton from '../../components/ui/Button';
import Icon from '../unusedComponents/Icon';
import Screen from '../../components/Screen';


const HomeScreen2 = ( props ) => {

    const navigation = useNavigation();

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
                <View style={styles.img}><AppText>Page 2</AppText></View>
            </View>

            <AppButton title="Get Started" />

            <View style={styles.bottomSection}>
                <Icon name="arrow-right" size={40} backgroundColor={colors.primary} onPress={() => navigation.navigate("Login") } />

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
        lineHeight: 30,
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

export default HomeScreen2;
