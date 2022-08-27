import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import AppButton from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import AppText from '../../components/ui/Text';
import AppTextInput from '../../components/ui/TextInput';

const HomeScreen = ( props ) => {
    return (
        <View style={styles.container}>
            <Header title="Item Details" />

            <ScrollView style={styles.bodyContainer} showsVerticalScrollIndicator={false}>
                <AppText style={styles.txt}>Listing Title</AppText>
                <AppTextInput icon="book" placeholder="E.g. Milk..." />

                <AppText style={styles.txt}>Description</AppText>
                <AppTextInput icon="pencil" placeholder="Describe the quality of milk here" />

                <AppText style={styles.txt}>Price</AppText>
                <AppTextInput icon="cash" placeholder="Price" />

                <AppText style={styles.txt}>Quantity</AppText>
                <AppTextInput icon="bucket" placeholder="Quantity" />

                <AppText style={styles.txt}>Shipping Address</AppText>
                <AppTextInput icon="map-marker-radius" placeholder="Address" />

                <View style={styles.btnContainer}>
                    <AppButton title="Publish" />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },

    bodyContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
    },

    txt: {
        fontFamily: "Nunito_Bold",
        fontSize: 20,
    },

    btnContainer: {
        marginBottom: Dimensions.get('window').height/8,
    },
});

export default HomeScreen;