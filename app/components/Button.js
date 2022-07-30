import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../configs/colors';

const AppButton = ({ activeOpacity, title, onPress, color="primary", style }) => {
    return (
        <TouchableOpacity activeOpacity={activeOpacity} style={[styles.button, {backgroundColor: colors[color]}, style]} onPress={onPress}>
            <Text style={styles.text}> {title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: colors.primary,
        borderRadius: 10,
        justifyContent: "center",
        marginVertical: 10,
        padding: 15,
        width: "100%",
    },

    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "bold",
        // textTransform: "uppercase",
    },
})

export default AppButton;