// import React from 'react';

// export const Footer = () => {
//     return(
//         <div>
//             <footer className="text-white paula-footer">
//                 <div className="container">
//                     <nav className="row">
//                         <ul className="col-12 col-md-2 paula-footer-container"></ul>
//                             <li className="paula-barra">Saldo disponible</li>
//                     </nav>
//                 </div>
//             </footer>
//         </div>
//     )
// }

import React, {useState} from 'react';
import { Modal } from "react-bootstrap";


export const ModalClient = () => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button className="btn-finalizar" onClick={handleShow}>
          Finalizar pedido
        </button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header  closeButton id='pau-btn' >
            <Modal.Title>¡Felicidades!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tu pedido ha sido registrado exitosamente y será descontado en tu próxima compra
          </Modal.Body>
          <Modal.Footer>
            <button className="paula-btn"onClick={handleClose}>
              Aceptar
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }