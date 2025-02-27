import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useRef } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Icon from '../assets/icons/index';
import BackButton from '@/components/BackButton'
import InputField from '@/components/InputField';
import { hp, wp } from '@/helpers/common';
import Button from '@/components/Button';
import theme from '@/constants/theme';

const Login = () => {
    const emailRef = useRef("");
  const passwordRef = useRef('');

  const Submit = () => {
    const email = emailRef.current;
    const password = passwordRef.current;

    // checking
    if ( !email || !password) {
      alert("Please fill all the fields");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email address");
      return;
    }
  }

  return (
    <ScreenWrapper bg="white">
      <BackButton />
      <View style={styles.container}>
        <View style={{paddingTop: hp(10), gap: hp(2)}}>
          <Text style={styles.welcomeText}>Hi,</Text>
          <Text style={styles.welcomeText}>Welcome back</Text>
        </View>
        <View style={styles.inputContainer}>
          {/* input fields */}
          <InputField
            placeholder="email"
            icons="mail"
            inputRef={emailRef}
          />
          <InputField
            placeholder="Password"
            icons="lock"
            inputRef={passwordRef}
            secureTextEntry
          />
          <Button title="Login" onPress={Submit} />
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingVertical: wp(5),
    paddingHorizontal: hp(5),
    gap: hp(5)
  },

  welcomeText:{
    color: theme.color.textLight,
    fontSize: wp(10),
    fontWeight: 'bold',
  },

  inputContainer: {
    gap: hp(2),
  },
});