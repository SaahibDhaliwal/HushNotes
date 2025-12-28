import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import CreateNote from "./screens/CreateNote/CreateNote";
import EditNote from "./screens/EditNote/EditNote";
import NotFound from "./screens/NotFound/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";

const AppContent = () => {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const hideHeader = ["/", "/login", "/register"].includes(location.pathname);

  return (
    <main>
      {!hideHeader && <Header setSearch={setSearch} />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/createnote" element={<CreateNote />} />
          <Route path="/mynotes" element={<MyNotes search={search} />} />
          <Route path="/note/:id" element={<EditNote />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideHeader && <Footer />}
    </main>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
