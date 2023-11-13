import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartGame from "./Pages/StartGame";
import PlayGame from "./Pages/PlayGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/playgame" element={<PlayGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
