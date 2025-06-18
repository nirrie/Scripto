import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function WelcomeScreen({ onLogin, onRegister }: {
    onLogin: () => void;
    onRegister: () => void;
}) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Scripto!</Text>
          <Text style={styles.description}>Scripto is a simple note app where your notes are safely stored in your personal account.
              It is designed to be easy to use, with not to many features, so you can focus on writing your notes!
      </Text>
          <Pressable style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => {console.log("Register pressed"); onRegister();}}>
              <Text style={styles.buttonText}>Register</Text>
              </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBEDE0',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#B88566',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 40,
        color: '#333',
    },
    button: {
        backgroundColor: '#B88566',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
    },
    });

