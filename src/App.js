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
import AddAtendance from "./pages/Employee/AddAttendance/AddAttendance";
import "./text.css"
import ProjectDashboardPage from "./pages/ProjectManager/ProjectDashboard/ProjectDashboard";
import ProjectManagement from "./pages/ProjectManager/ProjectManagement/ProjectManagement";
import AdminProjectManagement from "./pages/Admin/ProjectManagement/AdminProjectManagement";
import AddEmployee from "./pages/Employee/AddEmployee/AddEmployee";
import EditProfile from "./pages/Employee/EditProfile/EditProfile";
import Sprint from "./pages/ProjectManager/Sprint/Sprint";
import ProjectOverview from "./pages/ProjectManager/ProjectOverview/ProjectOverview";
import KanbanChart from "./pages/ProjectManager/KanbanChart/KanbanChart";

function App() {
  return (

    <Router>
      <Landing/>
      <Routes>
        <Route excat path="/emplogin" element={<EmployeeLoginPage />} />
        <Route excat path="/adminlogin" element={<AdminLoginPage />} />
        <Route excat path="/pmlogin" element={<PMLoginPage />} />


        <Route excat path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route excat path="/admin/projectmanagement" element={<AdminProjectManagement />} />
        <Route excat path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route excat path="/employee/add" element={<AddEmployee />} />
        <Route excat path="/editprofile/:id" element={<EditProfile />} />
        <Route excat path="/pm/dashboard" element={<ProjectManagerDashboard />} />
        <Route exact path="/pm/projectdashboard" element={<ProjectDashboardPage/>} />
        <Route excat path="/pm/projectmanagement" element={<ProjectManagement />} />
        <Route excat path="/management/dashboard" element={<ProjectManagementDashboardPage />} />
        <Route excat path="/:name/sprint" element={< Sprint/>} />
        <Route excat path="/:name/overview" element={< ProjectOverview/>} />
        <Route excat path="/:name/kanban" element={<KanbanChart />} />

        <Route excat path="/employee/addAttendance" element={<AddAtendance />} />
      </Routes>
    </Router>





  );
}

export default App;
