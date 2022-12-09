import React from "react";
import { Link } from "react-router-dom";
// iconos de font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datosCargados: false,
      users: [],
    };
  }

  borrarRegistro = (username) => {
    console.log(username);
    fetch("http://127.0.0.1:8000/api/users/")
    .then((respuesta) => respuesta.json())
    .then((datosRespuesta) => {
      console.log(datosRespuesta);
      this.cargarDatos();
    }) //mostramos los datos
    .catch(console.log);
  }

  cargarDatos() {
    fetch("http://127.0.0.1:8000/api/users/")
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        this.setState({ datosCargados: true, users: datosRespuesta });
      }) //mostramos los datos
      .catch(console.log);
  }

  componentDidMount() {
    this.cargarDatos();
  }

  render() {
    const { datosCargados, users } = this.state;
    if (!datosCargados) {
      return (
        <div className="d-flex justify-content-center mt-4 mb-4">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>
                    CRUD <strong>USER</strong>
                  </h1>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <div className="d-flex justify-content-between">
                    <h3 className="card-title">DataTable users</h3>
                    <Link type="button" to={"/UserCreate"} className="btn btn-primary">Add User</Link>
                </div>
              </div>
              <div className="card-body">
                <div
                  id="example2_wrapper"
                  className="dataTables_wrapper dt-bootstrap4"
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-6" />
                    <div className="col-sm-12 col-md-6" />
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        id="example2"
                        className="table table-bordered table-hover dataTable dtr-inline"
                        aria-describedby="example2_info"
                      >
                        <thead>
                          <tr>
                            <th
                              className="sorting sorting_asc"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              aria-sort="ascending"
                              aria-label="Rendering engine: activate to sort column descending">
                              ID
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Browser: activate to sort column ascending"
                            >
                              TYPE IDENTIFICATION
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Platform(s): activate to sort column ascending"
                            >
                              IDENTIFICATION
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Engine version: activate to sort column ascending"
                            >
                              PHONE
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="CSS grade: activate to sort column ascending"
                            >
                              ADRESS
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="CSS grade: activate to sort column ascending"
                            >
                              EMAIL ADRESS
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="CSS grade: activate to sort column ascending"
                            >
                              FULL NAME
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="CSS grade: activate to sort column ascending"
                            >
                              USERNAME
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example2"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="CSS grade: activate to sort column ascending"
                            >
                              TOOLS
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                            users.map(
                                (user) => (
                            
                                <tr className="odd" key={user.username} >
                                    <td className="dtr-control sorting_1" tabIndex={0}>{user.username}</td>
                                    <td>{user.identification_type_name}</td>
                                    <td>{user.identification}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address}</td>
                                    <td>{user.email}</td>
                                    <td>{user.first_name} {user.last_name}</td>
                                    <td>{user.username}</td>
                                    <td>
                                      <div className="btn-group" role="group">
                                        <Link className="" to={"/editar"}>
                                          <FontAwesomeIcon icon={faEdit} style={{fontSize:"20px", color:"black"}} />
                                        </Link>
                                        <div className="mx-1"></div>
                                        <Link type="button" className="me-4" onClick={()=> this.borrarRegistro(user.username)}>
                                          <FontAwesomeIcon icon={faTrashAlt} style={{fontSize:"20px", color:"black"}} />
                                        </Link>
                                      </div>
                                    </td>
                                </tr>
                            )
                          )
                        }
                        </tbody>
                        <tfoot>
                          <tr>
                            <th rowSpan={1} colSpan={1}>
                                ID
                            </th>
                            <th rowSpan={1} colSpan={1}>
                                TYPE IDENTIFICATION
                            </th>
                            <th rowSpan={1} colSpan={1}>
                                IDENTIFICATION
                            </th>
                            <th rowSpan={1} colSpan={1}>
                                PHONE
                            </th>
                            <th rowSpan={1} colSpan={1}>
                                ADRESS
                            </th>
                            <th rowSpan={1} colSpan={1}>
                                EMAIL ADRESS
                            </th>
                            <th rowSpan={1} colSpan={1}>
                                FULL NAME
                            </th>
                            <th rowSpan={1} colSpan={1}>
                                USERNAME
                            </th>
                            <th rowSpan={1} colSpan={1}>
                                TOOLS
                            </th>
                            
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div
                        className="dataTables_info"
                        id="example2_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 10 of 57 entries
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="example2_paginate"
                      >
                        <ul className="pagination">
                          <li
                            className="paginate_button page-item previous disabled"
                            id="example2_previous"
                          >
                            <Link
                              to={"#"}
                              aria-controls="example2"
                              data-dt-idx={0}
                              tabIndex={0}
                              className="page-link"
                            >
                              Previous
                            </Link>
                          </li>
                          <li className="paginate_button page-item active">
                            <Link
                              to={"#"}
                              aria-controls="example2"
                              data-dt-idx={1}
                              tabIndex={0}
                              className="page-link"
                            >
                              1
                            </Link>
                          </li>
                          <li className="paginate_button page-item ">
                            <Link
                              to={"#"}
                              aria-controls="example2"
                              data-dt-idx={2}
                              tabIndex={0}
                              className="page-link"
                            >
                              2
                            </Link>
                          </li>
                          <li className="paginate_button page-item ">
                            <Link
                              to={"#"}
                              aria-controls="example2"
                              data-dt-idx={3}
                              tabIndex={0}
                              className="page-link"
                            >
                              3
                            </Link>
                          </li>
                          <li className="paginate_button page-item ">
                            <Link
                              to={"#"}
                              aria-controls="example2"
                              data-dt-idx={4}
                              tabIndex={0}
                              className="page-link"
                            >
                              4
                            </Link>
                          </li>
                          <li className="paginate_button page-item ">
                            <Link
                              to={"#"}
                              aria-controls="example2"
                              data-dt-idx={5}
                              tabIndex={0}
                              className="page-link"
                            >
                              5
                            </Link>
                          </li>
                          <li className="paginate_button page-item ">
                            <Link
                              to={"#"}
                              aria-controls="example2"
                              data-dt-idx={6}
                              tabIndex={0}
                              className="page-link"
                            >
                              6
                            </Link>
                          </li>
                          <li
                            className="paginate_button page-item next"
                            id="example2_next"
                          >
                            <Link
                              to={"#"}
                              aria-controls="example2"
                              data-dt-idx={7}
                              tabIndex={0}
                              className="page-link"
                            >
                              Next
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default UserList;