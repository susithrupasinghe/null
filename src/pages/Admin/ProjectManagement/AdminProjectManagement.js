import { useState } from 'react';
import search from "../../../assets/icons/search.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';




const RowModelPopUp = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <tr>
      <td>{props.project.project_id}</td>
      <td>{props.project.project_name}</td>
      <td>
        <AiFillEdit size={25} style={{ color: "#A80038", marginRight: "20px" }} onClick={toggle} />
        <MdDelete size={25} style={{ color: "#A80038" }} />
      </td>

      <Modal isOpen={modal} toggle={toggle} fullscreen="md" centered={true} size="lg" >
        <ModalBody >
          <div className='p-4'>
            <h2> Edit Project</h2>
            <form className='p-3'>
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Project Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" value={props.project.project_name} placeholder="Example input placeholder" />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Description</label>
                <textarea class="form-control" id="formGroupExampleInput2" value={props.project.description} placeholder="Another input placeholder" />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput3" class="form-label">Project Manager</label>
                <select class="form-select" id="formGroupExampleInput3" aria-label="Select Project Manager">
                  <option selected>Project Manager</option>
                  {
                    props.pm.map((e) => {
                      return (
                        <>
                          {
                            e.id == props.project.pm_id ? <option value={e.id} selected>{e.name}</option> : <option value={e.id}>{e.name}</option>
                          }
                        </>

                      );
                    })
                  }
                </select>
              </div>
            </form>
          </div>

        </ModalBody>
        <ModalFooter>
          <button type="button" class="btn btn-secondary" onClick={toggle}>
            Close
          </button>
          <button type="button" class="btn btn-dark" onClick={toggle}>
            Edit
          </button>

        </ModalFooter>
      </Modal>
    </tr>

  );
}

const Header = (props) => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const CreateProjectModel = (propsSec) => {
    
    return (
  
      <Modal isOpen={modal} toggle={toggle} fullscreen="md" centered={true} size="lg" >
        <ModalBody >
          <div className='p-4'>
            <h2> Create Project</h2>
            <form className='p-3'>
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Project Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Description</label>
                <textarea class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput3" class="form-label">Project Manager</label>
                <select class="form-select" id="formGroupExampleInput3" aria-label="Select Project Manager">
                  {
                    propsSec.pm.map((e) => {
                      return (
                        <option value={e.id}>{e.name}</option>
                      );
                    })
                  }
                </select>
              </div>
            </form>
          </div>
  
        </ModalBody>
        <ModalFooter>
          <button type="button" class="btn btn-secondary" onClick={toggle}>
            Close
          </button>
          <button type="button" class="btn btn-dark" onClick={toggle}>
            Create
          </button>
  
        </ModalFooter>
      </Modal>
  
    );
  }

  return (
    
    <div
      className="text-center mt-5"
      style={{ fontSize: "20px", color: "black" }}
    >
      <span className="display-6" style={{ fontWeight: "bold", float: "left" }}>
        Project Management
      </span>
      <button type="button" class="btn btn-dark" style={{ float: "right" }} onClick={toggle}>
        Create
      </button>
      <CreateProjectModel pm={props.pm}/>
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
              return (
                <RowModelPopUp project={row} pm={props.pm} />
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
      project_name: "Project1",
      description: "ewqdfguewgqfd efboeqfce fefbef ",
      pm_id: 123445555
    },
    {
      project_id: "7864356459843",
      project_name: "Project2",
      description: "ewqdfguewgqfd efboeqfce fefbef ",
      pm_id: 123445555
    },
    {
      project_id: "37893e89",
      project_name: "Project3",
      description: "ewqdfguewgqfd efboeqfce fefbef ",
      pm_id: 123445435435
    },
    {
      project_id: "87912387231",
      project_name: "Project4",
      description: "ewqdfguewgqfd efboeqfce fefbef ",
      pm_id: 123445555
    },
  ]

  const projectManagers = [
    {
      id: 123445555,
      name: "Susith Rupasinghe"
    },
    {
      id: 123445435435,
      name: "Shavindini Ekanayake"
    },
    {
      id: 123445435435,
      name: "Sasindu Nanayakkara"
    }
  ]
  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Header pm={projectManagers} />
          </div>
          <div className="card boderRadiusCards px-5 mt-3">
            <div className="card-body">
              <div className="col-lg-12">
                <Table data={dataSet} pm={projectManagers} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProjectManagement;
