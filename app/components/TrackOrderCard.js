import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { Entypo } from "@expo/vector-icons";

import AppText from './ui/Text';

import colors from '../configs/colors';


const TrackOrderCard = ( { item } ) => {

    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <View>
            <TouchableOpacity activeOpacity={1} onPress={() => handleCollapse()} style={styles.trackOrderContainer}>
                <AppText style={styles.trackOrderText}>
                    Track Order
                </AppText>

                {
                    collapsed
                    ?
                    (
                        <Entypo color={colors.black} name="chevron-thin-down" size={22} />
                    )
                    :
                    (
                        <Entypo color={colors.black} name="chevron-thin-up" size={22} />
                    )
                }
            </TouchableOpacity>

            {
                !collapsed
                ?
                (
                    <View style={styles.orderStatusContainer}>
                        <View style={styles.orderStatusVisualizer}>
                            {/* <AppText>Visualize the delivery Status of product</AppText> */}
                        </View>

                        <View style={styles.orderStatusText}>
                            <View>
                                <AppText style={styles.statusText}>Ordered</AppText>
                                <AppText style={styles.statusDateText}>{item.track_order[0].date_ordered}</AppText>
                            </View>
                        </View>
                    </View>
                )
                :
                (
                    <AppText>Not Collapsed</AppText>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({

    trackOrderText: {
        fontFamily: "Nunito_Bold",
    },

    trackOrderContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    orderStatusContainer: {
        flexDirection: "row",
        margin: 10,
    },

    orderStatusVisualizer: {
        backgroundColor: colors.danger,
        height: 100,
        marginRight: 10,
        width: 30,
    },

    orderStatusText: {

    },

    statusText: {
        color: colors.dark,
        fontFamily: "Nunito_Medium",
        fontSize: 16,
    },

    statusDateText: {
        color: colors.medium,
        fontSize: 14,
    },
});

export default TrackOrderCard;