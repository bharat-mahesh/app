import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ backgroundColor = "#000", iconColor = "#fff", name, onPress, size = 40 }) => {

    return (
        <View
            style={
                [
                    styles.iconContainer,
                    {
                        height: size,
                        width: size,
                        borderRadius: size * 0.5,
                        backgroundColor
                    }
                ]
            }
        >
            <TouchableWithoutFeedback onPress={onPress}>
                <MaterialCommunityIcons name={name} color={iconColor} size={ size * 0.7 } />
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Icon;