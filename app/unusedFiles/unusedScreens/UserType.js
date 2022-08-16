import { useState } from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';

import AppButton from '../components/ui/AppButton';
import AppText from '../components/ui/AppText';
import Dropdown from '../components/ui/Dropdown';
import RadioButton from '../components/ui/RadioButton';
import Screen from '../components/ui/Screen';

import colors from '../configs/colors';

const languages = [
    {
        id: 1,
        name: "English"
    },
    {
        id: 2,
        name: "Hindi"
    }
]

const UserType = ( props ) => {

    const [customer, setCustomer] = useState(true);
    const [producer, setProducer] = useState(false);
    const [collectionHead, setCollectionHead] = useState(false);

    const getProducer = () => {
        setProducer(true);
        setCustomer(false);
        setCollectionHead(false);
    }

    const getCustomer = () => {
        setProducer(false);
        setCustomer(true);
        setCollectionHead(false);
    }

    const getCollectionHead = () => {
        setProducer(false);
        setCustomer(false);
        setCollectionHead(true);
    }

    return (
        <Screen style={styles.screen}>
            <AppText style={styles.header}> Select User Type </AppText>

            <View style={styles.container}>
                <View style={styles.choiceContainer}>
                    <TouchableOpacity activeOpacity={1} style={styles.option} onPress={() => getCustomer()}>
                        <AppText style={ customer == false ? styles.textUnselected : styles. textSelected }> Customer </AppText>

                        <RadioButton clicked={customer} onPress={() => getCustomer()} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} style={styles.option} onPress={() => getProducer()} >
                        <AppText style={ producer == false ? styles.textUnselected : styles.textSelected }> Dairy Producer </AppText>

                        <RadioButton clicked={producer} onPress={() => getProducer()} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} style={styles.option} onPress={() => getCollectionHead()}>
                        <AppText style={ collectionHead == false ? styles.textUnselected : styles.textSelected }> Collection Head </AppText>
                        <RadioButton clicked={collectionHead} onPress={() => getCollectionHead()} />
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomSection}>
                    <Dropdown
                        data={languages}
                        initialSelection="English"
                        style={styles.dropdown}
                    />

                    <View style={styles.btnContainer}>
                        <AppButton activeOpacity={0.8} title="Next" />
                    </View>
                </View>

            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        backgroundColor: colors.white,
    },

    header: {
        fontSize: 32,
        fontFamily: "Lato",
        paddingVertical: 20,
        marginBottom: 30,
        marginTop: 30,
    },

    container: {
        flex: 1,
        justifyContent: "space-between",
        width: "90%",
    },

    option: {
        alignItems: "center",
        borderBottomColor: colors.medium,
        borderColor: colors.white,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        paddingVertical: 10,
        paddingRight: 10,
    },

    textUnselected: {
        color: colors.medium,
        fontFamily: "Lato",
    },

    textSelected: {
        color: colors.black,
        fontFamily: "Lato",
    },

    bottomSection: {
        justifyContent: "flex-start",
        paddingBottom: 40,
    },

    dropdown: {
        height: 42,
        marginBottom: 40,
    },

    btnContainer: {
        alignItems: "center"
    },
});

export default UserType;