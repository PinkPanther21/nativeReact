import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Stack } from 'expo-router'
import { colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = colors[colorScheme] ?? colors.light
  return (
    <>
       <StatusBar value="auto"/>
      <Stack screenOptions={{
        headerStyle: {backgroundColor: theme.navBackground},
        headerTintColor: theme.title
      }}>
        
        <Stack.Screen  name="index" options={{title: 'Home'}}/>
        <Stack.Screen name="(auth)" options={{headerShown: false}}/>

        {/* <Stack.Screen  name="about" options={{title: 'About'}}/>
        <Stack.Screen  name="contact" options={{title: 'Contact'}}/> */}
      </Stack>
       
      
      {/* Footer
      <View style={{ padding: 10, alignItems: 'center' }}>
        <Text>Footer</Text>
      </View> */}
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})
