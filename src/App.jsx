import "./App.css";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
