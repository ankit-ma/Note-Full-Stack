import NavBar from "./page/Navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage";
import Signup from "./page/Auth/Signup";
import Login from "./page/Auth/Login";
import Dashboard from "./page/MainPage/Dashboard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
