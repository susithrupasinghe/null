import { Button, Form, FormGroup, Input } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import "./ProjectManagerLoginPage.css";
import LoginForm from "../../../common/LoginForm/LoginForm"

const LoginPage = () => {

    return (
        <div className="loginPageCard">
            <div className="row loginPageRow">
                <div className="col-md-4 loginPageColOne p-5">
                    <h1>Welcome</h1>
                    <h1>Back</h1>
                    <p>Please login to our system</p>
                </div>
                <div className="col-md-4 loginPageColTwo p-5"><LoginForm role="Project Manager" /></div>
            </div>
        </div>
    );

}


export default LoginPage;