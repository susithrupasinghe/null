const Header = () => {
  return (
    <div
      className="text-center mt-5"
      style={{ fontSize: "20px", color: "black", float: "left" }}
    >
      <span className="display-6" style={{ fontWeight: "bold" }}>
        Project Management
      </span>
    </div>
  );
};

const Table = () => {
  return (
    <div style={{ marginTop: "2.5rem" }}>
      <table className="table table-striped">
        <tbody>
          <tr>
            <td>P_001</td>
            <td>Employee Management system</td>
            <td><button type="button" class="btn btn-danger">Manage</button></td>
          </tr>
          <tr>
            <td>P_001</td>
            <td>Employee Management system</td>
            <td><button type="button" class="btn btn-danger">Manage</button></td>
          </tr>
          <tr>
            <td>P_001</td>
            <td>Employee Management system</td>
            <td><button type="button" class="btn btn-danger">Manage</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const ProjectManagement = () => {
  return (
    <div className="mt-5 mx-5 px-2">
      <div className="card boderRadiusCards px-5">
        <div className="card-body">
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
      </div>
    </div>
  );
};

export default ProjectManagement;
