import React, { useState } from "react";
import { Card, Row, Col, Button, Image, Container } from "react-bootstrap";
import AccoutModal from "../AccountModal";
import logo from "../../assets/logo__magic-pay--mobile.png";
import logoDesktop from "../../assets/logo__magic-pay.png";
import "./index.scss";

const Hero = () => {
    const [showModal, setShowModal] = useState(false);
    return(
    <Card className="text-center text-white hero">
        <Container>
            <Row className="row-2">
                <Col lg className="text-lg-end my-lg-5">
                    <Image className="d-lg-none" src={logo} />
                    <Image className="d-none d-lg-inline-block" src={logoDesktop} />
                </Col>
                <Col lg className="text-lg-start my-lg-5 fs-5">
                    <p>Pague suas contas pelo nosso APP</p>
                    <Button variant="outline-light" onClick={() => setShowModal(true)}>Abra sua conta</Button>
                </Col>
            </Row>
        </Container>
        <AccoutModal show={showModal} handleClose={() => setShowModal(false)}/>
    </Card>     
)};

export default Hero;