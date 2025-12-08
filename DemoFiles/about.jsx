import { StyleSheet, Text,useColorScheme, View } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'



const About = () => {
  
  return (
    <ThemedView style={[styles.container]}>
      <ThemedText style={[styles.title ]}>About Page here</ThemedText>

      <Link href="/" style={styles.link}>
      <ThemedText>Back Home</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#FFFAFA',
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