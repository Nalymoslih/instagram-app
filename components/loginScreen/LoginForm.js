import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import Validator from 'email-validator';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const LoginForm = ({navigation}) => {
  const db = firestore();
  const LoginFormSchema = yup.object().shape({
    email: yup.string().email().required('An email is required'),
    password: yup
      .string()
      .required('A password is required')
      .min(6, 'Password is too short - should be 8 chars minimum.'),
  });
  const onLogin = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert(
        'My Lord...',
        error.message + '\n\n... what would you like to do next? 👀',
      );
    }
  };
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={async values => {
          onLogin(values.email, values.password);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}>
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
          <>
            <View
              style={[
                styles.inputField,

                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholder="Phone number, username, or email"
                placeholderTextColor={'#444'}
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}></TextInput>
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholder="Password"
                placeholderTextColor={'#444'}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}></TextInput>
            </View>
            <View style={{alignItems: 'flex-end', marginBottom: 30}}>
              <Text style={{color: '#6BB0F5'}}>Forgot password?</Text>
            </View>
            <Pressable
              title="Log In"
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
            <Text style={styles.buttonText}>Log In</Text>

            <View style={styles.signUpContainer}>
              <Text>Dont't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
                <Text style={{color: '#6BB0F5'}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    backgroundColor: '#fafafa',
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
  },
  button: isValid => ({
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
    borderRadius: 4,
    borderColor: '#0096F6',
    borderWidth: 1,
    minHeight: 40,
  }),
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    width: '100%',
  },
});

export default LoginForm;
