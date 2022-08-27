import { View, StyleSheet, Image, ScrollView } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from '../../components/Screen';
import Header from '../../components/ui/Header';
import AppText from '../../components/ui/Text';
import AppButton from '../../components/ui/Button';
import routes from '../../navigation/routes';


const ProcessFlowScreen = ( { navigation } ) => {
    return (
        <Screen style={styles.container}>
            <Header title="How to Sell?" />
            

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.flowContainer}>

                    <View style={styles.flowItem}>
                        <Image style={styles.img} source={require("../../assets/exporter/flowListing1.png")} />

                        <AppText style={styles.title}>List and Store data</AppText>
                        
                        <AppText style={styles.descp}>Completely listing your product.</AppText>

                        <View style={styles.arrow}>
                            <MaterialCommunityIcons name="arrow-down" size={40} />
                        </View>
                    </View>

                    <View style={styles.flowItem}>
                        <Image style={styles.img} source={require("../../assets/exporter/flowListing2.png")} />

                        <AppText style={styles.title}>Monitor sales & track growth</AppText>
                        
                        <AppText style={styles.descp}>Track customer orders and sales on Dashboard.</AppText>

                        <View style={styles.arrow}>
                            <MaterialCommunityIcons name="arrow-down" size={40} />
                        </View>
                    </View>

                    <View style={styles.flowItem}>
                        <Image style={styles.img} source={require("../../assets/exporter/flowListing3.png")} />

                        <AppText style={styles.title}>Get paid for your sales</AppText>
                        
                        <AppText style={styles.descp}>Payments get deposited to your bank account every 7 days</AppText>
                    </View>
                </View>
                <AppButton title="Start Selling" onPress={() => navigation.navigate(routes.EXPORTER_HOME)} />
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },

    flowContainer: {
        alignItems: "center",
        paddingHorizontal: 20,
        marginVertical: 20,
    },

    flowItem: {
        alignItems: "center",
        marginVertical: 10,
    },

    img: {
        borderRadius: 100,
        height: 100,
        width: 100,
    },

    title: {
        fontFamily: "Nunito_Bold",
        fontSize: 28,
        textAlign: "center",
    },

    descp: {
        fontSize: 20,
        textAlign: "center",
    },

    arrow: {
        paddingTop: 10,
    },
});

export default ProcessFlowScreen;
