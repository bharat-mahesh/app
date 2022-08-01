import { Image, ScrollView, StyleSheet, View } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { AppFormField, SubmitButton } from '../components/forms';
import AppButton from '../components/Button';
import Header from '../components/Header';
import Screen from '../components/Screen';

import colors from '../configs/colors';

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const phoneRegExp = /^[1-9]{10}$/

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    phoneNo: Yup.string().required().label("Phone Number").matches(phoneRegExp, 'Phone Number is not Valid'),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
    confirmPassword: Yup.string().required().min(6).label("Password Confirmation").oneOf([Yup.ref('password')], 'Passwords do not match')
})

const RegisterScreen = ( { navigation } ) => {

    return (
        <Screen style={styles.container}>
            
            <Header headerStyles={styles.header} title="SignUp" />

            <View style={styles.logo}>
                <Image style={styles.imgLogo} />
            </View>

            <Formik
                initialValues={{
                    name: "",
                    phoneNo: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {() => (
                    <ScrollView showsVerticalScrollIndicator={false} >

                        <AppFormField
                            autoCapitalize="words"
                            autoCorrect={false}
                            icon="account"
                            name="name"
                            placeholder="Name"
                        />

                        <AppFormField
                            icon="phone"
                            keyboardType="phone-pad"
                            maxLength={10}
                            name="phoneNo"
                            placeholder="Phone Number"
                        />

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

                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            secureTextEntry={true}
                            textContentType="password"
                        />

                        <SubmitButton title="SignUp" />
                        
                        <AppButton
                            color={colors.light}
                            fontWeight="400"
                            onPress={() => navigation.navigate("Login")}
                            textColor="primary"
                            title="Already have an account? Login"
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

export default RegisterScreen;