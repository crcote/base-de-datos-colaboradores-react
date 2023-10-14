import { useState } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Alert from "./components/Alert";
import { colaboradoresIniciales } from "./components/colaboradores";
import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from "./components/Buscador";

function App() {
  const [errorForm, setErrorForm] = useState();
  const [errorMail, setErrorMail] = useState();
  const [colaboradores, setColaboradores] = useState(colaboradoresIniciales);
  const [filterResult, setFilterResult] = useState([]);
  const [search, setSearch] = useState("");

  function datos() {
    if (filterResult.length === 0) {
      if (search!="") {
        return filterResult;
      }else{
        return colaboradores;
      }
    } else {
      return filterResult;
    }
  }

  return (
    <>
      <div className="PrincipalBox m-5 ">
        <div className="FirstBox border border-dark p-5 rounded-5 bg-gradient-info">
          <div className="formularioBox m-3  ">
            <Formulario
              errorForm={errorForm}
              setErrorForm={setErrorForm}
              errorMail={errorMail}
              setErrorMail={setErrorMail}
              colaboradores={colaboradores}
              setColaboradores={setColaboradores}
              setFilterResult = {setFilterResult}
            />
            <div className="messageAlert">
              {errorForm ? (
                <Alert message="Completa todos los campos" color="danger" />
              ) : null}
              {errorMail && !errorForm ? (
                <Alert message="Formato mail incorrecto" color="danger" />
              ) : null}
              {errorForm == false && errorMail == false ? (
                <Alert message="Registro Exitoso" color="success" />
              ) : null}
            </div>
          </div>
          <div className="colaboradoresBox">
            <Buscador
              colaboradores={colaboradores}
              setFilterResult={setFilterResult}
              search={search}
              setSearch={setSearch}
            />
            <Listado colaboradores={datos()} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
