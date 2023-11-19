import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "https://noteAPI.sharonsandeep.repl.co";
  const notesInit = [];
  // const [dsPlay, setDsplay] = useState()

  function Toggle(Modal) {
    const ModalItem = document.getElementById(Modal);
    if (ModalItem.className.match("hidden")) {
      ModalItem.classList.remove("hidden");
    } else {
      ModalItem.classList.add("hidden");
    }
  }

  const [notes, setNotes] = useState(notesInit);

  // Add a note
  const getNotes = async () => {
    //API Call

    const response = await fetch(`${host}/api/notes/fetchNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    let json =await response.json();
    
    setNotes(json);
  };

  // Add a note
  const addNotes = async (title, description, tags) => {
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tags }),
    });
    let json =await response.json();

    const note = [
      {
        _id: "62fb8d0c5c32165d681e65f8",
        user: "62fb7b06cb93d6f593ad661d",
        title: title,
        description: description,
        tags: tags,
        __v: 0,
      },
    ];
    setNotes(notes.concat(note));
  };
  // Delete a note
  const deleteNote = async (id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    let json =await response.json();

    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  // edit a note
  const editNotes = async (id, title, description, tags) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatnote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ title, description, tags }),
    });
    let json =await response.json();

    //Logic to edit a note
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tags = tags;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, getNotes, addNotes, editNotes, deleteNote, Toggle }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
