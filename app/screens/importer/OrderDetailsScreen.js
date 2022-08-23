import { View, StyleSheet, ScrollView } from 'react-native';

import AppText from '../../components/ui/Text';
import Screen from '../../components/Screen';
import ExcludeStatusBar from '../../components/ui/ExcludeStatusBar';
import SectionSeparator from '../../components/ui/SectionSeparator';
import TrackOrderCard from '../../components/TrackOrderCard';

import colors from '../../configs/colors';


const OrderDetailsScreen = ( { route } ) => {
    
    // console.log(route.params.orderData.order_status)

    return (
        <Screen style={styles.container}>
            <ExcludeStatusBar />

            <ScrollView>
                <View style={styles.section}>
                    <AppText style={styles.orderStatusHeading}>Order Status</AppText>

                    {
                        route.params.orderData.order_status === 0
                        ?
                        (<AppText style={styles.orderStatusPending}>Pending</AppText>)
                        :
                        (
                            route.params.orderData.order_status === 1
                            ?
                            (<AppText style={styles.orderStatusDelivered}>Delivered, {route.params.orderData.track_order[0].date_delivered}</AppText>)
                            :
                            (
                                <>
                                    <AppText style={styles.orderStatusCancelled}>Cancelled</AppText>

                                    <View style={styles.refund}>
                                        <AppText style={styles.refundText}>
                                            Refund has been initiated to the original payment menthod, it will reflect in your account within 30 working days.
                                        </AppText>
                                    </View>
                                </>
                            )
                        )
                    }
                </View>
                
                <SectionSeparator color={colors.light_darker} height={8} />

                <View style={styles.section}>
                    <TrackOrderCard item={route.params.orderData} />
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.light_darker,
    },

    section: {
        backgroundColor: colors.white,
        padding: 10,
    },

    orderStatusHeading: {
        fontFamily: "Nunito_Bold",
        fontSize: 14,
    },

    orderStatusPending: {
        color: colors.active,
        fontFamily: "Nunito_Bold",
        fontSize: 16,
        paddingBottom: 10,
    },

    orderStatusDelivered: {
        fontFamily: "Nunito_Bold",
        fontSize: 16,
        paddingBottom: 10,
    },

    orderStatusCancelled: {
        color: colors.danger,
        fontFamily: "Nunito_Bold",
        fontSize: 18,
        paddingBottom: 10,
    },

    refund: {
        backgroundColor: "#bdffd4",
        borderRadius: 6,
        paddingHorizontal: 7,
        paddingVertical: 4,
    },

    refundText: {
        color: "#40b569",
        fontFamily: "Nunito_Bold",
        fontSize: 12,
    },
});

export default OrderDetailsScreen;