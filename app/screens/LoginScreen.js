import { Image, ScrollView, StyleSheet, View } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { AppFormField, SubmitButton } from '../components/forms';
import AppButton from '../components/Button';
import Header from '../components/Header';
import Screen from '../components/Screen';

import colors from '../configs/colors';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
})

//Dummy login Credentials
const LoginCredentials = {
    email: "sushil.maurya@somaiya.edu",
    password: "123456"
}

const LoginScreen = ( { navigation } ) => {

    return (
        <Screen style={styles.container}>

            <Header headerStyles={styles.header} title="Login" />

            <View style={styles.logo}>
                <Image style={styles.imgLogo} />
            </View>

            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {() => (

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            name="email"
                            placeholder="Email"
                            textContentType="emailAddress"
                        />

                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            name="password"
                            placeholder="Password"
                            secureTextEntry={true}
                            textContentType="password"
                        />

                        <SubmitButton title="Login" />

                        <AppButton
                            color={colors.light}
                            fontWeight="400"
                            onPress={() => navigation.navigate("Register")}
                            textColor="primary"
                            title="Don't have an account yet? Signup"
                        />

                    </ScrollView>
                )}
            </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    header: {
        marginBottom: -30,
    },

    logo: {
        alignSelf: 'center',
        backgroundColor: colors.primary, // placeholder
        borderRadius: 20,
        height: 80,
        marginBottom: 20,
        marginTop: 50,
        width: 80,
    },

    // imgLogo: {
    //     alignSelf: "center",
    //     borderColor: colors.medium,
    //     borderWidth: 1,
    //     height: 80,
    //     width: 80,
    // }
})

export default LoginScreen;