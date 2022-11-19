import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import colors from '../config/colors'

function Card() {
  return (
    <View style={styles.card}>
      <Text>Hi</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20
  }
})

export default Card