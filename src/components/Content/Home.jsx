import React from "react";
import imgHome from "./img/network-g97775534c_1280.png"

export default function Content() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1> Bienvenidos a <strong> JOOSPA</strong></h1>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      <div className="content">
        <div className="card card-solid">
          <div className="card-body">
          
            <div className="row">
             <div className="col-6 text-center d-flex align-items-center">
                <h2>
                  <small>
                    We welcome you to <strong>JOOSPA</strong> a software development venture in conjunction with <strong>IOT</strong> devices where you will use them to your liking such as monitoring or gps of vehicle fleets, temperature control for your crops or for your personal use. 
                  </small>
                </h2>
              </div>
              <div className="col-6 text-center">
                  <img src={imgHome} className="img-fluid rounded " alt="..." width="700" />
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  );
}
