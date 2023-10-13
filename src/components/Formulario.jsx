import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

const Formulario = ({
  setErrorForm,
  setErrorMail,
  colaboradores,
  setColaboradores,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [charge, setCharge] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    validateEmail();
    validateRegister();
    console.log(colaboradores);
    setColaboradores([
      ...colaboradores,
      {
        id: nanoid(),
        nombre: name,
        correo: email,
        edad: age,
        cargo: charge,
        telefono: phone,
      },
    ]);
  };

  const validateEmail = () => {
    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
      )
    ) {
      console.log("malisimo");
      setErrorMail(true);
      return;
    }
    setErrorMail(false);
  };

  const validateRegister = () => {
    if (name == "" || email == "" || age == "" || charge == "" || phone == "") {
      console.log("Todos los campos son obligatorios");
      setErrorForm(true);
      return;
    }
    setErrorForm(false);
  };

  return (
    <>
      <h1>Agregar colaborador</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Nombre del colaborador"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className="form-control mb-3"
            type="text"
            placeholder="E-mail del colaborador"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="form-control mb-3"
            type="number"
            placeholder="Edad del colaborador"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Cargo del colaborador"
            value={charge}
            onChange={(event) => setCharge(event.target.value)}
          />
          <input
            className="form-control mb-3"
            type="number"
            placeholder="Teléfono del colaborador"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (e.target.value.length > 10) {
                console.log("el número es invalido");
              }
            }}
          />
          <button className="btn btn-success col-12" type="submit">
            {" "}
            Agregar Colaborador
          </button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
