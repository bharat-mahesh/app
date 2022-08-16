import { View, StyleSheet } from 'react-native';

import colors from '../configs/colors';


const ProfileOptionsContainer = ( { children, style } ) => {

    return (
        <View style={[styles.container, style]}>
            { children }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        backgroundColor: colors.white,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: "85%",
    },
});

export default ProfileOptionsContainer;