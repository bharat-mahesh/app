import { Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from '../../components/ui/Text';
import ListItemSeparator from '../../components/ui/ListItemSeparator';
import ProfileOptionItem from '../../components/ProfileOptionItem';
import ProfileOptionsContainer from '../../components/ProfileOptionsContainer';
import Screen from '../../components/Screen';

import colors from '../../configs/colors';

import { user } from '../../mock/userData';


const authenticated = true; // fetch from database and show some tickmark for them and Crossmark otherwise

const ProfileScreen = ( props ) => {

    return (
        <Screen style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground source={require("../../assets/ProfileBackground.png")} style={styles.imgBackground}>
                    <Image style={styles.profileImg} source={require("../../assets/user_profile.png")} />

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => console.log("Edit Profile Clicked")}
                        style={styles.editButtonContainer}
                    >
                        <ImageBackground
                            source={require("../../assets/ProfileBackground.png")}
                            style={styles.editButton}
                        >
                            <MaterialCommunityIcons
                                color={colors.white}
                                name="pencil"
                                size={25}
                            />
                        </ImageBackground>
                    </TouchableOpacity>

                    <View style={styles.userDetails}>
                        <AppText style={styles.userName}>
                            {user.userName}
                        </AppText>

                        <AppText style={styles.userEmail}>{user.email}</AppText>
                    </View>
                </ImageBackground>

                <ProfileOptionsContainer style={[styles.profOptCont, styles.profOptCont1]}>

                    <ProfileOptionItem
                        icon="account"
                        onPress={() => console.log("Show Account Info")}
                        text="Account Info"
                    />

                    <ListItemSeparator width="100%" marginVertical={5} />

                    <ProfileOptionItem
                        icon="check"
                        onPress={() => console.log("Go to authentication page")}
                        text="Account Verification"
                    />

                    <ListItemSeparator width="100%" marginVertical={5} />
                    
                    <ProfileOptionItem
                        icon="card-account-details"
                        onPress={() => console.log("Show saved payment methods")}
                        text="Payment Method"
                    />
                    <ListItemSeparator width="100%" marginVertical={5} />

                    <ProfileOptionItem
                        icon="map-marker"
                        onPress={() => console.log("Show saved delivery addresses")}
                        text="Delivery Address"
                    />
                </ProfileOptionsContainer>

                <ProfileOptionsContainer style={styles.profOptCont}>
                    <ProfileOptionItem
                        Icon={
                            <EvilIcons
                                style={{ paddingVertical: 5 }}
                                name="gear"
                                size={35}
                                color={colors.white}
                            />
                        }
                        onPress={() => console.log("Go to application Settings")}
                        text="Settings"
                    />
                    <ListItemSeparator width="100%" marginVertical={5} />

                    <ProfileOptionItem
                        icon="help"
                        onPress={() => console.log("Navigate to Help Center")}
                        text="Help Center"
                    />
                    <ListItemSeparator width="100%" marginVertical={5} />

                    <ProfileOptionItem
                        icon="email"
                        onPress={() => console.log("Open Contact Us page")}
                        text="Contact Us"
                    />
                    <ListItemSeparator width="100%" marginVertical={5} />

                    <ProfileOptionItem
                        icon="share"
                        onPress={() => console.log("Share Appstore/Playstore Link of our application in other through social media platforms installed")}
                        text="Share App"
                    />
                    <ListItemSeparator width="100%" marginVertical={5} />

                    <ProfileOptionItem
                        icon="star"
                        onPress={() => console.log("Open Appstore/PlayStore to let user share his ratings for the Application")}
                        text="Rate App"
                    />
                </ProfileOptionsContainer>

                <ProfileOptionsContainer style={styles.profOptCont}>
                    <ProfileOptionItem
                        icon="power"
                        onPress={() => console.log("Logout the user")}
                        showArrow={false}
                        text="Logout"
                    />
                </ProfileOptionsContainer>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.light_darker,
    },

    imgBackground: {
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 100,     // dont know why it works - 17-08-2022
        paddingTop: 80,         // dont know why it works - 17-08-2022
        width: "100%",
    },

    profileImg: {
        borderColor: colors.white,
        borderRadius: 100,
        borderWidth: 3,
        height: 130,
        width: 130,
    },

    editButtonContainer: {
        bottom: 40,
        left: 45,
    },
    
    editButton: {
        borderColor: colors.white,
        borderRadius: 100,
        borderWidth: 2,
        overflow: "hidden",
        padding: 5,
    },

    userDetails: {
        alignItems: "center",
        marginVertical: -20,    // dont know why it works
    },

    userName: {
        color: colors.white,
        fontFamily: "Nunito_Bold",
        fontSize: 22,
    },

    userEmail: {
        color: colors.white,
        fontFamily: "Nunito_Light",
    },

    profOptCont: {
        marginBottom: 30,
    },

    profOptCont1: {
        marginTop: "-12%",
    },
});

export default ProfileScreen;