import { useState } from "react";

const Buscador = ({ colaboradores }) => {
  const [search, setSearch] = useState("");

  const filterSearch = (search) => {
    let filtrado = colaboradores.filter((colaborador) => {
      for (let ColabSearch in colaborador) {
        //console.log(colaborador[ColabSearch]);
        if (
          colaborador[ColabSearch].toUpperCase().includes(search.toUpperCase())
        ) {
          // includes realiza la busqueda de lo que se esta buscando
          return colaborador;
        }
      }
    });
    return filtrado;
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
            console.log(filterSearch(search));
          }}
        />
      </div>
    </>
  );
};

export default Buscador;
