import NoteState from "./context/NoteState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Sign from "./Sign";
import Login from "./Login";

const App = () => {
  return (
    <NoteState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CreateAccount" element={<Sign />} />
        </Routes>
      </Router>
    </NoteState>
  );
};

export default App;
