import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTES_KEY = "scripto_notes";

export async function getNotes(): Promise<string[]> {
    const json = await AsyncStorage.getItem(NOTES_KEY);
    return json ? JSON.parse(json) : [];
}

export async function saveNote(note: string): Promise<void> {
    const notes = await getNotes();
    notes.push(note);
    await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

export async function deleteNote(note: string): Promise<void> {
    await AsyncStorage.removeItem(NOTES_KEY);
}