import "./App.css";
import Apod from "./APOD/Apod";
import Epic from "./EPIC/Epic";
import Home from "./Home";
import { Route, Routes, Navigate } from "react-router-dom";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

function App() {
  const { isAuthenticated, isLoading } = useKindeAuth();
  if (isLoading || isLoading) {
    return <div>loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Epic" element={isAuthenticated ? <Epic /> : <Navigate to="/" />} />
      <Route path="/Apod" element={isAuthenticated ? <Apod /> : <Navigate to="/" />} />
    </Routes>
  );
}

export default App;
