import { View, StyleSheet, Image } from 'react-native';
import colors from '../configs/colors';
import AppText from './Text';

const SearchCard = ( { item } ) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require("../assets/icon.png")} />

            <View style={styles.info}>
                <AppText style={styles.left}> Farmer Rating: { item.rating }</AppText>

                <AppText style={styles.center}> | </AppText>

                <AppText style={styles.right}> Capacity: { item.capacity } litres</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.medium,
        borderRadius: 10,
        margin: 10,
        padding: 15,
        alignItems: "center",
    },

    img: {
        height: 70,
        width: 70,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: colors.dark,
        borderRadius: 10,
    },

    info: {
        flexDirection: "row",
        // backgroundColor: "red",
        // alignItems: "flex-end",
        justifyContent: "space-between",
        width: "100%",
    },

    left: {
        alignSelf: "center",
        textAlign: "center",
        width: "45%",
    },

    center: {
        alignSelf: "center",
        textAlign: "center",
        width: "10%",
    },

    right: {
        alignSelf: "center",
        textAlign: "center",
        width: "45%",
    },
});

export default SearchCard;
