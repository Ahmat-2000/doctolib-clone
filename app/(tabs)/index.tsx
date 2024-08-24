import { StyleSheet, Text, View } from "react-native";
import { primaryColor } from "../../components/colors";
export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Page d'accueil</Text>
        <Text style={styles.subtitle}>Let's go</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: primaryColor,
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
