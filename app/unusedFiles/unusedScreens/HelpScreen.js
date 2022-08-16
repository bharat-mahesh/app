import { ScrollView, StyleSheet, View  } from 'react-native';

import AppText from '../../components/ui/Text';
import Screen from '../../components/Screen';
import Header from '../../components/ui/Header';
import Icon from '../unusedComponents/Icon';
import colors from '../../configs/colors';

const HelpScreen = ( props ) => {
    return (
        <Screen style={styles.container}>
            <Header title="Help Center" />

            <View style={styles.textContainer}>
                <AppText style={styles.sectionHeader}>
                    FAQs
                </AppText>

                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <View style={styles.faqContainer}>
                        <View style={styles.questContainer}>
                            <AppText style={styles.questionNo}>
                                1.
                            </AppText>
                            <AppText style={styles.question}>
                                What will be time for delivery after placing order?
                            </AppText>
                        </View>

                        <View style={styles.ansContainer}>
                            <Icon name="arrow-right" iconColor={colors.black} backgroundColor={colors.light} />
        
                            <AppText style={styles.answer}>
                                {'\t\t\t'}We try our every possible effort to deliver you within 24 hours of placing order.
                            </AppText>
                        </View>
                    </View>
    
                    <View style={styles.faqContainer}>
                        <View style={styles.questContainer}>
                            <AppText style={styles.questionNo}>
                                2.
                            </AppText>
                            <AppText style={styles.question}>
                                How do we assure genuine quality of products?
                            </AppText>
                        </View>

                        <View style={styles.ansContainer}>
                            <Icon name="arrow-right" iconColor={colors.black} backgroundColor={colors.light} />
        
                            <AppText style={styles.answer}>
                                {'\t\t\t'}We go through a process of verification to connect you to the genuine dairy farmers. We aim at minimizing the middleman which leads to reduction in duplication of milk.
                            </AppText>
                        </View>
                    </View>

                    <View style={styles.faqContainer}>
                        <View style={styles.questContainer}>
                            <AppText style={styles.questionNo}>
                                3.
                            </AppText>
                            <AppText style={styles.question}>
                                How do we assure genuine quality of products?
                            </AppText>
                        </View>

                        <View style={styles.ansContainer}>
                            <Icon name="arrow-right" iconColor={colors.black} backgroundColor={colors.light} />
        
                            <AppText style={styles.answer}>
                                {'\t\t\t'}We go through a process of verification to connect you to the genuine dairy farmers. We aim at minimizing the middleman which leads to reduction in duplication of milk.
                            </AppText>
                        </View>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.footer}>
                <AppText style={styles.text}>Contact Us: +91 89868 30255</AppText>

                <AppText style={styles.text}>Email Us: TeamMerci.SIH@gmail.edu</AppText>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: { },

    textContainer: {
        paddingTop: 20,
        flex: 1,
    },

    sectionHeader: {
        fontSize: 24,
        paddingHorizontal: 20,
        paddingBottom: 10,
        borderBottomColor: colors.medium,
        borderWidth: 1,
        borderColor: colors.white,
        fontFamily: "Lato_BoldItalic",
    },

    scrollView: {
        paddingHorizontal: 20,
    },

    faqContainer: {
        borderWidth: 5,
        borderColor: colors.white,
        paddingBottom: 20,
        borderBottomColor: colors.light,
    },

    questContainer: {
        flexDirection: "row",
        marginTop: 20,
        fontSize: 20,
        marginBottom: 5,
    },

    questionNo: {
        fontSize: 20,
        width: 40,
        textAlign: "center",
        alignSelf: "center"
    },

    question: {
        fontSize: 20,
        flex: 1,
        paddingLeft: 10,
    },

    ansContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    answer: {
        fontSize: 20,
        paddingLeft: 10,
        flex: 1,
    },

    footer: {
        borderWidth: 0.5,
        borderColor: colors.white,
        borderTopColor: colors.medium,
        marginTop: 20,
        paddingTop: 10,
        bottom: 20,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },

    text: {
        fontSize: 16,
        color: colors.medium,
    },
});

export default HelpScreen;
