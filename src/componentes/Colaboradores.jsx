import React from 'react'
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BaseColaboradores } from '../BaseColaboradores';
import { nanoid } from 'nanoid';



const Colaboradores = (Props) => {
  const [nombreCldor, setnombreCldor] = useState("");
  const [emailCldor, setemailCldor] = useState("");
  const [listaCldor, setlistaCldor] = useState(BaseColaboradores);

  const agregarColaborador = (e) => {
    e.preventDefault();
    if (!nombreCldor.trim() || !emailCldor.trim()){
      alert ("debes llenar todos los datos");
    }
    else {
    setlistaCldor([...listaCldor, { id: nanoid(), nombre: nombreCldor, correo: emailCldor}])
    }
  };
  return (
  <>
    <div className= "formulario">
      <Form onSubmit = {agregarColaborador}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre del colaborador</Form.Label>
          <Form.Control type="text" placeholder="Ingresa el nombre del colaborador" onChange ={(e) => setnombreCldor(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Correo del colaborador</Form.Label>
          <Form.Control type="email" placeholder="Ingresa el nombre del colaborador" onChange ={(e) => setemailCldor(e.target.value)} />
          </Form.Group>
        <Button variant="primary" type="submit">
              Agregar colaborador
        </Button>
      </Form>
    

    <hr/>
    
    <div>
            <h1>Listado de colaboradores</h1>
            {listaCldor.filter((el) => {
              if (Props.buscador === "") {
                return el;
              } else if (
                el.nombre
                  .toLocaleLowerCase()
                  .includes(Props.buscador.toLocaleLowerCase())
              ) {
                return el;
              }
            }).map((el) => (
              <div key={el.id}>
                <p>
                  {el.nombre} - {el.correo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
  );
}

export default Colaboradores