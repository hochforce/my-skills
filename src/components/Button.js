import React from "react"
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Button({ onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={.7}
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText} >Add</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  }
})