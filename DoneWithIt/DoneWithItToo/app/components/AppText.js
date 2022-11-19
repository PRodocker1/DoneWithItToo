import React from 'react'
import { Text, StyleProp, Platform } from 'react-native'

// import styles from './styles'

const AppText = ({ children }) => {
  return (
      <Text style={styles.text}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  }
})

export default AppText; 