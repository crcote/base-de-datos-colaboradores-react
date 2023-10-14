import { useState } from "react";

const Buscador = ({ colaboradores, setFilterResult,search,setSearch }) => {

  const filterSearch = (search) => {
    if (search.trim()!= "") {      
      let filtrado = colaboradores.filter((colaborador) => {
        for (let ColabSearch in colaborador) {
          if (colaborador[ColabSearch].toUpperCase().includes(search.toUpperCase())) {
            return colaborador;
          }
        }
      });
      setFilterResult(filtrado);
      
    }else{
      setFilterResult(colaboradores);
    }
    
  };

  return (
    <>
      <div>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Ingresar datos de busqueda"
          value={search}
          // onChange={(event) => setSearch(event.target.value)}
          onChange={(event) => {
            setSearch(event.target.value);
            filterSearch(event.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Buscador;
