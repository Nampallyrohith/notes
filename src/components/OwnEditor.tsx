import { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import { v4 as uuidv4 } from "uuid";
import "draft-js/dist/Draft.css";
import {
  RiBold,
  RiItalic,
  RiListOrdered,
  RiListUnordered,
  RiUnderline,
} from "react-icons/ri";
import { IoMdCode } from "react-icons/io";
import {
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
  BsTypeStrikethrough,
} from "react-icons/bs";
import { Notes } from "./EditorBoard";
import { convertToRaw } from "draft-js";
import { stateToMarkdown } from "draft-js-export-markdown";

interface EditorProps {
  handleNotesList: (list: Notes) => void;
}

const OwnEditor: React.FC<EditorProps> = ({ handleNotesList }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const [note, setNote] = useState<Notes>();

  const handleKeyCommand = (command: string) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const applyStyle = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const applyBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const handleSubmitNote = () => {
    const generateId = uuidv4();

    // Get the content from the editor state
    const contentState = editorState.getCurrentContent();
    console.log(contentState);

    // Ensure conversion to raw format
    const rawContent = convertToRaw(contentState);
    console.log(rawContent);

    // Generate markdown
    // const markdownContent = rawContent.blocks
    //   .map((block) => block.text)
    //   .join("\n");
    const markdownContent = stateToMarkdown(rawContent);
    console.log(markdownContent);

    handleNotesList({ id: generateId, content: markdownContent });
  };
  return (
    <section className="w-[45%] h-full border rounded-lg flex flex-col">
      <div className="space-x-3 p-3">
        <button
          className="hover:border hover:border-gray-300 rounded-md p-1"
          onClick={() => applyStyle("BOLD")}
        >
          <RiBold />
        </button>
        <button
          className="hover:border hover:border-gray-300 rounded-md p-1"
          onClick={() => applyStyle("ITALIC")}
        >
          <RiItalic />
        </button>
        <button
          className="hover:border hover:border-gray-300 rounded-md p-1"
          onClick={() => applyStyle("UNDERLINE")}
        >
          <RiUnderline />
        </button>
        <button
          className="hover:border hover:border-gray-300 rounded-md p-1"
          onClick={() => applyBlockType("unordered-list-item")}
        >
          <RiListUnordered />
        </button>
        <button
          className="hover:border hover:border-gray-300 rounded-md p-1"
          onClick={() => applyBlockType("ordered-list-item")}
        >
          <RiListOrdered />
        </button>
        <button
          className="hover:border hover:border-gray-300 rounded-md p-1"
          onClick={() => applyBlockType("code-block")}
        >
          <IoMdCode />
        </button>
        <button
          className="hover:border hover:border-gray-300 rounded-md p-1"
          onClick={() => applyBlockType("header-one")}
        >
          <BsTypeH1 />
        </button>
        <button
          className="hover:border hover:border-gray-300 rounded-md p-1"
          onClick={() => applyBlockType("header-two")}
        >
          <BsTypeH2 />
        </button>
        <button
          className="hover:border hover:border-gray-300 rounded-md p-1"
          onClick={() => applyBlockType("header-three")}
        >
          <BsTypeH3 />
        </button>
        <button
          className="hover:border hover:border-gray-300 rounded-md p-1"
          onClick={() => applyStyle("STRIKETHROUGH")}
        >
          <BsTypeStrikethrough />
        </button>
      </div>
      <hr />
      <div
        style={{
          padding: "10px",
        }}
      >
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
      <div className="self-end">
        <button type="button" className="border rounded-md px-3 py-1">
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSubmitNote}
          className="border rounded-md px-3 py-1"
        >
          Save
        </button>
      </div>
    </section>
  );
};

export default OwnEditor;
