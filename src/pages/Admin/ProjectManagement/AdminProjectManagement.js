import search from "../../../assets/icons/search.svg";
import {AiOutlineSearch} from "react-icons/ai";
import {AiFillEdit} from "react-icons/ai";
import { MdDelete } from "react-icons/md";
const Header = () => {
  return (
    <div
      className="text-center mt-5"
      style={{ fontSize: "20px", color: "black" }}
    >
      <span className="display-6" style={{ fontWeight: "bold", float: "left" }}>
        Project Management
      </span>
      <button type="button" class="btn btn-dark" style={{ float: "right" }}>
        Create
      </button>
    </div>
  );
};

const Table = () => {
  return (
    <div style={{ marginTop: "2.5rem" }}>
      <div style={{display: "flex"}}>
        <div>
          <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            10 Projects
          </span>
          <br />
          <span style={{ color: "gray" }}>
            31/Jan/21 9.30PM - 01/Feb/22 9.50 AM
          </span>
        </div>
        <div class="input-group" style={{float: "right"}}>
          <div class="form-outline">
            <input
              id="search-focus"
              type="search"
              class="form-control"
            />
          </div>
          <button type="button" class="btn btn-primary" style={{height: "38px"}}>
            <i class="fas fa-search"></i>
            <AiOutlineSearch/>
          </button>
        </div>
      </div>
      <table className="table table-striped" style={{ marginTop: "2rem" }}>
        <tbody>
          <tr>
            <td>P_001</td>
            <td>Employee Management system</td>
            <td>
              <AiFillEdit size={25} style={{color: "#A80038", marginRight: "20px"}} />
              <MdDelete size={25} style={{color: "#A80038"}}/>
            </td>
          </tr>
          <tr>
            <td>P_001</td>
            <td>Employee Management system</td>
            <td>
              <AiFillEdit size={25} style={{color: "#A80038", marginRight: "20px"}} />
              <MdDelete size={25} style={{color: "#A80038"}}/>
            </td>
          </tr>
          <tr>
            <td>P_001</td>
            <td>Employee Management system</td>
            <td>
              <AiFillEdit size={25} style={{color: "#A80038", marginRight: "20px"}} />
              <MdDelete size={25} style={{color: "#A80038"}}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const AdminProjectManagement = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Header />
          </div>
          <div className="col-lg-12">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectManagement;
