import { useState } from 'react'
import Formulario from './components/Formulario'
import './App.css'
import Alert from './components/Alert'

function App() {
  const [errorForm, setErrorForm] = useState()
  const [errorMail, setErrorMail] = useState ()

  return (
    <>
    <Formulario
    errorForm ={errorForm}
    setErrorForm={setErrorForm}
    errorMail={errorMail}
    setErrorMail={setErrorMail}
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
    </>
  )
}

export default App
