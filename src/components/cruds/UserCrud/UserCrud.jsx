import React, {Component} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// iconos de font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url="http://127.0.0.1:8000/api/users/";

class UserCrud extends Component {
    state = {
        data:[],
        modalInsertar: false, // estado del modal para abrirlo y cerrarlo
        form:{
            identification_type: "",
            identification: "",
            phone: "",
            address: "",
            email: "",
            first_name: "",
            last_name: "",
            username: "",
            password: ""
            // aaca quede por hoy 
        }
    }

    peticionGet = () => {
        axios.get(url).then(response=>{
            console.log(response.data);
            this.setState({data:response.data});// asignamos los datos al estado 
        })
    }

    // metodo para cambiar el estado de true a false y false a true 
    modalInsertar=()=>{
        this.setState({modalInsertar: !this.state.modalInsertar})
    }
    //  capturamos lo que el usuario escribe en los input
    handleChange= e =>{

    }

    componentDidMount() {
      this.peticionGet();  
    }

    render() {
        return(
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
                            <button type="button" className="btn btn-primary" onclick={()=>this.modalInsertar()}>Add User</button>
                        </div>
                    </div>
                        <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">TYPE IDENTIFICATION</th>
                            <th scope="col">IDENTIFICATION</th>
                            <th scope="col">PHONE</th>
                            <th scope="col">ADRESS</th>
                            <th scope="col">EMAIL ADRESS</th>
                            <th scope="col">FULL NAME</th>
                            <th scope="col">USERNAME</th>
                            <th scope="col">TOOLS</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {this.state.data.map(user =>{
                                return(
                                    <tr key={user.username}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.identification_type_name}</td>
                                        <td>{user.identification}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address}</td>
                                        <td>{user.email}</td>
                                        <td>{user.first_name} {user.last_name}</td>
                                        <td>{user.username}</td>
                                        <td>
                                            <button className="btn btn-primary"><FontAwesomeIcon icon={faEdit}/></button>
                                            {"   "}
                                            <button className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt}/></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        </table>
                        
                        <Modal isOpen={this.state.modalInsertar}>{/* aca pasamos el estado del modal */}
                            <ModalHeader style={{display: 'block'}}>
                            <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                            </ModalHeader>
                            <ModalBody>
                            {/* <div className="form-group">
                                <label htmlFor="id">ID</label>
                                <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                                <br />
                                <label htmlFor="nombre">Nombre</label>
                                <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre: ''}/>
                                <br />
                                <label htmlFor="nombre">País</label>
                                <input className="form-control" type="text" name="pais" id="pais" onChange={this.handleChange} value={form?form.pais: ''}/>
                                <br />
                                <label htmlFor="capital_bursatil">Capital Bursatil</label>
                                <input className="form-control" type="text" name="capital_bursatil" id="capital_bursatil" onChange={this.handleChange} value={form?form.capital_bursatil:''}/>
                            </div> */}
                            </ModalBody>

                            <ModalFooter>
                            {this.state.tipoModal=='insertar'?
                                <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                                    Insertar
                                </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                                    Actualizar
                                </button>
                            }           
                                <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                            </ModalFooter>
                        </Modal>

                    </div>
                </div>
            </div>
        )
    }
}
export default UserCrud;
