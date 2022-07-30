import { View, StyleSheet } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppFormField, SubmitButton } from '../components/forms';
import colors from '../configs/colors';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
})

const LoginScreen = () => {

    return (
        <Screen style={styles.container}>
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