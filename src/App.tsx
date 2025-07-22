import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { ProjectProvider } from "./context/ProjectContext";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import './index.css';

export default function App() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "JBLS", path: "/project/project1" },
    { name: "Enigmate V1", path: "/project/project2" },
    { name: "Enigmate V2", path: "/project/project3" },
    { name: "VestWise", path: "/project/project4" },
    { name: "DreamWell", path: "/project/project5" }
  ];

  return (
    <ProjectProvider>
      <Router>
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-purple-500 to-blue-500 text-white">
  
          <h1 className="text-4xl font-bold mt-6 mb-4">Sione Across the Multiverse</h1>

          <nav className="flex gap-4 mb-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-1 rounded hover:bg-white/20 ${
                    isActive ? "bg-white/30" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Card Content Area changes with route */}
          <div className="bg-white text-black rounded-2xl shadow-xl w-[500px] h-[500px] p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ProjectProvider>
  );
}

