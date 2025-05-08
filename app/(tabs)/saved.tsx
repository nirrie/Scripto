import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SavedScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(244, 109, 221, 0.8)', 'transparent']}
        style={styles.background}
        />
      <LinearGradient
      colors={['#4c669f', ' #192f6a']}
      style={styles.button}>
      <Text style={styles.text}>Saved notes</Text>
    </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 20,
    color: 'white',
  },
});

