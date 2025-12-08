import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { colors } from '../constants/Colors'

const ThemedView = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme] ?? colors.light
  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props}>
      {children}
    </View>
  )
}


export default ThemedView

const styles = StyleSheet.create({})