import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { colors } from '../constants/Colors'
import React from 'react'

const ThemedCard = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme] ?? colors.light

  return (
    <View style={[styles.card, { backgroundColor: theme.uiBackground }, style]}
    {...props}
    >
      {children}
    </View>
  )
}

export default ThemedCard

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 10,
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android shadow
    elevation: 3,
    marginVertical: 10,
  },
})
