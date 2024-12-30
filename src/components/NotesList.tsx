import React from "react";
import { Notes } from "./EditorBoard";
import NoteCard from "./NoteCard";

interface notesListProps {
  notes: Notes[];
}

const NotesList: React.FC<notesListProps> = ({ notes }) => {
  return (
    <section>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </section>
  );
};

export default NotesList;
