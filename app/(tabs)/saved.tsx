import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useNoteStore } from "@/lib/useNoteStore";

export default function SavedNotes() {
  const notes = useNoteStore((state) => state.notes);

  return (
    <LinearGradient
      colors={['#B88566', '#FAC3A5', '#FBEDE0']}
      locations={[0, 0.5, 1]}
        style={styles.container}
        >
      <Text style={styles.title}>Saved notes</Text>

       <Image
              source={require('@/assets/images/splash.png')}
              style={styles.backgroundImage}
            />

      <ScrollView contentContainerStyle={styles.notesContainer}>
        <View style={styles.notesWrapper}>
        {notes.length === 0 ? (
          <Text style={styles.noNotesText}>No notes saved yet...</Text>
        ) : (
            notes.map((note, index) => (
              <View key={index} style={styles.noteCard}>
                <Text style={styles.noteText}>{note}</Text>
              </View>
            ))
          )}
          </View>
      </ScrollView>
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
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 120,
    height: 120,
    opacity: 0.5,
    resizeMode: 'contain',
  },
  notesContainer: {
  paddingBottom: 100,
  },
  notesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  noteCard: {
    backgroundColor: "#FBEDE0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    width: '48%',
    height: 120,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  noteText: {
    fontSize: 16,
    color: "#333",
    fontFamily: "Roboto",
  },
  noNotesText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Roboto",
  },
  button: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
});

