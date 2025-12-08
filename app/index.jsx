import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import anime from '../assets/img/ani1.png'

const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={anime} style={{width: 50, height: 50}}/>
      <Text style={styles.title}>First React Native Practice App</Text>
      <Text>Trying 😭</Text>

      <View style={styles.card}>
        <Text>This is card here!</Text>
      </View>

      <Link href="/about" style={styles.link}>About</Link>
      <Link href="/contact" style={styles.link}>Contacts</Link>
    </View>
  )
}

export default Home

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
    card: {
      backgroundColor : '#eee',
      marginTop: 15,
      padding: 20,
      borderRadius: 5,
      boxShadow: '4px 4px rgba(0,0,0,0.1)'
    },
    link :{
        marginTop: 10,
        marginVertical: 10,
        borderBottomWidth: 1
    }
})