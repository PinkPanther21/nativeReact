import { StyleSheet } from "react-native";
import Spacer from "../../components/Spacer";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

const Books = () => {
  return (
    <ThemedView safe={true}>

      <ThemedText title={true} style={styles.heading}>
        All Books
      </ThemedText>
      {/* <Spacer /> */}

    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignContent: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: 30
  },
});
