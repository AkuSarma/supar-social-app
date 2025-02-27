import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Icon from '@/assets/icons'

const InputField = (props: { placeholder: string, icons: string, inputRef: React.RefObject<string>, secureTextEntry?: boolean }) => {
  return (
    <View style={styles.inputContainer}>
      {props.icons && <Icon name={props.icons} style={styles.icon} />}
      <TextInput 
        style={styles.input}
        placeholder={props.placeholder} 
        onChangeText={(text) => {
          if (props.inputRef && props.inputRef.current) {
            (props.inputRef.current as any).value = text;
          }
        }} 
        secureTextEntry={props.secureTextEntry} 
      />
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
})