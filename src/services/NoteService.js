import axios from "axios";

const GET_NOTES_API_URL = "http://localhost:8080/notes/all";
const POST_CREATE_NOTE_API_URL = "http://localhost:8080/notes";
const PATCH_UPDATE_NOTE_API_URL = "http://localhost:8080/notes/update";

class NoteService {
  getAllNotes() {
    return axios.get(GET_NOTES_API_URL);
  }

  createNote(note) {
    return axios.post(POST_CREATE_NOTE_API_URL, note);
  }

  getNoteById(noteId) {
    return axios.get(POST_CREATE_NOTE_API_URL + "/" + noteId);
  }

  updateNoteById(noteId, note) {
    return axios.patch(PATCH_UPDATE_NOTE_API_URL + "/" + noteId, note);
  }

  deleteNoteById(noteId) {
    return axios.delete(POST_CREATE_NOTE_API_URL + "/" + noteId);
  }
}

export default new NoteService();
