import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../configs/colors';
import AppText from './ui/Text';

const ProfileCard = ( { iconName, cardTitle, cardData, line1, line2, line3, onIconPress } ) => {
    return (
        <View style={styles.container}>
            <View>
                <AppText style={styles.title}>{cardTitle}</AppText>

                { line1 && <AppText>{ line1 }</AppText> }
                
                { line2 && <AppText>{ line2 }</AppText> }
                
                { line3 && <AppText>{ line3 }</AppText> }
            </View>

            {
                iconName && 
                <TouchableOpacity onPress={onIconPress}>
                    <MaterialCommunityIcons name={iconName} size={40} />
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.medium,
        borderRadius: 10,
        margin: 10,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
        fontSize: 25,
        textDecorationLine: "underline",
        paddingBottom: 5,
    },
});

export default ProfileCard;
