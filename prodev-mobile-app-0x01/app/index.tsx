import { Text, View } from "react-native";
import styles from "../components/styles/styles";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      
    >
      <Text>Entry Screen Awesome</Text>
      <Text style={styles.largeText}>Typescript is great if you practice more</Text>
      <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
      <Text style={styles.smallText}>ALX is awesome</Text>
    </View>
  );
}
