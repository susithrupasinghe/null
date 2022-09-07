import { useState } from 'react';
import search from "../../../assets/icons/search.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const ModelPopUp = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
      <tr>
        <td>{props.project.project_id}</td>
        <td>{props.project.project_name}</td>
        <td>
          <AiFillEdit size={25} style={{ color: "#A80038", marginRight: "20px" }}  onClick={toggle}/>
          <MdDelete size={25} style={{ color: "#A80038" }} />
        </td>

        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      </tr>
      
  );
}

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

const Table = (props) => {
  return (
    <div style={{ marginTop: "2.5rem" }}>
      <div style={{ display: "flex" }}>
        <div>
          <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            10 Projects
          </span>
          <br />
          <span style={{ color: "gray" }}>
            31/Jan/21 9.30PM - 01/Feb/22 9.50 AM
          </span>
        </div>
        <div class="input-group" style={{ float: "right", textAlign: "right" }}>
          <div class="form-outline">
            <input
              id="search-focus"
              type="search"
              class="form-control"
            />
          </div>
          <button type="button" class="btn btn-primary" style={{ height: "38px" }}>
            <i class="fas fa-search"></i>
            <AiOutlineSearch />
          </button>
        </div>
      </div>
      <table className="table table-striped" style={{ marginTop: "2rem" }}>
        <tbody>
          {
            props.data.map((row) => {
              return(
                <ModelPopUp project={row}/>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

const AdminProjectManagement = () => {

  const dataSet = [
    {
      project_id: "12354677678",
      project_name: "Project1"
    },
    {
      project_id: "7864356459843",
      project_name: "Project2"
    },
    {
      project_id: "37893e89",
      project_name: "Project3"
    },
    {
      project_id: "87912387231",
      project_name: "Project4"
    },
  ]
  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Header />
          </div>
          <div className="card boderRadiusCards px-5 mt-3">
            <div className="card-body">
              <div className="col-lg-12">
                <Table data={dataSet}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectManagement;
