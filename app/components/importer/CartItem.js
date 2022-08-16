import { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from '../ui/Text';

import colors from '../../configs/colors';


const CartItem = ({
    buttonDisable=false,
    item,
    // itemCount=0          // fetch from database
}) => {

    const [itemCount, setItemCount] = useState(item.orderCount);

    const handelMinusPress = () => {
        if(itemCount == item.minNoOfItemPurchase){
            setItemCount(0);
        }
        else{
            setItemCount(itemCount - 1)
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={item.image[0]} />

            <View style={styles.dataContainer}>
                <View>
                    <AppText style={[styles.font, styles.title]}>{ item.itemName } from { item.farmName }</AppText>

                    <AppText style={[styles.font, styles.price]}>{'\u20B9'} { item.price } per unit</AppText>

                    <AppText style={[styles.font, styles.moq]}>MOQ: { item.minNoOfItemPurchase }</AppText>
                </View>


                {
                    buttonDisable === false
                    ?
                    (
                        <View style={styles.itemCountContainer}>
                            <View style={styles.itemCountBtn} >
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => handelMinusPress()}
                                    style={styles.btn}
                                >
                                    <MaterialCommunityIcons color={colors.white} name="minus" size={25} />
                                </TouchableOpacity>

                                <AppText style={styles.itemCount}>{ itemCount }</AppText>

                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => setItemCount(itemCount + 1)}
                                    style={styles.btn}
                                >
                                    <MaterialCommunityIcons color={colors.white} name="plus" size={25} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                    :
                    (
                        <View style={styles.quantity}>
                            <AppText style={styles.quantityText}>Quantity: {item.orderCount}</AppText>
                        </View>
                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        marginVertical: 10,
        alignSelf: "center",
        flexDirection: "row",
        width: "90%",
    },
    
    img: {
        height: 115,
        width: 95,
    },
    
    dataContainer: {
        justifyContent: "space-between",
        paddingLeft: 10,
        flex: 1,
    },
    
    font: {
        fontFamily: "Nunito_Medium",
    },
    
    title: {
        fontFamily: "Nunito_Bold",
        fontSize: 20,
    },

    price: {
        fontSize: 16,
    },

    moq: {
        color: colors.medium,
        fontSize: 16,
    },

    itemCountContainer: {
        alignSelf: "flex-end",
    },

    itemCountBtn: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 4,
        width: 110,
    },

    btn: {
        backgroundColor: "#18c8f2",
        borderRadius: 100,
    },

    itemCount: {
        fontFamily: "Nunito_Bold",
        fontSize: 18,
    },

    quantity: {
        alignSelf: "flex-end",
    },

    quantityText: {
        color: colors.medium,
        fontSize: 20,
    },
});

export default CartItem;