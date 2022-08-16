import { View, StyleSheet, ScrollView } from 'react-native';
import AppTextInput from '../components/ui/TextInput';
import Screen from '../components/Screen';
import AppText from '../components/ui/Text';

const ProfileEditScreen = ( { currentPhoneNumber, currentEmail, currentProfileName } ) => {
    return (
        <Screen style={styles.container}>
            <ScrollView>
                <AppText>Change Profile</AppText>
                <AppText>Change Number</AppText>
                <AppText>{currentPhoneNumber}</AppText>
                <AppTextInput icon="phone" placeholder="New Phone number" />
                <AppText>
                    Enter OTP
                    <AppTextInput   />
                </AppText>

                <AppText>Change Email</AppText>
                <AppText>{currentEmail}</AppText>
                <AppTextInput icon="email" placeholder="New Email" />
                <AppText>
                    Enter OTP
                    <AppTextInput   />
                </AppText>

                <AppText>Change Profile Name</AppText>
                <AppText>{currentProfileName}</AppText>
                <AppTextInput icon="account" placeholder="New Profile name" />
                <AppText>
                    Enter OTP
                    <AppTextInput   />
                </AppText>

                <AppText>Change Password</AppText>
                <AppText>Enter Old Password</AppText>
                <AppTextInput icon="lock" placeholder="Old Password" secureTextEntry />
                <AppText>Enter New Password</AppText>
                <AppTextInput icon="lock" placeholder="New Password" secureTextEntry />

            </ScrollView>            
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});

export default ProfileEditScreen;
