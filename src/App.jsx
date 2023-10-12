import { useState } from 'react'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Alert from './components/Alert'
import { colaboradoresIniciales} from './components/colaboradores'

function App() {
  const [errorForm, setErrorForm] = useState()
  const [errorMail, setErrorMail] = useState ()
  const [colaboradores, setColaboradores] = useState(colaboradoresIniciales)

  return (
    <>
    <Formulario
    errorForm ={errorForm}
    setErrorForm={setErrorForm}
    errorMail={errorMail}
    setErrorMail={setErrorMail}
    colaboradores={colaboradores}
    setColaboradores={setColaboradores}
    />
    {errorForm ? (
      <Alert message="Completa todos los campos" color="danger" />
    ) : null}
    {errorMail && !errorForm ? (
      <Alert message="Formato mail incorrecto" color="danger" />
    ) : null}
    {errorForm == false && errorMail == false ? (
      <Alert message="Registro Exitoso" color="success" />
    ) : null}
    <Listado colaboradores={colaboradores}/>
    </>
  )
}

export default App
