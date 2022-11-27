import React from "react";
import { Link } from "react-router-dom";

class UserCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indentification_type: "",
      indentification: "",
      phone: "",
      address: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      username: "",
    };
  }
  cambioValor = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ state });
  }
  enviarDatos = (e) => {
    e.preventDefault();
    console.log("Formulario fue enviado..");

    const {
      indentification_type,
      indentification,
      phone,
      address,
      email,
      first_name,
      last_name,
      password,
      username,
    } = this.state;

    var datosEnviar = {
      indentification_type: indentification_type,
      indentification: indentification,
      phone: phone,
      address: address,
      email: email,
      first_name: first_name,
      last_name: last_name,
      password: password,
      username: username,
    }

    fetch("http://127.0.0.1:8000/api/users/", {
      method: "POST",
      body: JSON.stringify(datosEnviar)
    })
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
      }) //mostramos los datos
      .catch(console.log);
  }

  render() {
    const {
      indentification_type,
      indentification,
      phone,
      address,
      email,
      first_name,
      last_name,
      password,
      username,
    } = this.state;

    return (
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>
                  <strong>New User</strong>
                </h1>
              </div>
            </div>
          </div>
        </section>
        {/* create new user */}
        <div className="row d-flex justify-content-center">
          <div className="col-8">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">NEW USER</h3>
              </div>

              <form onSubmit={this.enviarDatos}>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="indentification_type">
                          Identifiction Type
                        </label>
                        <select
                          className="form-control"
                          onChange={this.cambioValor}
                          value={indentification_type}
                          name="identification_type"
                        >
                          <option value={3}>
                            Registro civil de nacimiento
                          </option>
                          <option value={4}>Tarjeta de identidad</option>
                          <option value={5}>Cédula de ciudadanía </option>
                          <option value={6}>Tarjeta de extranjería</option>
                          <option value={7}>NIT</option>
                          <option value={8}>Pasaporte</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="indentification" className="form-label">
                          indentification
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          onChange={this.cambioValor}
                          value={indentification}
                          id="indentification"
                          placeholder="indentification"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">
                          phone
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          onChange={this.cambioValor}
                          value={phone}
                          id="phone"
                          placeholder="phone"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="address" className="form-label">
                          address
                        </label>
                        <input
                          type="address"
                          className="form-control"
                          onChange={this.cambioValor}
                          value={address}
                          id="address"
                          placeholder="address"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          onChange={this.cambioValor}
                          value={email}
                          id="email"
                          placeholder="email"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="first_name" className="form-label">
                          first name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={this.cambioValor}
                          value={first_name}
                          id="first_name"
                          placeholder="first_name"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="last_name" className="form-label">
                          last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={this.cambioValor}
                          value={last_name}
                          id="last_name"
                          placeholder="last_name"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="username" className="form-label">
                          username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          onChange={this.cambioValor}
                          value={username}
                          id="username"
                          placeholder="username"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password" className="form-label">
                          password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          onChange={this.cambioValor}
                          value={password}
                          id="password"
                          placeholder="password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-end">
                  <Link
                    to={"/UserList"}
                    type="button"
                    className="btn btn-danger"
                  >
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-primary mx-1">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCreate;
