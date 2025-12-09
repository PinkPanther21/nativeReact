import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
//Themed Coomponents
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import ThemedCard from '../components/ThemedCard'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemedLogo style={{width: 50, height: 50}}/>
        <Spacer />
      <ThemedText style={styles.title}>First React Native Practice App</ThemedText>
      <Spacer height={20}/>
      <ThemedText>Trying 😭</ThemedText>

      <ThemedCard >
        <ThemedText>This is card here!</ThemedText>
      </ThemedCard>

      <Link href="/login" style={styles.link}> 
      <ThemedText>Login</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
      <ThemedText>Register</ThemedText>
      </Link>
      <Link href="/profile" style={styles.link}>
      <ThemedText>Profile</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Home

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