import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Landing from './common/header/headerComponent';
import EmployeeLoginPage from './pages/Employee/EmployeeLoginPage/EmployeeLoginPage';
import AdminLoginPage from './pages/Admin/AdminLoginPage/AdminLoginPage';
import PMLoginPage from './pages/ProjectManager/ProjectManagerLoginPage/ProjectManagerLoginPage';
import AdminDashboardPage from "./pages/Admin/AdminDashboard/AdminDashboard";
import EmployeeDashboard from "./pages/Employee/EmployeeDashboard/EmployeeDashboard";
import ProjectManagerDashboard from "./pages/ProjectManager/ProjectManagerDashboard/ProjectManageDashboard";
import ProjectManagementDashboardPage from "./pages/ProjectManagement/ProjectManagementDashboard/ProjectManagementDashboard";
import "./text.css"

function App() {
  return (

    <Router>
      <Landing/>
      <Routes>
        <Route excat path="/emplogin" element={<EmployeeLoginPage />} />
        <Route excat path="/adminlogin" element={<AdminLoginPage />} />
        <Route excat path="/pmlogin" element={<PMLoginPage />} />


        <Route excat path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route excat path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route excat path="/pm/dashboard" element={<ProjectManagerDashboard />} />
        <Route excat path="/management/dashboard" element={<ProjectManagementDashboardPage />} />
      </Routes>
    </Router>





  );
}

export default App;
