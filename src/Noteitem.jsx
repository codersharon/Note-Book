import React, { useContext } from "react";
import noteContext from "./context/noteContext";
// import Edit from "./Edit";

const Noteitem = (props) => {
  // const Editor = document.getElementById("Editor");
  // const titleEditor = document.getElementById("titleEditor");
  // const noteEditor = document.getElementById("noteEditor");
  // const tagEditor = document.getElementById("tagEditor");
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <>
      <div className="p-2 bg-slate-900 text-white mx-5 my-5 pl-6 border w-1/4 border-gray-100 rounded-xl">
        <h1 className="title-font text-lg  font-medium mb-3 border-b-[.5px] border-gray-white">
          {note.title}
        </h1>
        <p className="leading-relaxed mb-3 border-white border p-1 rounded-lg">
          {note.description}
        </p>
        <div className="flex items-center justify-start">
          <button
            onClick={() => {
              deleteNote(note._id);
            }}
            className="bg-blue-600 rounded-lg p-[1.5px] border-[2.5px] mx-0 my-2 border-blue-600 hover:bg-blue-700 hover:border-blue-500"
          >
            Delete
          </button>

          <button
            onClick={()=>{updateNote(note)}}
            className="bg-blue-600 rounded-lg p-[1.5px] px-3 border-[2.5px] mx-5 my-2 border-blue-600 hover:bg-blue-700 hover:border-blue-500"
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
