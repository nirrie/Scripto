import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { saveNote } from "@/lib/storage";

type Props = {
    onClose: () => void;
};

export default function Note({onClose}: Props) {
    const [note, setNote] = useState("");

    const handleSaveNote = async () => {
        if (note.trim()) {
            await saveNote(note);
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
            <Pressable style={styles.Button} onPress={() => alert("Note saved!")}>
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