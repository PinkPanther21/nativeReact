import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native'
import { colors } from '../constants/Colors'
import anime from '../assets/img/ani1.png'
import anime2 from '../assets/img/ani2.png'

const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? anime2 : anime 
  return (
    <Image source={logo} {...props}/>
  )
}

export default ThemedLogo

const styles = StyleSheet.create({})