import React, { useContext, useState } from "react";
import noteContext from "./context/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNotes } = context;
  const [note, setNote] = useState({
    title1: "",
    description1: "",
    tags1: "",
  });
  const handleSave = () => {
    addNotes(note.title1, note.description1, note.tags1);
    document.getElementById("title1").value = "";
    document.getElementById("description1").value = "";
    document.getElementById("tags1").value = "";
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="mx-10 my-5 text-white flex items-start flex-col justify-center">
        <h1 className="mx-5 text-2xl">Add notes</h1>
        <input
          id="title1"
          name="title1"
          type="text"
          onChange={onChange}
          placeholder="Tite"
          className="rounded-lg mx-5 border px-3 text-black focus:bg-slate-900 focus:text-white border-white focus:border-blue-600"
        />
        <input
          id="tags1"
          name="tags1"
          type="text"
          onChange={onChange}
          placeholder="Tag"
          className="rounded-lg my-5 mx-5 border px-3 text-black focus:bg-slate-900 focus:text-white border-white focus:border-blue-600"
        />
        <textarea
          id="description1"
          name="description1"
          onChange={onChange}
          className="max-h-96 pt-2 rounded-xl outline-none mx-5 px-3 my-5 border text-black focus:bg-slate-900 focus:text-white border-white focus:border-blue-600"
          placeholder="Type Notes here"
          cols="70"
          rows="2"
        />
        <div className="flex items-center justify-start">
          <button
            onClick={handleSave}
            className="bg-blue-500 border-2 border-blue-500 hover:border-blue-300 rounded-xl mx-5 my-1 px-3 py-0 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
