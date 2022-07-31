import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../configs/colors';

import Screen from '../components/Screen';

import AppText from '../components/Text';
import ProfileCard from '../components/ProfileCard';
import ScreenHeader from '../components/ScreenHeader';
import VerificationPopup from '../components/VerificationPopup';

const ProfileScreen = ( props ) => {
    return (
        <Screen style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <ScreenHeader title="Profile" onPress={() => console.log("Back Pressed")} />

                <ProfileCard
                    iconName="account-edit"
                    cardTitle="Personal Info"
                    line1="Abhishek Batliwala"
                    line2="+91 11111 11111"
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

            <VerificationPopup />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
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
