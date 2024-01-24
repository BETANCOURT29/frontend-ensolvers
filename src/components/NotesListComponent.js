import React, { useEffect, useState } from "react";
import NoteService from "../services/NoteService";
import { Link } from "react-router-dom";

export const NotesListComponent = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    listNotes();
  }, []);

  const listNotes = () => {
    NoteService.getAllNotes()
      .then((response) => {
        setNotes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteNote = (id) => {
    NoteService.deleteNoteById(id)
      .then((response) => {
        listNotes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Notes List</h2>
      <Link to="/add-note" className="btn btn-primary mb-2">
        Add Note
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Archived</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              <td>{note.id}</td>
              <td>{note.title}</td>
              <td>{note.description}</td>
              <td>{Number(note.archived) === 1 ? "true" : "false"}</td>
              <td>
                <Link className="btn btn-info" to={`/edit-note/${note.id}`}>
                  Update
                </Link>
                <button
                  style={{ marginLeft: "10px" }}
                  className="btn btn-danger"
                  onClick={() => deleteNote(note.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotesListComponent;
