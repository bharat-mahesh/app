import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppButton from './ui/Button';
import AppText from './ui/Text';

import colors from '../configs/colors';

import routes from '../navigation/routes';


const OrderCard = ( { orderData } ) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <AppText style={styles.orderStatusHeading}>Order Status</AppText>

                    {
                        orderData.order_status === 0
                        ?
                        (<AppText style={styles.orderStatusPending}>Pending</AppText>)
                        :
                        (
                            orderData.order_status === 1
                            ?
                            (<AppText style={styles.orderStatusDelivered}>Delivered, {orderData.track_order[0].date_delivered}</AppText>)
                            :
                            (<AppText style={styles.orderStatusCancelled}>Cancelled</AppText>)
                        )
                    }
                </View>

                <View>
                    <AppText style={styles.orderTotalText}>
                        Order Total ({orderData.tot_ordered_items} {orderData.tot_ordered_items == 1 ? "item" : "items"})
                    </AppText>

                    <AppText style={styles.orderTotalAmount}>
                        {'\u20B9 '+ orderData.tot_amnt}
                    </AppText>
                </View>
            </View>

            <View style={styles.itemContainer}>
                <Image style={styles.itemImg} source={orderData.products[0].image[0]} />

                <AppText style={styles.itemDescp}>
                    {orderData.products[0].item_name + " "}
                    from
                    {" " + orderData.farm_name} 's farm
                </AppText>
            </View>

            <View style={styles.btnContainer}>
                <AppButton
                    onPress={() => navigation.navigate( routes.ORDER_DETAILS,  { orderData } )}
                    style={styles.btnLeft}
                    textStyles={styles.btnLeftText}
                    title="View Details"
                />

                <AppButton
                    onPress={() => navigation.navigate( routes.ORDER_HELP )}
                    style={styles.btnRight}
                    textStyles={styles.btnRightText}
                    title="Need Help"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 15,
    },

    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
    },

    orderStatusHeading: {
        fontFamily: "Nunito_Bold",
        fontSize: 14,
    },

    orderStatusPending: {
        color: colors.active,
        fontFamily: "Nunito_Bold",
        fontSize: 16,
    },

    orderStatusDelivered: {
        fontFamily: "Nunito_Bold",
        fontSize: 16,
    },

    orderStatusCancelled: {
        color: colors.medium,
        fontFamily: "Nunito_Bold",
        fontSize: 16,
    },

    orderTotalText: {
        fontSize: 14,
    },

    orderTotalAmount: {
        alignSelf: "flex-end",
        fontFamily: "Nunito_Medium",
        fontSize: 16,
    },

    itemContainer: {
        alignItems: "center",
        flexDirection: "row",
        paddingBottom: 10,
    },

    itemImg: {
        height: 35,
        width: 35,
    },

    itemDescp: {
        paddingLeft: 10,
    },

    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    btnLeft: {
        width: "45%",
        padding: 5,
    },

    btnLeftText: {
        fontFamily: "Nunito_Medium",
    },

    btnRight: {
        width: "45%",
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.primary,
        padding: 5,
        
    },

    btnRightText: {
        color: colors.primary,
        fontFamily: "Nunito_Medium",
    },
});

export default OrderCard;