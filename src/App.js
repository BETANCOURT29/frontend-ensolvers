import logo from "./logo.svg";
import "./App.css";
import NotesListComponent from "./components/NotesListComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNoteComponent from "./components/AddNoteComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<NotesListComponent />}></Route>
            <Route path="/notes" element={<NotesListComponent />}></Route>
            <Route path="/add-note" element={<AddNoteComponent />}></Route>
            <Route path="/edit-note/:id" element={<AddNoteComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
