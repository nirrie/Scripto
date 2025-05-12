import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/.expo/components/Button";



export default function Index() {
  return (
    <LinearGradient
      colors={['#B88566', '#FAC3A5' , '#FBEDE0']}
        locations={[0, 0.5, 1]}
        style={styles.container}
      >
        <Text style={styles.text}>Scripto</Text>
      
      
      <Link href="/saved" style={styles.button}>
      </Link>
      <Button icon="add-circle-outline" style={styles.footerContainer} />
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
  text: {
    fontSize: 20,
    color: 'white',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

