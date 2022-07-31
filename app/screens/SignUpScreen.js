import { View, StyleSheet } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppFormField, SubmitButton } from '../components/forms';
import colors from '../configs/colors';
import AppButton from '../components/Button';
import ScreenHeader from '../components/ScreenHeader';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
    confirmPassword: Yup.string().required().min(6).label("Password Confirmation").oneOf([Yup.ref('password')], 'Passwords do not match')
})

const SignUpScreen = () => {

    return (
        <Screen style={styles.container}>
            
            <ScreenHeader headerStyles={styles.header} title="SignUp" onPress={() => console.log("Back pressed")} />

            <View style={styles.logo}/>

            <Formik
                initialValues={{ email: "", password: "", confirmPassword: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {() => (
                    <>
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyBoardType="email-address"
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
                        
                        <AppButton title="Already have an account? Login" color={colors.light} textColor="primary" fontWeight="400" />
                    </>
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
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
        backgroundColor: colors.primary, // placeholder
    },
})

export default SignUpScreen;