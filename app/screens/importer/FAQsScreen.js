import { ScrollView, StyleSheet, TouchableWithoutFeedback, View  } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from '../../components/ui/Text';
import FaqCard from '../../components/FaqCard';
import Header from '../../components/ui/Header';
import QA_DropDown from '../../components/QA_DropDown';
import Screen from '../../components/Screen';
import SectionSeparator from '../../components/ui/SectionSeparator';

import colors from '../../configs/colors';

import { faqsData } from '../../mock/faqsData';
import { user } from "../../mock/userData";


const FAQsScreen = ( props ) => {

    return (
        <Screen>
            <Header title="Help Center" />

            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.locationContainer}>
                    <MaterialCommunityIcons color={colors.medium} name="map-marker" size={20} />

                    <AppText style={styles.location}>
                        {user.userName} - {user.city}
                        {'  '}
                        <AppText style={styles.zipcode}>{user.zipcode}</AppText>
                    </AppText>
                </View>

                <AppText style={styles.FAQsText}>
                    FAQs
                </AppText>

                <View style={styles.textContainer}>
                    <AppText style={styles.sectionHeader}>
                        Frequently Asked Questions:
                    </AppText>

                    <AppText style={styles.faq_descp}>
                        Check out this section to get answers for all the frequently asked questions.
                    </AppText>

                    <FaqCard sectionHeader={ faqsData[0].sectionHeader } >
                        <QA_DropDown
                            answer={ faqsData[0].QAs[0].answer }
                            question={ faqsData[0].QAs[0].question }
                        />

                        <QA_DropDown
                            answer={ faqsData[0].QAs[1].answer }
                            question={ faqsData[0].QAs[1].question }
                        />

                        <QA_DropDown
                            answer={ faqsData[0].QAs[2].answer }
                            question={ faqsData[0].QAs[2].question }
                        />
                    </FaqCard>

                    <AppText style={styles.haveIssueText}>
                        Have an issue with your order?
                    </AppText>

                    <AppText style={styles.issue}>
                        Call us on: +91 11111 11111
                    </AppText>

                    <AppText style={styles.issue}>
                        8:00 AM to 8:00 PM, 365 days
                    </AppText>

                    <AppText style={styles.issue}>
                        Log a complaint: {' '}
                        <TouchableWithoutFeedback
                            onPress={() => console.log("Redirect to email app")}
                            style={styles.clickHereBtn}
                        >
                                <AppText style={styles.clickHereText}>Click Here</AppText>
                        </TouchableWithoutFeedback>
                    </AppText>

                    <AppText style={styles.issue}>
                        See previously raised complaints: {' '}
                        <TouchableWithoutFeedback
                            onPress={() => console.log("Redirect to complaints page")}
                            style={styles.clickHereBtn}
                        >
                                <AppText style={styles.clickHereText}>Click Here</AppText>
                        </TouchableWithoutFeedback>
                    </AppText>
                </View>

                <SectionSeparator />
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({

    // Scroll Container of all FAQs
    scrollContainer: {
        backgroundColor: colors.light,
        flex: 1,
    },

    // User's delivery Address
    locationContainer: {
        alignItems: "center",
        backgroundColor: colors.light_darker,
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 7,
    },

    location: {
        fontFamily: "Nunito_Regular",
        fontSize: 12,
        paddingLeft: 4,
        textDecorationLine: 'underline',
    },

    zipcode: {
        fontFamily: "Nunito_Bold",
        fontSize: 12,
    },

    // FAQs page heading 
    FAQsText: {
        fontFamily: "Nunito_Bold",
        fontSize: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    textContainer: {
        borderRadius: 10,
        backgroundColor: colors.white,
        margin: 5,
        padding: 10,
    },

    sectionHeader: {
        fontFamily: "Nunito_Bold",
        fontSize: 18,
        paddingTop: 10,
    },

    faq_descp: {
        color: colors.medium,
        fontFamily: "Nunito_Light",
        fontSize: 16,
    },

    // Footer Section
    haveIssueText: {
        color: colors.medium,
        fontFamily: "Nunito_Bold",
        fontSize: 14,
        paddingBottom: 20,
        paddingTop: 10,
    },

    issue: {
        color: colors.medium,
        fontFamily: "Nunito_Light",
        fontSize: 14,
        paddingBottom: 10,
    },

    clickHereText: {
        color: colors.hyperlink,
        fontSize: 14,
    },
});

export default FAQsScreen;