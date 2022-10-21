import React from "react";
import { Container, Navbar, Nav, ButtonGroup, Button, NavDropdown} from "react-bootstrap";
import './Index.scss';
import logo from "../../assets/logo.svg";

const Navigation = () => (
    <Navbar variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
            <img
                src={logo}
                height="30"
                className="d-inline-block align-top"
                alt="Magbank"
            />            
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
                            <NavDropdown.Item href="cpf">CPF</NavDropdown.Item>
                            <NavDropdown.Item href="conta">Conta</NavDropdown.Item>
                        </NavDropdown>
                    </Button>
                    <Button variant="outline-light">abra sua conta</Button>
                </ButtonGroup>
            </Navbar.Collapse>
        </Container>
    </Navbar>    
);

export default Navigation;