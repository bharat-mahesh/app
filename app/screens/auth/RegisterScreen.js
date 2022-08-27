import { Image, ScrollView, StyleSheet, View } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { FormField, SubmitButton } from '../../components/forms';
import AppButton from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import Screen from '../../components/Screen';

import colors from '../../configs/colors';

import routes from '../../navigation/routes';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from '../../../src/graphql/mutations';


const phoneRegExp = /^[1-9]{10}$/;

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    phoneNo: Yup.string().required().label("Phone Number").matches(phoneRegExp, 'Phone Number is not Valid'),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
    confirmPassword: Yup.string().required().min(6).label("Password Confirmation").oneOf([Yup.ref('password')], 'Passwords do not match')
});

const RegisterScreen = ( { navigation } ) => {

    const[data,setData]=useState([])

    useEffect(()=>{
        getdata();
    }
        
        ,[]
    )
    const getdata = async()=>{
        try {
            const mdata = await API.graphql(graphqlOperation(createUser))
            console.log(mdata);
            const list=mdata.data.listMilks.items
            console.log(list);
            setData(list)
        } catch (error) {
            console.log(error);
        }

    }
    console.log(data);

   
    const fetchListings = data;


    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header title="SignUp" />

                <View style={styles.logo}>
                    <Image style={styles.imgLogo} source={require("../../assets/logo_app_13-08-2022.png")} />
                </View>

                <View style={styles.formContainer}>
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
                            <>
                                <FormField
                                    autoCapitalize="words"
                                    autoCorrect={false}
                                    icon="account"
                                    name="name"
                                    placeholder="Name"
                                />

                                <FormField
                                    icon="phone"
                                    keyboardType="phone-pad"
                                    maxLength={10}
                                    name="phoneNo"
                                    placeholder="Phone Number"
                                />

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

                                <FormField
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="lock"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    secureTextEntry={true}
                                    textContentType="password"
                                />

                                <SubmitButton title="SignUp" />
                            </>
                        )}
                    </Formik>
                </View>
                                                
                <AppButton
                    color={colors.light}
                    fontWeight="400"
                    onPress={() => navigation.navigate(routes.LOGIN)}
                    textColor="primary"
                    title="Already have an account? Login"
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

export default RegisterScreen;