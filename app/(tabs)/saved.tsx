import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SavedScreen() {
  return (
    <LinearGradient
      colors={['#B88566', '#FAC3A5', '#FBEDE0']}
      locations={[0, 0.5, 1]}
        style={styles.container}
        >
      <Text style={styles.title}>Saved notes</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  title: {
    fontSize: 50,
    fontFamily: 'Roboto',
    color: '#B88566',
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 20,
  },
});

