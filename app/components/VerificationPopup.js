import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../configs/colors';

const VerificationPopup = ( props ) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    }

    return (
        <>
            {
                isPressed == false
                ?
                (
                    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
                        <MaterialCommunityIcons style={styles.btn} name="plus" size={35}/>
                    </TouchableOpacity>
                )
                :
                (
                    <Modal visible={isPressed} animationType='slide'>
                        <MaterialCommunityIcons name='upload' size={20} onPress={handlePress}/>
                    </Modal>
                )
            }
            
        </>
    );
}

const styles = StyleSheet.create({

    btnContainer: {
        width: "100%",
    },

    btn: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.danger,
    },
});

export default VerificationPopup;
