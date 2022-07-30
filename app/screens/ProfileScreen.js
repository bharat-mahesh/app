import { View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from '../components/Screen';
import ProfileCard from '../components/ProfileCard';

import colors from '../configs/colors';
import AppText from '../components/Text';

const ProfileScreen = ( props ) => {
    return (
        <Screen style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.topSection}>

                    <TouchableOpacity style={styles.back} onPress={() => console.log("Back Pressed")}>
                        <MaterialCommunityIcons name="arrow-left" size={30} />
                    </TouchableOpacity>

                    <AppText style={styles.header}>Profile</AppText>
                </View>

                <ProfileCard
                    iconName="account-edit"
                    cardTitle="Personal Info"
                    line1="Abhishek Batliwala"
                    line2="+91 11111 11111"
                    line3="Address"
                    onIconPress={() => console.log("profile edit icon Pressed")}
                />

                <ProfileCard
                    iconName="note-edit-outline"
                    cardTitle="PickUp address"
                    line1="abcd abc abc"
                    line2="abc - 400 000"
                    line3="Mumbai"
                    onIconPress={() => console.log("address edit icon Pressed")}
                />

                <ProfileCard
                    iconName="note-edit-outline"
                    cardTitle="Preferences"
                    line1="Time Slot: 7 AM to 4 PM"
                    line2="Pickup Days: Daily"
                    line3="Milk Quantity: 10 litres"
                    onIconPress={() => console.log("preferences edit icon Pressed")}
                />

                <View style={styles.bottomSection}>
                    <TouchableOpacity style={styles.bottomSectionItem} onPress={() => console.log("Wallet pressed")}>
                        <Ionicons name="wallet-outline" size={40} />
                        <AppText style={styles.text}>My Wallet</AppText>
                    </TouchableOpacity>

                    
                    <TouchableOpacity style={styles.bottomSectionItem} onPress={() => console.log("Rating pressed")}>
                        <MaterialCommunityIcons name="star-outline" size={40} />
                        <AppText style={styles.text}>My Rating</AppText>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomSectionItem} onPress={() => console.log("Help pressed")}>
                        <MaterialCommunityIcons name="chat-outline" size={40} />
                        <AppText style={styles.text}>Help center</AppText>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },

    topSection: {
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },

    back: {
        right: Dimensions.get('window').width * 0.3 ,
    },

    header: {
        right: 20,  // 20 because 40 is the diameter of the icon present in the same container
        textAlign: "center",
        fontSize: 30,
    },

    bottomSection: {
        borderWidth: 1,
        borderColor: colors.medium,
        borderRadius: 10,
        margin: 10,
        padding: 20,
        justifyContent: "space-between",
        marginBottom: 50,
    },

    text: {
        fontSize: 25,
        textDecorationLine: "underline",
        paddingBottom: 5,
        paddingLeft: 15,
    },

    bottomSectionItem: {
        flexDirection: "row",
    },
});

export default ProfileScreen;
