import {Modal, Text, View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Keyboard } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/.expo/components/Button";
import Note from "@/.expo/components/Note";



export default function Index() {
  const router = useRouter();
  const [ShowNote, setShowNote] = useState(false);
  
  return (
    <LinearGradient
      colors={['#B88566', '#FAC3A5' , '#FBEDE0']}
        locations={[0, 0.5, 1]}
        style={styles.container}
      >
        <Text style={styles.title}>Scripto</Text>
      
      
      <Link href="/saved" style={styles.button}>
      </Link>
      <Button
        icon="add-circle-outline" style={styles.footerContainer}
        onPress={() => setShowNote(true)}
      />
      {/*Modal for note*/}
      <Modal visible={ShowNote} animationType="slide" transparent={true}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.noteWrapper}>
                <Note onClose={() => setShowNote(false)} />
              </View>
          </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>


      </Modal>
              </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontFamily: 'Roboto',
    color: '#B88566',
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 20,
  },
  button: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  noteWrapper: {
    width: "90%",
    backgroundColor: "#FBEDE0",
    borderRadius: 12,
    padding: 20,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

