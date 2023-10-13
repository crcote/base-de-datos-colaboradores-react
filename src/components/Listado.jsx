import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Listado = ({ colaboradores }) => {
  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre Colaborador</th>
              <th scope="col">E-mail</th>
              <th scope="col">Edad</th>
              <th scope="col">Cargo</th>
              <th scope="col">Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {colaboradores.map((e) => (
              <tr key={e.id}>
                <td>{e.nombre}</td>
                <td>{e.correo}</td>
                <td>{e.edad}</td>
                <td>{e.cargo}</td>
                <td>{e.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Listado;
