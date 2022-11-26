import React from "react";
import { Link } from "react-router-dom";

class DriverCrud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>
                  CRUD <strong>Driver</strong>
                </h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* crud de driver  */}
        
      </div>
    );
  }
}

export default DriverCrud;
