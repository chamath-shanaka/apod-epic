import "./App.css";
import Apod from "./Apod";
import Epic from "./Epic";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
