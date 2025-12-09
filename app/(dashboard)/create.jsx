import { StyleSheet } from "react-native";
import Spacer from "../../components/Spacer";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

const Create = ()=>{
    return (
        <ThemedView>
         
         <ThemedText title={true} style={styles.heading}>
            Add a New Book
         </ThemedText>
         <Spacer />

        </ThemedView>
    )
}

export default Create

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
        marginTop: 30
    }
})