import React from "react";
import { Button, Col, Container, Row, Tab, Table, Tabs } from "react-bootstrap";
import { FaUser } from 'react-icons/fa';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import './index.scss';

const Dashboard = () => {

    return(
        <Container className="dashboard py-5">
            <Row>
                <Col xs={12} lg={3}>
                    <Row className="d-flex align-items-center mb-5">
                        <Col xs={4}> 
                            <span className="dashboard__user-avatar">
                                <RiCheckboxBlankCircleFill color="#f8f9fa" size="5x" />
                                <FaUser className="fs-4 dashboard__user-icon" color="#010101"/>
                            </span>
                        </Col>
                        <Col xs={8} className="ps-0">
                            <h4 className="mb-0">Ismael Junior</h4>
                            <p className="text-muted mb-0">ag: 1234 c/c: 4321-5</p>
                        </Col>                        
                    </Row>
                    <Button className="text-start d-grid w-100 dashboard__button" variant="link" size='lg'>Minha Conta</Button>
                    <Button className="text-start d-grid w-100 dashboard__button" variant="link" size='lg'>Pagamentos</Button>
                    <Button className="text-start d-grid w-100 dashboard__button" variant="link" size='lg'>Extrato</Button>
                </Col>
                <Col xs={12} lg={3} className='mt-lg-5 pt-lg-4'>
                    <h3 className="my-5">Conta corrente</h3>
                    <h6>
                        <small className="fw-bolder">Saldo em conta corrente</small>
                    </h6>
                    <h4 className="text-success mb-lg-4">
                        <small className="fs-6">R$</small> 3.450,<small className="fs-6">00</small>
                    </h4>
                    <h6>
                        <small className="fw-bolder">Cheque especial</small>
                    </h6>
                    <p className="mb-0">
                        <small>Limite disponível</small>
                    </p>
                    <p className="mb-4">
                        <small>R$ 5.000,00</small>
                    </p>
                    <Button variant="secondary" className="mb-5">Ver Extrato</Button>
                </Col>
                <Col xs={12} lg={6} className="mt-lg-5 pt-lg-5">
                    <Tabs
                    defaultActiveKey="latest"
                    transition={false}
                    id="collum-3"
                    className="mb-3 mt-lg-5 pt-lg-5 fs-6"
                    justify 
                    >
                        <Tab eventKey="latest" title="Últimos lançamentos" >
                            <Table striped bordered hover>
                                <tbody>
                                    <tr className="fw-bold">
                                    <td>Data</td>
                                    <td>Descrição</td>
                                    <td>Valor(R$)</td>
                                    </tr>                                    
                                    <tr>
                                    <td>22/07</td>
                                    <td>SAQUE 24H 012345</td>
                                    <td className="fw-bold">300,00</td>
                                    </tr>
                                    <tr>
                                    <td>21/07</td>
                                    <td>SUPERMERCADO 2312332</td>
                                    <td className="fw-bold">275,90</td>
                                    </tr>
                                    <tr>
                                    <td>21/07</td>
                                    <td>ESTACIONAMENTO 123234</td>
                                    <td className="fw-bold">12,00</td>
                                    </tr>
                                    <tr>
                                    <td>21/07</td>
                                    <td>PAGAMENTO ALUGUEL 123432</td>
                                    <td className="fw-bold">1.500,00</td>
                                    </tr>
                                </tbody>
                            </Table>                                            
                        </Tab>
                        <Tab eventKey="future" title="Lançamentos futuros">
                            
                        </Tab>
                    </Tabs>                    
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;