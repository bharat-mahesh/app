import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from './ui/Text';

import colors from '../configs/colors';


const ProfileOptionItem = ( { Icon, icon, onPress, showArrow=true, text } ) => {

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={styles.container}
        >
            <View style={styles.optionContainer}>
                <View style={styles.iconContainer}>
                    { !Icon && <MaterialCommunityIcons color={colors.white} name={icon} size={35} /> }
                    { Icon }
                </View>

                <AppText style={styles.text}>{ text }</AppText>
            </View>

            {
                showArrow
                &&
                <View>
                    <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={30} />
                </View>
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
    },

    optionContainer: {
        alignItems: "center",
        flexDirection: "row",
    },

    iconContainer: {
        backgroundColor: colors.primary,
        borderRadius: 8,
        padding: 8,
    },

    text: {
        fontFamily: "Nunito_Medium",
        paddingLeft: 10,
    },
});

export default ProfileOptionItem;