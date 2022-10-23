import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
//import hero from "../../assets/hero.jpg";
import logo from "../../assets/logo__magic-pay--mobile.png";
import logoDesktop from "../../assets/logo__magic-pay.png";
import "./index.scss";

const Hero = () => (
        // <Container>
                <div className="jumobtron text-center text-light hero">
                    <Row>
                        <Col lg className="text-lg-end my-lg-5">
                            <Image className="d-lg-none" src={logo} />
                            <Image className="d-none d-lg-inline-block" src={logoDesktop} />
                        </Col>
                        <Col lg className="text-lg-start my-lg-5">
                            <p>Pague suas contas pelo nosso APP</p>
                            <Button variant="outline-light">Abra sua conta</Button>
                        </Col>
                    </Row>
                </div>     
        // </Container>     
);

export default Hero;