import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/Admin/DashboardPage";
import HelpPage from "./pages/HelpPage";
import TentangkamiPages from "./pages/TentangkamiPages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/bantuan" element={<HelpPage />} />
          <Route path="/tentangkami" element={<TentangkamiPages />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
