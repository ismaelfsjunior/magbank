import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "../../assets/logofooter.png";
import appstore from "../../assets/appstore.jpg";
import googleplay from "../../assets/googleplay.jpg";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import "./index.scss";

const Footer = () => {
    return(
        <footer className="footer">
            <Container className="text-center py-5">
                <Row className="d-flex align-items-center justify-items-center">
                    <Col xs={12} lg={6} className="mb-5 mb-md-0">
                        <Image src={logo}/>
                    </Col>
                    <Col xs={12} lg={4} className="mb-5 mb-md-0" >
                        <Image src={appstore} className="me-3"/>
                        <Image src={googleplay}/>
                    </Col>
                    <Col xs={12} lg={2} className="fs-1">
                        <FaFacebook className="me-2" color="#7c7c7c"/>
                        <FaTwitter className="me-2" color="#7c7c7c"/>
                        <FaYoutube color="#7c7c7c"/>
                    </Col>                
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;