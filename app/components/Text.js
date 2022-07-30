import { Text, StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';

const AppText = ( { children, style, ...otherProps } ) => {

    const [customFonts] = useFonts({
        Playball: require("../assets/fonts/Playball-Regular.ttf"),
        Sedgwick: require("../assets/fonts/SedgwickAveDisplay-Regular.ttf"),
        Lato: require("../assets/fonts/Lato-Regular.ttf")
    })

    if(!customFonts){
        return null;  
    }

    return (
        <Text style={[styles.text, style]} {...otherProps}>
            { children }
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        fontSize: 18,
    },
});

export default AppText;