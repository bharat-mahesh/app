import { View, StyleSheet, TextInput } from 'react-native';

import { MaterialIcons } from "@expo/vector-icons";
import colors from '../configs/colors';

const SearchBox = ( { onChangeText } ) => {

    return (
        <View style={styles.container}>
            <MaterialIcons name="search" size={26} color={colors.primary} />
            
            <TextInput placeholder="Search" onChangeText={onChangeText} style={styles.textInp} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.light,
        backgroundColor: colors.light,
    },

    textInp: {
        width: "85%",
        paddingLeft: 10,
        fontSize: 20,
    },
});

export default SearchBox;
