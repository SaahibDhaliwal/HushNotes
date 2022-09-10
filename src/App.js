import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import CreateNote from "./screens/CreateNote/CreateNote";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <BrowserRouter>
      <main>
        <Header setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/createnote" element={<CreateNote />} />
          <Route path="/mynotes" element={<MyNotes search={search} />} />
        </Routes>

        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
