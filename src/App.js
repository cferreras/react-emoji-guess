import "./App.css";
import Game from "./components/Game";
import Dashboard from "./components/Dashboard";
import Login from "./components/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="wrapeer">
      <Game />
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
