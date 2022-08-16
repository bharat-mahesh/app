import { View, StyleSheet } from 'react-native';
import ProfileCard from '../unusedComponents/ProfileCard';
import Screen from '../../components/Screen';

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
