import { StyleSheet, View, Platform, StatusBar } from 'react-native';

const Screen = ( { children, style } ) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});

export default Screen;