import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
//Themed Coomponents
import ThemedView from '../../components/ThemedView'
import ThemedLogo from '../../components/ThemedLogo'
import ThemedCard from '../../components/ThemedCard'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'

const Register = () => {
  return (
    <ThemedView style={styles.container}>
        <Spacer />
    <ThemedText title={true} style={styles.title}>
    Register to your Account   
    </ThemedText> 

    <Spacer height={100}/>
    <Link href="/login">
    <ThemedText style={{textAlign: 'center'}}>
        Login 
    </ThemedText>
    </Link>

    </ThemedView>
  )
}

export default Register

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
})