import { View, StyleSheet } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppFormField, SubmitButton } from '../components/forms';
import colors from '../configs/colors';
import ScreenHeader from '../components/ScreenHeader';
import AppButton from '../components/Button';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
})

const LoginScreen = () => {

    return (
        <Screen style={styles.container}>

            <ScreenHeader headerStyles={styles.header} title="Login" onPress={() => console.log("Back pressed")} />

            <View style={styles.logo}/>

            <Formik
                initialValues={{ email: "", password: "" }}
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

                        <SubmitButton title="Login" />

                        <AppButton title="Don't have an account yet? Signup" color={colors.light} textColor="primary" fontWeight="400" />
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

export default LoginScreen;