import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image
} from 'react-native';

export default function WelcomeScreen({ onLogin, onRegister, }: {
    onLogin: () => void;
    onRegister: () => void;
    
})

{

  return (
      <View style={styles.container}>
          <Image source={require('../assets/images/splash.png')} style={styles.image} />
      <Text style={styles.title}>Welcome to Scripto!</Text>
          <Text style={styles.description}>Scripto is a simple note app where your notes are safely stored in your personal account.
              It is designed to be easy to use, with not to many features, so you can focus on writing your notes!
          </Text>
          <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={onLogin}>
        <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => {console.log("Register pressed"); onRegister();}}>
              <Text style={styles.buttonText}>Register</Text>
              </Pressable>
              </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBEDE0',
        padding: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 20,
        marginBottom: 20,
        resizeMode: "contain",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontFamily: "Roboto",
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#B88566',
    },
    description: {
        fontFamily: "Roboto",
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 40,
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 20,
        
    },
    button: {
        flex: 1,
        backgroundColor: '#B88566',
        paddingVertical: 12,
        borderRadius: 10,
        marginHorizontal: 5,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    buttonText: {
        color: '#FFF',
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    });

