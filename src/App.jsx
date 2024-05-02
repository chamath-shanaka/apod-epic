import "./App.css";
import Apod from "./APOD/Apod";
import Epic from "./EPIC/Epic";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Epic" element={<Epic />} />
      <Route path="/Apod" element={<Apod />} />
    </Routes>
  );
}

export default App;
