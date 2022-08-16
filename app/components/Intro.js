import { View, StyleSheet, Image, Dimensions } from 'react-native';

import colors from '../configs/colors';

import AppButton from './ui/Button';
import AppText from './ui/Text';
import Screen from './Screen';

const IntroItem = ({
    image,
    heading,
    descp,
    btnTitleLeft=null,
    btnTitleRight=null,
}) => {
    return (
        <Screen style={styles.container}>
            <View>
                <Image style={styles.img} source={image} />

                <View style={styles.text}>
                    <AppText style={styles.heading}>{ heading }</AppText>
                    <AppText style={styles.descp}>{ descp }</AppText>
                </View>
                
                <View style={styles.navIcon}>
                    
                </View>

                <View style={styles.navContainer}>
                    { btnTitleLeft && <AppButton title={btnTitleLeft} />}
                    { btnTitleRight && <AppButton title={btnTitleRight} color="dark"  />}
                </View>
            </View>
            {/* <Image source={require("../assets/icon.png")} style={styles.img} /> */}
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
    },

    img: {
        width: Dimensions.get('screen').width - 20,
        height: Dimensions.get('screen').height * 0.6,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    text: {
        alignItems: "center",
    },

    heading: {
        fontWeight: "bold",
        fontSize: 30,
    },
    
    descp: {
        color: colors.medium,
    },

    navContainer: {
        flexDirection: "row",
        // backgroundColor: "red",
        alignSelf: "center",
        justifyContent: "space-between",
        width: "100%",
    }
});

export default IntroItem;