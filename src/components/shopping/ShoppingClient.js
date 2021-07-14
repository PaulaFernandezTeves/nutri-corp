import React, { useState } from "react";
import { Header } from "../Header";
import { Form, InputGroup, Table, Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ModalClient } from '../home/ModalClient';

export const ShoppingClient = () => {
  const history = useHistory();
  const [client, setClient] = useState({
    name: "",
    employee_code: "",
    postal_code: "",
  });

  const [grouClient, setGroupClient] = useState([]);

  const handleClient = (e) => {
    const value = e.target.value;
    setClient({ ...client, [e.target.name]: value });
  };

  const arrayClient = (e) => {
    e.preventDefault();
    if (client.name !== "") {
      setGroupClient([...grouClient, client]);
    }
  };

  // MODAL

  return (
    <>
      <Header />
      <section className="bri-containerSaldo">
        <i>⬅</i>
        <p>
          Saldo disponible: <b>S/50.00</b>
        </p>
      </section>
      <section className="bri-containerDescription">
        <h6>Cliente</h6>
      </section>
      <Form>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="check-radio">
            <Form.Check
              inline
              label="Para Mi"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
              onChange={() => history.push('/usuario')}
            />
            <Form.Check
              inline
              label="Otro Cliente"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
              checked
              onChange={() => history.push('/cliente')}
            />
          </div>
        ))}
      </Form>
      <Form>
        <section className="inputNombre">
          <Form.Group controlId="formGroupName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={(e) => handleClient(e)}
            />
          </Form.Group>
        </section>
        <section className="inputCodeNumber">
          <Form.Group controlId="formGroupNumber">
            <Form.Label>Código de trabajador</Form.Label>
            <Form.Control
              type="number"
              name="employee_code"
              onChange={(e) => handleClient(e)}
            />
          </Form.Group>
        </section>
        <section className="inputZoneNumber">
          <Form.Group controlId="formGroupNumber">
            <Form.Label>Código de zona</Form.Label>
            <Form.Control
              type="number"
              name="postal_code"
              onChange={(e) => handleClient(e)}
            />
          </Form.Group>
        </section>
        <section className="paula-consultaCodigo">
          <InputGroup className="mb-3 input-group m-auto">
            <p className="mb-0">Consulta el código de zona</p>
            <InputGroup.Text className="border-0 bg-transparent text-danger">
              <i class="fas fa-search"></i>
            </InputGroup.Text>
          </InputGroup>
        </section>
        <section className="btnAgregar">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={(e) => arrayClient(e)}
          >
            Agregar cliente
          </button>
        </section>
      </Form>

      <section className="paula-listClientOther">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>DNI /Código de trabajador </th>
              <th>Código de zona</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {grouClient.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.employee_code}</td>
                <td>{user.postal_code}</td>
                <td>
                  <i class="fas fa-edit"></i>
                </td>
                <td
                  onClick={() =>
                    setGroupClient(
                      grouClient.filter(
                        (elem) => elem.employee_code !== user.employee_code
                      )
                    )
                  }
                >
                  <i class="fas fa-trash-alt"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>¡Felicidades!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tu pedido ha sido regitrado exitosamente y será descontado en tu
            próxima planilla
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              ACEPTAR
            </Button>
          </Modal.Footer>
        </Modal>*/}
        <ModalClient /> 
      </section>
    </>
  );
};