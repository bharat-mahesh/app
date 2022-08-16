import { View, StyleSheet } from "react-native";

import colors from "../../configs/colors";

const ListItemSeparator = ( {
    color=colors.light,
    marginVertical=10,
    width="90%"
}) => {
    
    return (
        <View style={[styles.container, {borderColor: color, marginVertical, width}]} />
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        flex: 1,
        alignSelf: "center",
    },
});

export default ListItemSeparator;