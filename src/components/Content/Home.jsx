import React from "react";
import imgHome from "./img/farmer-using-smart-farm-application.png"

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
          <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
          </p>
          </div>
        </div>
      </div>


    </div>
  );
}
