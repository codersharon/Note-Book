import React, { useEffect, useState } from "react";
import { useContext } from "react";
import noteContext from "./context/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  let navigate =useNavigate();
  const context = useContext(noteContext);
  const { addNotes, notes, getNotes, Toggle } = context;
  const [note, setNote] = useState({
    etitle: "",
    edescription: "",
    etags: "",
  });
  const handleSave = () => {
    addNotes(note.etitle, note.edescription, note.etags);
    document.getElementById("etitle").value = "";
    document.getElementById("edescription").value = "";
    document.getElementById("etags").value = "";
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/CreateAccount");
    }
  });

  const updateNote = (Currentnote) => {
    Toggle("Editor");
    setNote({
      etitle: Currentnote.title,
      edescription: Currentnote.description,
      etags: Currentnote.tags,
    });
  };
  return (
    <>
      <AddNote />

      <h1 className="text-2xl text-white mx-10">Your notes</h1>
      <div className="flex flex-col">
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>

      {/* Edit Modal */}
      <div
        id="Editor"
        className="hidden mx-5 my-5 shadow-2xl shadow-black container flex flex-col justify-center items-center w-1/3 bg-yellow-500 rounded-xl"
      >
        <input
          onChange={onChange}
          id="etitle"
          name="etitle"
          value={note.etitle}
          className="w-[96%] p-2 px-5 rounded-lg outline-none border-2 focus:border-blue-600 mx-5 my-5"
          placeholder="Title"
          type="text"
        />
        <textarea
          onChange={onChange}
          id="edescription"
          name="edescription"
          value={note.edescription}
          className="w-[96%] p-2 px-5 rounded-lg outline-none border-2 focus:border-blue-600 mx-5 my-5"
          placeholder="Note"
          type="text"
        />
        <input
          onChange={onChange}
          id="etags"
          name="etags"
          value={note.etags}
          className="w-[96%] p-2 px-5 rounded-lg outline-none border-2 focus:border-blue-600 mx-5 my-5"
          placeholder="Tags"
          type="text"
        />
        <button
          onClick={handleSave}
          className="mx-5 my-5 outline-none bg-blue-600 hover:bg-blue-700 border-blue-600 border-2 hover:border-blue-400 text-white px-2 rounded-lg"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default Notes;
