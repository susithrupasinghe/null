import {FaCircle} from 'react-icons/fa';
import {AiFillSetting} from 'react-icons/ai';
import {IoIosRemoveCircle} from 'react-icons/io';
const Header = () => {
  return (
    <div
      className="text-center mt-5"
      style={{
        fontSize: "20px",
        color: "black",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span className="display-6" style={{ fontWeight: "bold" }}>
        Sprint
      </span>
      <div>
        <button
          type="button"
          class="btn btn-dark"
          style={{ padding: "8px 25px" }}
        >
          Report
        </button>
        <button
          type="button"
          class="btn btn-dark"
          style={{ padding: "8px 25px", marginLeft: "1.5rem" }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

const SprintCard = () => {
  return (
    <div class="card" style={{borderRadius: "10px"}}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div class="card-body">
          <h3 style={{ fontWeight: "bold" }}>Sprint 2</h3>
          <span style={{ color: "gray" }}>
            31/Jan/21 9.20 PM - 01/Feb/22 9.50 PM
          </span>
        </div>
        <div style={{ marginRight: "1rem", marginTop: "1rem" }}>
          <button
            type="button"
            class="btn btn-dark"
            style={{ padding: "8px 25px" }}
          >
            Add Feedback
          </button>
          <button
            type="button"
            class="btn btn-dark"
            style={{ padding: "8px 25px", marginLeft: "1.5rem" }}
          >
            Add Task
          </button>
        </div>
      </div>
      <div style={{padding: "0 2rem"}}>
      <table class="table">
  
  <tbody>
    <tr>
      <th scope="row"><FaCircle style={{color: "red"}}/></th>
      <td>Task1</td>
      <td>Worker1</td>
      <td>3 days</td>
      <td>5 points</td>
      <td>
        <div>
            <AiFillSetting size={25} style={{color: "#A80038", marginRight: "20px"}} />
            <IoIosRemoveCircle size={25} style={{color: "#A80038"}}/>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row"><FaCircle style={{color: "red"}}/></th>
      <td>Task1</td>
      <td>Worker1</td>
      <td>3 days</td>
      <td>5 points</td>
      <td>
        <div>
            <AiFillSetting size={25} style={{color: "#A80038", marginRight: "20px"}} />
            <IoIosRemoveCircle size={25} style={{color: "#A80038"}}/>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row"><FaCircle style={{color: "red"}}/></th>
      <td>Task1</td>
      <td>Worker1</td>
      <td>3 days</td>
      <td>5 points</td>
      <td>
        <div>
            <AiFillSetting size={25} style={{color: "#A80038", marginRight: "20px"}} />
            <IoIosRemoveCircle size={25} style={{color: "#A80038"}}/>
        </div>
      </td>
    </tr>
  </tbody>
</table>


      </div>
    </div>
  );
};

const Sprint = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Header />
          </div>
          <div className="col-lg-12" style={{ marginTop: "2rem" }}>
            <SprintCard />
          </div>
          <div className="col-lg-12" style={{ marginTop: "1.5rem" }}>
            <SprintCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sprint;
