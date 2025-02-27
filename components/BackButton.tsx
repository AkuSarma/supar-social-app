import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Icon from '@/assets/icons/index';
import { useRouter } from 'expo-router';
import { hp } from '@/helpers/common';
import theme from '@/constants/theme';

const BackButton = () => {
    const router = useRouter()
  return (
    <Pressable onPress={() => router.back()} style={styles.backButton}>
      <Icon name="arrowLeft" strokeWidth='2.4'/>
    </Pressable>
  );
}

export default BackButton

const styles = StyleSheet.create({
    backButton: {
        position: 'relative',
        top: 20,
        left: 20,
        backgroundColor: theme.color.darkLight,
        width: hp(5),
        height: hp(5),
        borderRadius: theme.radius.xl,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})