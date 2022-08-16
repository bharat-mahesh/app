import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal } from 'react-native';

import ModalProps from "react-native-modalbox";

import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../configs/colors';
import AppText from './ui/Text';

const VerificationPopup = ( props ) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    }

    return (
        <>
            <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
                <MaterialCommunityIcons style={styles.btn} name="plus" size={40}/>
            </TouchableOpacity>

            <ModalProps style={styles.modal} isOpen={isPressed} position="bottom">

                <AppText style={styles.modalHeading}>Verify Documents</AppText>
                
                <View style={styles.modalOptions} >
                    <View style={styles.option}>

                        <TouchableOpacity onPress={() => {
                            console.log("Upload clicked");
                            handlePress();
                        }}>

                            <Feather style={styles.icon} name='upload' size={35}/>

                        </TouchableOpacity>
                        
                        <AppText>Upload</AppText>
                    </View>

                    <View style={styles.option}>
                        <TouchableOpacity onPress={() => {
                                console.log("Camera clicked");
                                handlePress();
                            }
                        }>

                            <MaterialCommunityIcons style={styles.icon} name='camera-outline' size={35}/>

                        </TouchableOpacity>

                        <AppText>Camera</AppText>
                    </View>
                </View>
            </ModalProps>
        </>
    );
}

const styles = StyleSheet.create({

    btnContainer: {
        position: "absolute",
        bottom: 30,
        right: 25,
        width: 70,
    },

    btn: {
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 35,
        borderWidth: 1,
        borderColor: colors.medium,
        backgroundColor: colors.light,
        padding: 15,
    },

    modal: {
        height: 200,
    },

    modalHeading: {
        fontSize: 20,
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 25,
    },

    modalOptions: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    option: {
        alignItems: "center",
        justifyContent: "space-between",
        height: 110,
    },


    icon: {
        borderWidth: 1,
        borderRadius: 100,
        padding: 20,
    },
});

export default VerificationPopup;
