import React from "react";
import { Notes } from "./EditorBoard";

interface CardProps {
  note: Notes;
}

const NoteCard: React.FC<CardProps> = ({ note }) => {
  return (
    <div className="w-full h-[200px] border">
      <p className="truncate">{note.content}</p>
    </div>
  );
};

export default NoteCard;
