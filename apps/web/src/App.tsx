import { Link, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { ProfileEditPage } from "./pages/ProfileEditPage";
import { StudentsListPage } from "./pages/StudentsListPage";
import { StudentDetailPage } from "./pages/StudentDetailPage";
import { InboxPage } from "./pages/InboxPage";
import { ChatPage } from "./pages/ChatPage";
import { SettingsBlocksPage } from "./pages/SettingsBlocksPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <Link to="/landing" className="brand">
          UniProjectPartners
        </Link>
        <nav className="nav-links">
          <Link to="/landing">Landing</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/students">Students</Link>
          <Link to="/inbox">Inbox</Link>
          <Link to="/settings/blocks">Blocks</Link>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
          <Route path="/students" element={<StudentsListPage />} />
          <Route path="/students/:id" element={<StudentDetailPage />} />
          <Route path="/inbox" element={<InboxPage />} />
          <Route path="/chat/:conversationId" element={<ChatPage />} />
          <Route path="/settings/blocks" element={<SettingsBlocksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

