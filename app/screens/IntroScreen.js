import { View, StyleSheet, Image, Dimensions } from 'react-native';

import Swiper from 'react-native-swiper';

import IntroItem from '../components/Intro';
import Screen from '../components/Screen';

const IntroScreen = ( props ) => {
    return (
        // <Screen style={styles.container}>
            <Swiper loop={false}>
                <IntroItem
                    image={require("../assets/icon.png")}
                    heading="Fresh Milk & Groceries"
                    descp="Lorem Ipsum"
                    btnTitleLeft="1"
                    // btnTitleRight="Next"
                />

                <IntroItem
                    image={require("../assets/icon.png")}
                    heading="Fresh Milk & Groceries"
                    descp="Lorem Ipsum"
                    btnTitleLeft="2"
                />

                <IntroItem
                    image={require("../assets/icon.png")}
                    heading="Fresh Milk & Groceries"
                    descp="Lorem Ipsum"
                    btnTitleLeft="3"
                />

                <IntroItem
                    image={require("../assets/icon.png")}
                    heading="Fresh Milk & Groceries"
                    descp="Lorem Ipsum"
                    btnTitleLeft="4"
                />
            </Swiper>
        // </Screen>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     alignItems: "center",
    //     backgroundColor: colors.primary,
    //     padding: 10,
    // },

    // img: {
    //     width: Dimensions.get('screen').width - 20,
    //     height: Dimensions.get('screen').height * 0.6,
    //     borderBottomLeftRadius: 10,
    //     borderBottomRightRadius: 10,
    // },

    // text: {
    //     alignItems: "center",
    // },

    // title: {
    //     fontWeight: "bold",
    //     fontSize: 30,
    // },
    
    // subTitle: {
    //     color: colors.medium,
    // },

    // navContainer: {
    //     flexDirection: "row",
    //     width: "100%",
    // }
});

export default IntroScreen;