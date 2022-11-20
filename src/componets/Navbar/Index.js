import React, { useState } from "react";
import { Container, Navbar, Nav, ButtonGroup, Button, NavDropdown} from "react-bootstrap";
import AccoutModal from "../AccountModal";
import './Index.scss';
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [showModal, setShowModal] = useState(false);
    return(
    <Navbar variant="dark" expand="lg">
        <Container>
            <Navbar.Brand>
                <Link to={'/'}>
                    <img
                        src={logo}
                        height="30"
                        className="d-inline-block align-top"
                        alt="Magbank"
                    />                           
                </Link> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#cartao">Cartão</Nav.Link>
                <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-light">
                        <NavDropdown title="Acessar minha conta">
                            <NavDropdown.Item> 
                                <Link to={'/login'}>Pessoa física</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item> 
                                <Link to={'/login'}>Pessoa jurídica</Link>
                            </NavDropdown.Item>                            
                        </NavDropdown>
                    </Button>
                    <Button variant="outline-light" onClick={() => setShowModal(true)}>abra sua conta</Button>
                </ButtonGroup>
            </Navbar.Collapse>
        </Container>
        <AccoutModal show={showModal} handleClose={() => setShowModal(false)}/>
    </Navbar>    
)};

export default Navigation;