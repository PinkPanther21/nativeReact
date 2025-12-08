import { StyleSheet, Text,useColorScheme, View } from 'react-native'
import { Link } from 'expo-router'
import { colors } from '../constants/Colors'


const About = () => {
  const colorScheme = useColorScheme()
  const theme = colors[colorScheme] ?? colors.light
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.title , {color: theme.text}]}>About Page here</Text>

      <Link href="/" style={styles.link}>Back Home</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFAFA',
        alignItems: 'center',
        justifyContent: "center"
    },
    title: {
     fontWeight: 'bold',
     fontSize: 22
    }, 
    link :{
        marginVertical: 10,
        borderBottomWidth: 1
    }
})