import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useRef } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Icon from "../assets/icons/index";
import BackButton from "@/components/BackButton";
import InputField from "@/components/InputField";
import { hp, wp } from "@/helpers/common";
import Button from "@/components/Button";
import theme from "@/constants/theme";

const SignUp = () => {
  const emailRef = useRef("");
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const Submit = () => {
    const username = usernameRef.current;
    const email = emailRef.current;
    const password = passwordRef.current;
    
    // checking
    if (!username || !email || !password) {
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
  };

  return (
    <ScreenWrapper bg="white">
      <BackButton />
      <View style={styles.container}>
        <View style={{ paddingTop: hp(10), gap: hp(2) }}>
          <Text style={styles.welcomeText}>Hello,</Text>
          <Text style={styles.welcomeText}>Signup to continue</Text>
        </View>
        <View style={styles.inputContainer}>
          {/* input fields */}
          <InputField placeholder="email" icons="mail" inputRef={emailRef} />
          <InputField placeholder="username" icons="user" inputRef={usernameRef} />
          <InputField
            placeholder="Password"
            icons="lock"
            inputRef={passwordRef}
            secureTextEntry
          />
          <Button title="SignUp" onPress={Submit} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: wp(5),
    paddingHorizontal: hp(5),
    gap: hp(5),
  },

  welcomeText: {
    color: theme.color.textLight,
    fontSize: wp(8),
    fontWeight: "bold",
  },

  inputContainer: {
    gap: hp(2),
  },
});
