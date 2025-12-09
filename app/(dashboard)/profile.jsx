import { StyleSheet } from "react-native";
import Spacer from "../../components/Spacer";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

const Profile = ()=>{
    return (
        <ThemedView style={styles.container}>
           
          <ThemedText title={true} style={styles.heading}>
            Your Email
          </ThemedText>

          <ThemedText style={{margin: 10}}>Time to start reading some books...</ThemedText>
          <Spacer />

        </ThemedView>
    )
}

export default Profile
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    }
})