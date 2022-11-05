import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import './index.scss';

const AccoutModal = ({show, handleClose}) => {
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="modal-title">Abra sua conta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3 fw-bold text-center" controlId="formBasicName">
                        <Form.Label>Seu nome</Form.Label>
                        <Form.Control type="text" placeholder="Seu nome" />
                    </Form.Group>

                    <Form.Group className="mb-3 fw-bold text-center" controlId="formBasicEmail">
                        <Form.Label>Seu email</Form.Label>
                        <Form.Control type="email" placeholder="Seu email" />
                    </Form.Group>

                    <Form.Group className="mb-3 fw-bold text-center" controlId="formBasicEmail">
                        <Form.Label>Sua cidade</Form.Label>
                        <Form.Control as='select'>
                            <option value="1">Imperatriz - MA</option>
                            <option value="1">João Lisboa - MA</option>
                            <option value="1">Açailandia - MA</option>
                            <option value="1">São Luis - MA</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Check 
                        className="modal-checkbox"
                        type='checkbox'
                        id='custom-checkbox'
                        label='Concordo com os termos de uso'
                    />
                </Form>               
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            <Button className="modal-bnt" variant="primary" onClick={handleClose}>
                Criar conta
            </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AccoutModal;