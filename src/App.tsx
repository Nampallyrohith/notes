import EditorBoard from "./components/EditorBoard";

export default function App() {
  return (
    <div className="flex flex-col items-center w-full h-full p-5">
      <h1 className="text-2xl font-semibold my-5">Notes</h1>
      <EditorBoard />
    </div>
  );
}
