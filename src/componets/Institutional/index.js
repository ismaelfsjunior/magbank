import React, { useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { FaMobile, FaMobileAlt, FaGlobe, FaShieldAlt } from "react-icons/fa";
import AccoutModal from "../AccountModal";
import "./index.scss";

const Institutional = () => {
    const [showModal, setShowModal] = useState(false);
    return(
    <Card className="institutional">
        <Container className="text-light my-lg-5">
            <Row>
                <Col xs={12} lg={5} />
                <Col xs={12} lg={6}>
                    <h2 className="fs-1 fw-light lh-lg mt-5" >Já nascemos digital</h2>
                    <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.</p>
                    <p className="my-4"><FaMobileAlt className="fs-2" /> Sem fila e sem burocracia</p>    
                    <p className="my-4"><FaMobile className="fs-2" /> Simples e prático</p>
                    <p className="my-4"><FaGlobe className="fs-2" /> Abertura de conta 100% online</p>
                    <p className="my-4"><FaShieldAlt className="fs-2" /> Transaçoes mais seguras</p>
                    <Button className="btn btn-outline-light my-5" onClick={() => setShowModal(true)} >Abra sua conta</Button>
                </Col>
            </Row>
        </Container>
        <AccoutModal show={showModal} handleClose={() => setShowModal(false)}/>
    </Card>
)};

export default Institutional;