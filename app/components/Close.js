import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Close = ( { onPress, style } ) => {
    return (
        <TouchableOpacity style={[styles.back, style]} onPress={onPress}>
            <MaterialCommunityIcons name="arrow-left" size={30} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    back: {
        right: Dimensions.get('window').width * 0.3 ,
    },
});

export default Close;
