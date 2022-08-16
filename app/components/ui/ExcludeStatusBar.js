import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';


const ExcludeStatusBar = () => {

    return (
        <View style={styles.container} />
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    },
});

export default ExcludeStatusBar;