import React from "react";
import { Card, Row, Col, Button, Image, Container } from "react-bootstrap";
//import hero from "../../assets/hero.jpg";
import logo from "../../assets/logo__magic-pay--mobile.png";
import logoDesktop from "../../assets/logo__magic-pay.png";
import "./index.scss";

const Hero = () => (
    <Card className="text-center text-white hero">
        <Container>
            <Row className="row-2">
                <Col lg className="text-lg-end my-lg-5">
                    <Image className="d-lg-none" src={logo} />
                    <Image className="d-none d-lg-inline-block" src={logoDesktop} />
                </Col>
                <Col lg className="text-lg-start my-lg-5 fs-5">
                    <p>Pague suas contas pelo nosso APP</p>
                    <Button variant="outline-light">Abra sua conta</Button>
                </Col>
            </Row>
        </Container>
    </Card>     
);

export default Hero;