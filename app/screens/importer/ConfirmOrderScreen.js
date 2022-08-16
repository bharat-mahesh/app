import { ScrollView, StyleSheet, View } from 'react-native';

import AppButton from '../../components/ui/Button';
import AppText from '../../components/ui/Text';
import Header from '../../components/ui/Header';
import CartItem from '../../components/importer/CartItem';
import ListItemSeparator from '../../components/ui/ListItemSeparator';
import Screen from '../../components/Screen';
import SectionSeparator from '../../components/ui/SectionSeparator';

import colors from '../../configs/colors';

import routes from '../../navigation/routes';

import { cart } from '../../mock/importerCartData';
import { payDetails } from '../../mock/importerPayDetails';
import { user } from '../../mock/userData';


const ConfirmOrderScreen = ( { navigation } ) => {

    const fetchedCart = cart;   // call api and fetch data from cart;

    return (
        <Screen>
            <Header title="Order Summary" />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.deliveryHeader}>
                        <AppText style={styles.deliveryHeaderTxt}>
                            Delivery Address:
                        </AppText>

                        <AppButton
                            onPress={() => {
                                console.log("Change Delivery Address Pressed");
                            }}
                            style={styles.changeBtn}
                            textStyles={styles.changeBtnTxt}
                            title="Change"
                        />
                    </View>

                    <View style={styles.deliveryAddress}>
                        <AppText style={styles.userName}>{ user.userName }</AppText>

                        <ListItemSeparator color={colors.medium} marginVertical={0} width='100%' />

                        <AppText>{ user.deliveryLocation }</AppText>
                    </View>
                    
                    <SectionSeparator height={5} />

                    <View style={styles.basketHeaderContainer}>
                        <AppText style={styles.basket}>Basket</AppText>

                        <View style={styles.totalItemsContainer}>
                            <AppText>Total ({user.totalNoOfItemsInCart} items)</AppText>

                            <AppText style={styles.payableTotAmntValueBasket}>
                                {' \u20B9'}{ payDetails.tot_amnt }
                            </AppText>
                        </View>
                    </View>

                    <SectionSeparator height={5} />
                </View>

                {fetchedCart.map((item) => {
                    return(
                        <View key={item.id}>
                            <CartItem buttonDisable={true} item={item} />

                            <ListItemSeparator />
                        </View>
                    )
                })}

                <SectionSeparator />

                <View>
                    <AppText style={styles.payment}>Payment Details</AppText>

                    <View style={styles.payDetails}>
                        <AppText style={styles.payTxt}>MRP Total</AppText>

                        <AppText style={styles.payTxt}>{'\u20B9'}{ payDetails.mrp_total }</AppText>
                    </View>

                    <ListItemSeparator marginVertical={5} />

                    <View style={styles.payDetails}>
                        <AppText style={styles.payTxt}>Product Discount</AppText>

                        <AppText style={styles.payTxt}>
                            <AppText style={styles.negative}>
                                -
                            </AppText>
                            
                            {' \u20B9'}{ payDetails.prod_discount }
                        </AppText>
                    </View>
                    
                    <ListItemSeparator marginVertical={5} />

                    <View style={[styles.payDetails, styles.totAmnt]}>
                        <AppText style={styles.totAmntTxt}>Total Amount</AppText>

                        <AppText style={styles.totAmntTxt}>
                            {' \u20B9'}{ payDetails.tot_amnt }
                        </AppText>
                    </View>

                    <SectionSeparator />
                </View>
            </ScrollView>

            <View style={styles.procedeToCheckout}>
                <View style={styles.payableAmountContainer}>
                    <AppText style={styles.payableAmountTxt}>Payable Amount</AppText>
                    
                    <AppText style={styles.payableTotAmntValue}>
                        {' \u20B9'}{ payDetails.tot_amnt }
                    </AppText>
                </View>

                <View style={styles.placeOrder}>
                    <AppButton
                        onPress={() => navigation.navigate( routes.PAYMENT )}
                        style={styles.placeOrderBtn}
                        textStyles={{ fontSize: 15 }}
                        title="Make Payment"
                    />
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({

    deliveryHeader: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    deliveryHeaderTxt: {
        marginLeft: 20,
    },

    changeBtn: {
        marginRight: 20,
        padding: 0,
        paddingVertical: 5,
        width: 100,
    },

    changeBtnTxt: {
        fontSize: 16,
    },

    deliveryAddress: {
        backgroundColor: colors.light,
        borderRadius: 8,
        margin: 10,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    userName: {
        fontFamily: "Nunito_Bold",
        paddingBottom: 5,
    },

    basketHeaderContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },

    basket: {
        fontFamily: "Nunito_Medium",
        fontSize: 20,
    },

    totalItemsContainer: {
        alignItems: "center",
    },

    payableTotAmntValueBasket: {
        fontFamily: "Nunito_Bold",
        fontSize: 15,
    },

    payment: {
        fontFamily: "Nunito_Bold",
        marginVertical: 10,
        paddingLeft: 20,
    },
    
    payDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },

    payTxt: {
        fontSize: 15,
    },

    negative: {
        fontFamily: "Nunito_Bold",
    },

    totAmnt: {
        paddingBottom: 5,
    },

    totAmntTxt: {
        fontFamily: "Nunito_Bold",
        fontSize: 15,
    },

    procedeToCheckout: {
        borderTopColor: colors.light_darker,
        borderTopWidth: 2,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    payableAmountContainer: {
        justifyContent: "center",
    },

    payableAmountTxt: {
        paddingHorizontal: 20,
        fontSize: 12,
    },

    payableTotAmntValue: {
        fontFamily: "Nunito_Bold",
        fontSize: 15,
        paddingLeft: 15,
    },

    placeOrder: {
        marginRight: 10,
    },

    placeOrderBtn: {
        height: 30,
        padding: 0,
        paddingHorizontal: 10,
    },
});

export default ConfirmOrderScreen;