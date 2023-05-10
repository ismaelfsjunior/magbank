import React from "react";
import { Button, Col, Tab, Table, Tabs } from "react-bootstrap";
const AccountBalance = ({data}) => {
    const { latestBalance, futureBalance } = data;
    return(
    <>
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
                    <Table striped borderless hover>
                        <tbody>
                            <tr className="fw-bold">
                            <td>Data</td>
                            <td>Descrição</td>
                            <td>Valor(R$)</td>
                            </tr>  
                            {latestBalance.map(({date, description, value}) => (
                                <tr>
                                <td>{date}</td>
                                <td>{description}</td>
                                <td className="fw-bold">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>                                            
                </Tab>
                <Tab eventKey="future" title="Lançamentos futuros">
                <Table striped borderless hover>
                        <tbody>
                            <tr className="fw-bold">
                            <td>Data</td>
                            <td>Descrição</td>
                            <td>Valor(R$)</td>
                            </tr>  
                            {futureBalance.map(({date, description, value}) => (
                                <tr>
                                <td>{date}</td>
                                <td>{description}</td>
                                <td className="fw-bold">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>                            
                </Tab>
            </Tabs>                    
        </Col>
    </>
)
};
export default AccountBalance;
