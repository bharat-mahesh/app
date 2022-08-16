import { ScrollView, StyleSheet, View } from 'react-native';

import AppText from '../../components/ui/Text';
import Header from '../../components/ui/Header';
import OrderCard from '../../components/OrderCard';
import SectionSeparator from '../../components/ui/SectionSeparator';
import Screen from '../../components/Screen';

import colors from '../../configs/colors';

import { user } from '../../mock/userData';
import { orderData } from '../../mock/importerOrderData';


const OrderScreen = ( props ) => {

    return (
        <Screen>
            <Header title="Orders" />

            <ScrollView showsVerticalScrollIndicator={false}>
                <AppText style={styles.totOrders}>{ user.totalNoOfOrdersMade } orders</AppText>

                {
                    orderData.map((item) => {
                        return (
                            <View key={item.id}>
                                <OrderCard orderData={item} />

                                <SectionSeparator height={15} />
                            </View>
                        )
                    })
                }
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({

    totOrders: {
        backgroundColor: colors.light_darker,
        fontFamily: "Nunito_Bold",
        fontSize: 16,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
});

export default OrderScreen;