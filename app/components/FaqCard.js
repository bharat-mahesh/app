import { StyleSheet } from 'react-native';

import AppText from './ui/Text';


const FaqCard = ( { children, sectionHeader } ) => {

    return (
        <>
            <AppText style={styles.sectionHeader}>
                { sectionHeader }
            </AppText>

            {children}
        </>
    );
}

const styles = StyleSheet.create({

    sectionHeader: {
        fontFamily: "Nunito_Bold",
        fontSize: 18,
        paddingTop: 20,
        paddingBottom: 10,
    },
});

export default FaqCard;