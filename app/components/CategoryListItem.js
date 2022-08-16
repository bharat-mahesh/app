import { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from './ui/Text';

import colors from '../configs/colors';

const CategoryListItem = ( {
    item,
    // itemCount=0  // this will be used to get the item count in user's cart data fetched by the ItemListingsScreen
}) => {

    const [itemCount, setItemCount] = useState(0);

    const handelAddPress = () => {
        setItemCount(itemCount+item.minNoOfItemPurchase);
    }

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
                <AppText style={[styles.font, styles.title]}>{ item.farmName }</AppText>

                <AppText style={[styles.font, styles.price]}>{'\u20B9'}{ item.price } per unit</AppText>

                <AppText style={[styles.font, styles.moq]}>MOQ: { item.minNoOfItemPurchase }</AppText>

                <View style={styles.itemCountContainer}>
                    {
                        itemCount === 0
                        ?
                        (
                            <TouchableOpacity
                                activeOpacity={1}
                                style={styles.addCartButton}
                                onPress={() => handelAddPress()}
                            >
                                <AppText style={styles.addText}>ADD</AppText>

                                <View style={styles.btn}>
                                    <MaterialCommunityIcons color={colors.white} name="plus" size={28} />
                                </View>
                            </TouchableOpacity>
                        )
                        :
                        (
                            <View style={styles.itemCountBtn} >
                                <TouchableOpacity
                                    style={styles.btn}
                                    activeOpacity={1}
                                    onPress={() => handelMinusPress()}
                                >
                                    <MaterialCommunityIcons color={colors.white} name="minus" size={30} />
                                </TouchableOpacity>

                                <AppText style={styles.itemCount}>
                                    { itemCount }
                                </AppText>

                                <TouchableOpacity
                                    style={styles.btn}
                                    activeOpacity={1}
                                    onPress={() => setItemCount(itemCount + 1)}
                                >
                                    <MaterialCommunityIcons color={colors.white} name="plus" size={30} />
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        alignSelf: "center",
        flexDirection: "row",
        marginVertical: 10,
        width: "90%",
    },
    
    img: {
        height: 125,
        width: 100,
    },
    
    dataContainer: {
        flex: 1,
        paddingLeft: 10,
    },
    
    font: {
        fontFamily: "Nunito_Medium",
        paddingBottom: 5,
    },
    
    title: {
        fontFamily: "Nunito_Bold",
        fontSize: 22,
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

    addCartButton: {
        alignItems: "center",
        backgroundColor: colors.primary,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 4,
        width: 110,
    },

    addText: {
        color: colors.white,
        fontFamily: "Nunito_Bold",
        fontSize: 18,
    },

    btn: {
        backgroundColor: "#18c8f2",
        borderRadius: 100,
    },

    itemCountBtn: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 4,
        width: 110,
    },

    itemCount: {
        fontFamily: "Nunito_Bold",
        fontSize: 18,
    },
});

export default CategoryListItem;