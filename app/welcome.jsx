import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { hp, wp } from '../helpers/common';
import theme from '../constants/theme';
import Button from '../components/Button';
import { useRouter } from 'expo-router';

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* welcom image */}
        <Image
          source={require("../assets/images/welcome.png")}
          style={styles.welcomeImage}
          resizeMode="contain"
        />
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>Super Social</Text>
          <Text style={styles.punchLine}>Aku ka social media</Text>
        </View>
        <View style={{ gap: 30 }}>
          <Button
            title="Get Started"
            onPress={() => {router.push('SignUp')}}
          />
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <Text style={styles.signIn}>If you already have an account </Text>
            <Pressable onPress={() => {router.push('Login')}}>
              <Text style={{ color: "blue" }}>sign in!</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: wp(4),
  },

  welcomeImage: {
    width: wp(100),
    height: hp(30),
    alignSelf: "center",
  },

  title: {
    color: theme.color.text,
    fontSize: hp(4),
    fontWeight: theme.fonts.extraBold,
    textAlign: "center",
  },

  punchLine: {
    color: theme.color.text,
    fontSize: hp(1.4),
    fontWeight: theme.fonts.medium,
    textAlign: "center",
  },

  signIn:{
    color: theme.color.textLight,
    fontSize: hp(1.5),
    textAlign: "center",
  },
});