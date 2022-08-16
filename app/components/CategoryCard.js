import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from './ui/Text';

import colors from '../configs/colors';


const CategoryCard = ( { categoryItem, onIconPress, onImagePress } ) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onImagePress}>
                <Image style={styles.img} source={ categoryItem.image[0] } />
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <TouchableOpacity style={styles.iconContainer} onPress={onIconPress}>
                    <MaterialCommunityIcons name="candy" size={20} color={colors.medium} />
                </TouchableOpacity>
                
                <AppText style={styles.title}>{ categoryItem.title }</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        marginVertical: 10,
        paddingVertical: 10,
    },

    img: {
        borderRadius: 20,
        height: Dimensions.get('window').width/2.3,
        marginBottom: 10,
        width: Dimensions.get('window').width/2.3,
    },

    titleContainer: {
        flexDirection: "row",
        width: Dimensions.get('window').width/2.3,
    },

    iconContainer: {
        alignItems: "center",
        borderColor: colors.medium,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: "center",
        padding: 6,
        marginRight: 10,
    },

    title: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        color: colors.white,
        flex: 1,
        fontFamily: "Nunito_Bold",
        fontSize: 16,
        textAlign: "center",
        textAlignVertical: "center",
    },
});

export default CategoryCard;