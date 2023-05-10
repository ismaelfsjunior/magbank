import React from "react";
import { Col, Table } from "react-bootstrap";
const History = ({data}) => {
    const { extrato } = data;
    return(
    <>    
        <Col xs={12} lg={6} className="mt-lg-5 pt-lg-5">
            <h1 className="pt-5 pb-2">Extrato de conta corrente</h1>
                    <Table striped borderless hover>
                        <tbody>
                            <tr className="fw-bold">
                            <td>Data</td>
                            <td>Descrição</td>
                            <td>Valor(R$)</td>
                            <td>Saldo(R$)</td>
                            </tr>  
                            {extrato.map(({date, description, value, saldo}) => (
                                <tr>
                                <td>{date}</td>
                                <td>{description}</td>
                                <td className="fw-bold">{value}</td>
                                <td className="fw-bold">{saldo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>                                                              
        </Col>
    </>
)
};
export default History;