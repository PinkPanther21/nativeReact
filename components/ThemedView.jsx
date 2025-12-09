import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { colors } from '../constants/Colors'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

const ThemedView = ({ style, children, safe=false, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme] ?? colors.light

  if(!safe)  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props}>
      {children}
    </View>
  )
  const insets = useSafeAreaInsets()
  return (
     <View style={[{ backgroundColor: theme.background,
       paddingTop: insets.top,
       paddingBottom: insets.bottom,
      }, 
      style
      ]} 
      {...props}
      >
      {children}
    </View>
  )
}


export default ThemedView

const styles = StyleSheet.create({})