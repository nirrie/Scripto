import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { Share } from "react-native";

import { useNoteStore } from "@/lib/useNoteStore";

type Props = {
    onClose: () => void;
};

export default function Note({onClose}: Props) {
    const [note, setNote] = useState("");
    const addNote = useNoteStore((state) => state.addNote);

    const handleSaveNote = () => {
        if (note.trim()) {
            addNote(note);
            setNote("");
            onClose();
        };
    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Write your note here..."
                value={note}
                onChangeText={setNote}
                style={styles.input}
                multiline
            />
            <Pressable style={styles.Button} onPress={handleSaveNote}>
                <Text>Save Note</Text>
            </Pressable>
                
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBEDE0",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.7,
        shadowRadius: 10,
    },
    input: {
        height: "90%",
        width: "100%",
        textAlignVertical: "top",
        borderColor: "transparent",
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        backgroundColor: "transparent",
        marginBottom: 20,
    },
    Button: {
        fontFamily: "Roboto",
        fontSize: 20,
        width: "100%",
        height: 50,
        borderRadius: 6,
        backgroundColor: "#ceab96",
        justifyContent: "center",
        alignItems: "center",
    },
})