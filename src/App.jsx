import { useState } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Alert from "./components/Alert";
import { colaboradoresIniciales } from "./components/colaboradores";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [errorForm, setErrorForm] = useState();
  const [errorMail, setErrorMail] = useState();
  const [colaboradores, setColaboradores] = useState(colaboradoresIniciales);

  return (
    <>
      <div className="PrincipalBox m-5 ">
        <div className="FirstBox d-flex border border-dark p-5 rounded-5">
          <div className="formularioBox m-3 ">
            <Formulario
              errorForm={errorForm}
              setErrorForm={setErrorForm}
              errorMail={errorMail}
              setErrorMail={setErrorMail}
              colaboradores={colaboradores}
              setColaboradores={setColaboradores}
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
            <Listado colaboradores={colaboradores} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
