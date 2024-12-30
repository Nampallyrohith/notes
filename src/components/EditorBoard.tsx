import { useState } from "react";
import OwnEditor from "./OwnEditor";
import NotesList from "./NotesList";

export type Notes = {
  id: string;
  content: string;
};

const EditorBoard = () => {
  const [notes, setNotes] = useState<Notes[]>([]);

  const handleNotesList = (list: Notes) => {
    setNotes((prevState) => [...prevState, list]);
  };
  return (
    <section className="w-full h-full flex justify-between">
      <OwnEditor handleNotesList={handleNotesList}/>
      <NotesList notes={notes} />
    </section>
  );
};

export default EditorBoard;
