
// Maybe Delete it: 31-07-2022, 12:33pm

import { View, StyleSheet } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import Screen from '../components/Screen';

const UploadDocScreen = ( props ) => {
    return (
        <Screen style={styles.container}>
            <ProfileCard cardTitle="Verification" line1="Select Documents to Upload" iconName="upload" />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});

export default UploadDocScreen;
