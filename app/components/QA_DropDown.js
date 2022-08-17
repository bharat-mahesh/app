import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { FontAwesome } from "@expo/vector-icons";

import AppText from './ui/Text';

import colors from '../configs/colors';
import ListItemSeparator from './ui/ListItemSeparator';


const QA_DropDown = ( { answer, question } ) => {

    const [collapsed, setCollapsed] = useState(true);

    const handleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (

        <>
            <View>
                <TouchableOpacity activeOpacity={1} onPress={() => handleCollapse()} style={styles.questionContainer}>
                    {
                        collapsed
                        ?
                        (
                            <FontAwesome color={colors.primary} name="caret-down" size={20} />
                        )
                        :
                        (
                            <FontAwesome color={colors.primary} name="caret-up" size={20} />
                        )
                    }

                    <AppText style={styles.questionText}>
                        { question }
                    </AppText>
                </TouchableOpacity>

                {
                    collapsed
                    ?
                    null
                    :
                    (
                        <AppText style={styles.answerText}>
                            { answer }
                        </AppText>
                    )
                }
            </View>

            <ListItemSeparator width="100%" color={colors.light_darker} />
        </>
    );
}

const styles = StyleSheet.create({

    questionContainer: {
        flexDirection: "row",
    },
    
    questionText: {
        fontFamily: "Nunito_Bold",
        fontSize: 15,
        paddingLeft: 10,
    },

    answerText: {
        color: colors.medium,
        fontFamily: "Nunito_Light",
        fontSize: 15,
        paddingLeft: 22,
    },
});

export default QA_DropDown;