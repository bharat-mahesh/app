import { Image, ScrollView, StyleSheet, View } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { FormField, SubmitButton } from '../../components/forms';
import AppButton from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import Screen from '../../components/Screen';

import colors from '../../configs/colors';

import routes from '../../navigation/routes';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
});


//Dummy login Credentials
const LoginCredentials = {
    email: "sushil.maurya@somaiya.edu",
    password: "123456"
};


const LoginScreen = ( { navigation } ) => {

    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header title="Login" />

                <View style={styles.logo}>
                    <Image style={styles.imgLogo} source={require("../../assets/logo_app_13-08-2022.png")} />
                </View>

                <View style={styles.formContainer}>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values) => console.log(values)}  // dummy placeholder
                        validationSchema={validationSchema}
                    >
                        {() => (
                            <>
                                <FormField
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="email"
                                    keyboardType="email-address"
                                    name="email"
                                    placeholder="Email"
                                    textContentType="emailAddress"
                                />

                                <FormField
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
                </View>
                
                <AppButton
                    color={colors.light}
                    fontWeight="400"
                    onPress={() => navigation.navigate(routes.REGISTER)}
                    textColor="primary"
                    title="Don't have an account yet? Signup"
                />
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({

    logo: {
        alignSelf: 'center',
        borderRadius: 20,
        height: 80,
        marginBottom: 50,
        marginTop: 50,
        width: 80,
    },

    imgLogo: {
        alignSelf: "center",
        height: 130,
        width: 130,
    },

    formContainer: {
        paddingHorizontal: 10,
    },
})

export default LoginScreen;