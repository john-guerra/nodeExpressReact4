import { BrowserRouter,  Routes, Route } from "react-router-dom";

import "./App.css";

import PlayersPage from "./pages/PlayersPage.js";
import AboutPage from "./pages/AboutPage.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<PlayersPage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
