import {Link} from "react-router-dom";

import profileEdit from '../../../assets/EmployeeDashboard/profileEdit.svg';
import projectDetails from '../../../assets/EmployeeDashboard/projectDetails.svg';
import markAttendance from '../../../assets/EmployeeDashboard/markAttendance.svg';

const Header = () => {
    return (
        <div className="text-center mt-5" style={{ fontFamily: "Inter", fontSize: "20px", color: "grey" }}>
            <span className="display-6">Employee DASHBOARD</span>
        </div>
    )
}

const CardSection = () => {

    return (
        <div>
            <div className="row mt-4">
                <div className="col-lg-4 p-3">
                    <Link to="/addemployee">
                        <div className="card employeeDashboardCard boderRadiusCards" style={{ height : "18rem" }}>
                            <div className="card-body employeeDashboardCardOne" style={{
                                 backgroundImage: `url(${profileEdit})`, backgroundSize: "cover", 
                                 backgroundRepeat: 'no-repeat', backgroundOrigin: 'content-box' 
                                 }}>
                         
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 p-3">
                    <Link to="/pmlist">
                        <div className="card employeeDashboardCard boderRadiusCards" style={{ height : "18rem" }}>
                            <div className="card-body employeeDashboardCardOne" style={{
                                 backgroundImage: `url(${projectDetails})`, backgroundSize: "cover", 
                                 backgroundRepeat: 'no-repeat', backgroundOrigin: 'content-box' 
                                 }}>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 p-3">
                    <Link to="/adminprojectsdashboard">
                        <div className="card employeeDashboardCard boderRadiusCards" style={{ height : "18rem" }}>
                            <div className="card-body employeeDashboardCardTwo" style={{
                                 backgroundImage: `url(${markAttendance})`, backgroundSize: "cover", 
                                 backgroundRepeat: 'no-repeat', backgroundOrigin: 'content-box' 
                                 }}>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const AdminDashboardPage = () => {
    return(
        <div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12"><Header/></div>
                <div className="col-lg-12"><CardSection/></div>
              </div>
            </div>
          </div>
    )
}

export default AdminDashboardPage;