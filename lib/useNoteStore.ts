import { create } from 'zustand';

interface NoteStore {
    notes: string[];
    addNote: (note: string) => void;
    clearNotes: () => void;
}

export const useNoteStore = create<NoteStore>((set) => ({
    notes: [],
    addNote: (note) =>
        set((state) => ({
            notes: [note, ...state.notes],
        })),
    clearNotes: () => set({ notes: [] }),

}));