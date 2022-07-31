import { useState, useEffect } from 'react';

import { View, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../configs/colors';

const AppTextInput = ({ icon, ...otherProps }) => {

    const [isPass, setIsPass] = useState(false);
    const [hidePass, setHidePass] = useState(true);

    useEffect(() => {
        setIsPass(otherProps["secureTextEntry"] == true ? true : false);
    }, []);

    return (
        <View style={styles.container}>
            
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={colors.medium} />}

            <TextInput style={styles.textInput} {...otherProps} secureTextEntry={ isPass == true ? hidePass : false } />

            {
                isPass == true
                ?
                (
                    <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                        {
                            hidePass == true
                            ?
                            (
                                <MaterialCommunityIcons name="eye-off" size={20} /> 
                            )
                            :
                            (
                                <MaterialCommunityIcons name="eye" size={20} /> 
                            )
                        }
                    </TouchableOpacity>
                )
                :
                null
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
    },

    icon: {
        marginRight: 10,
    },

    textInput: {
        flex: 1,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
        color: colors.dark,
    },

})

export default AppTextInput