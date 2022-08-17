import { Image, ScrollView, StyleSheet, View } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from '../../components/ui/Button';
import AppText from '../../components/ui/Text';
import Header from '../../components/ui/Header';
import CartItem from '../../components/CartItem';
import ListItemSeparator from '../../components/ui/ListItemSeparator';
import Screen from '../../components/Screen';
import SectionSeparator from '../../components/ui/SectionSeparator';

import { cart } from "../../mock/importerCartData";
import { payDetails } from "../../mock/importerPayDetails";
import { user } from "../../mock/userData";

import colors from '../../configs/colors';

import routes from '../../navigation/routes';


const CartScreen = ( { navigation } ) => {

    const fetchedCart = cart;   // call api and fetch data from cart;

    return (
        <Screen>
            <Header title="Cart" />

            <View style={styles.locationContainer}>
                <MaterialCommunityIcons name="map-marker-outline" size={20} />

                <AppText style={styles.location}>
                    {user.userName} - {user.city}
                    {'  '}
                    <AppText style={styles.zipcode}>{user.zipcode}</AppText>
                </AppText>
            </View>


            {
                fetchedCart != null
                ?
                (
                    <ScrollView showsVerticalScrollIndicator={false}>

                        {
                            fetchedCart.map((item) => {
                                return(
                                    <View key={item.id}>
                                        <CartItem item={item} />

                                        <ListItemSeparator />
                                    </View>
                                )
                            })
                        }
                        
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

                            <View style={styles.procedeToCheckout}>
                                <View style={styles.payableAmountContainer}>
                                    <AppText style={styles.payableAmountTxt}>Payable Amount</AppText>
                                    
                                    <AppText style={styles.payableTotAmntValue}>
                                        {' \u20B9'}{ payDetails.tot_amnt }
                                    </AppText>
                                </View>

                                <View style={styles.placeOrder}>
                                    <AppButton
                                        style={styles.placeOrderBtn}
                                        title="Place Order"
                                        textStyles={{ fontSize: 15 }}
                                        onPress={() => navigation.navigate( routes.CONFIRM_ORDER )}
                                    />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                )
                :
                (
                    <View style={styles.emptyCartContainer}>
                        <Image style={styles.emptyCartImage} />

                        <AppText style={styles.emptyCartText}>No Items In Your Cart !!</AppText>

                        <View style={styles.searchBtnContainer}>
                            <AppButton style={styles.searchItemsBtn} title="Search Items" />
                        </View>
                    </View>
                )
            }
        </Screen>
    );
}

const styles = StyleSheet.create({

    // User Location Section 
    locationContainer: {
        alignItems: "center",
        backgroundColor: colors.light_darker,
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 7,
    },

    location: {
        fontFamily: "Nunito_Regular",
        fontSize: 12,
        paddingLeft: 4,
        textDecorationLine: 'underline',
    },

    zipcode: {
        fontFamily: "Nunito_Bold",
        fontSize: 12,
    },

    // Cart's Total Payment Value
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

    // Procede to Payment section
    totAmnt: {
        paddingBottom: 5,
    },

    totAmntTxt: {
        fontFamily: "Nunito_Bold",
        fontSize: 15,
    },

    procedeToCheckout: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    payableAmountContainer: {
        justifyContent: "center",
    },

    payableAmountTxt: {
        fontSize: 12,
        paddingHorizontal: 20,
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
        padding: 0,
        paddingHorizontal: 10,
        height: 30,
    },

    // No Items in Cart Section
    emptyCartContainer: {
        alignItems: "center",
        flex: 1,
        top: "10%",
    },

    emptyCartImage: {
        backgroundColor: "lightblue",
        height: 200,
        width: 200,
        marginBottom: 20,
    },

    emptyCartText: {
        fontFamily: "Nunito_Medium",
        fontSize: 24,
    },

    searchBtnContainer: {
        flex: 1,
    },

    searchItemsBtn: {
        marginTop: 30,
    },
});

export default CartScreen;