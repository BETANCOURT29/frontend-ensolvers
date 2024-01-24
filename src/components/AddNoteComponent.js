import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NoteService from "../services/NoteService";

export const AddNoteComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [archived, setArchived] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateNote = (e) => {
    e.preventDefault();
    const note = { title, description, archived };

    if (id) {
      NoteService.updateNoteById(id, note)
        .then((response) => {
          console.log(response.data);
          navigate("/notes");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      NoteService.createNoteById(note)
        .then((response) => {
          console.log(response.data);
          navigate("/notes");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    NoteService.getNoteById(id)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setArchived(response.data.archived);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">{id ? "Update Note" : "Add Note"}</h2>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Archived</label>
                  <input
                    type="text"
                    placeholder="Archived"
                    name="archived"
                    className="form-control"
                    value={archived}
                    onChange={(e) => setArchived(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateNote(e)}
                >
                  Save
                </button>
                &nbsp;&nbsp;
                <Link to="/notes" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNoteComponent;
