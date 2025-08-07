import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

// Admin components
import ProtectedRoute from "./admin/ProtectedRoute";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminProjects from "./admin/AdminProjects";
import AdminAddProject from "./admin/AdminAddProject";


function App() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />
      <Route path="/projects" element={<>
            <Navbar />
            <Projects />
            <Footer />
          </>
        }
      />

      {/* Admin Pages (no navbar/footer) */}
      <Route path="/admin/login" element={
        <>
        <Navbar />
        <AdminLogin />
        <Footer/>
        </>
        } />
      <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      <Route path="/admin/dashboard/projects" element={<ProtectedRoute><AdminProjects /></ProtectedRoute>} />
      <Route path="/admin/dashboard/add" element={<ProtectedRoute><AdminAddProject /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;
