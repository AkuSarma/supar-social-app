import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import theme from '../constants/theme';
import { wp } from '../helpers/common';

const Button = (
    {title,
    onPress}
) => {
  return (
    <Pressable onPress={onPress} style={ styles.button }>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.color.primary,
    padding: 10,
    borderRadius: theme.radius.md,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: wp(80),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});