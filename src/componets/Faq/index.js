import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { FaCreditCard, FaWallet, FaUserTie, FaShieldAlt } from "react-icons/fa";
import "./index.scss";

const Faq = () => {
    const options = [
        {icon: <FaCreditCard className="fs-1"/>, text: '  Cartão de crédito e débito'},
        {icon: <FaWallet className="fs-1"/>, text: '  Conta e abertura'},
        {icon: <FaShieldAlt className="fs-1"/>, text: '  Token digital'},
        {icon: <FaUserTie className="fs-1"/>, text: '  Produtos e serviços'}
    ];
    
    const [ index, setIndex ] = useState(0);

    const handleClick = key => {
        setIndex(key);
    };

    useEffect(() => {
        // console.log(index);
    },[index]);

    return(
    <section className="faq text-light">
        <Container className="py-3">
            <h2 className="faq-h2 py-5 text-center">Dúvidas frequentes</h2>
            <Row className="d-flex align-items-center justify-items-center">
                <Col className="d-lg-none mb-3" xs={12}>
                    <Row>
                        {options.map(({ icon }, key) => (
                            <Col className="d-flex justify-content-center" key={key}>
                                <p onClick={() => handleClick(key)}> {icon} </p>
                            </Col>
                        ))}
                    </Row>
                    <Row className="text-center mt-3">
                        <p>{options[index].text}</p>
                    </Row>                    
                </Col>
                <Col className="d-none d-lg-block">
                        {options.map(({ icon, text }, key) => (
                            <p className="mb-4 faq-acordion" onClick={() => handleClick(key)} key={key} >{ icon } <span className="ps-3">{ text }</span></p>
                        ))}                    
                </Col>
                <Col className="pt-3">
                    <Accordion defaultActiveKey='0' activeKey={`${index}`} alwaysOpen>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Lorem ipsum dolor sit amet</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>Nulla porttitor eros ac ex tristique posuere</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='2'>
                            <Accordion.Header>Quisque fringilla tincidunt arcu</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='3'>
                            <Accordion.Header>Nam elementum lobortis purus a maximus tortor</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>                                        
                    </Accordion>           
                </Col>
            </Row>
        </Container>
    </section>
    );
}
export default Faq;
