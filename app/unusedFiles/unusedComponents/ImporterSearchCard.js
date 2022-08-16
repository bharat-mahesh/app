import { View, StyleSheet, Image } from 'react-native';

import colors from '../../configs/colors';
import AppText from '../../components/ui/Text';

const ImporterSearchCard = ( { id, title, image } ) => {
    return (
        <View style={styles.container}>
            <AppText style={styles.title}>{title}</AppText>
            <Image style={styles.image} source={image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.light,
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },

    title: {
        textTransform: "capitalize",
        marginBottom: 10,
        fontWeight: "400",
    },
    
    image: {
        height: 100,
        width: 100,
    },

});

export default ImporterSearchCard;
