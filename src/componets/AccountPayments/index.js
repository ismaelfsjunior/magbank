import React from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
const Payments = () => {
    return(
    <>    
        <Col xs={12} lg={6} className="mt-lg-5 pt-lg-5">
            <h1 className="pt-lg-4">Pagamentos</h1>
            <Tabs
            defaultActiveKey="boleto"
            transition={false}
            id="collum-3"
            className="mb-3 mt-lg-2 pt-lg-2"
            justify 
            >
                <Tab eventKey="boleto" title="Boleto" >
                    <form>
                        <div class="mb-3">
                            <label for="codbar" className="form-label mt-3">Código de barras</label>
                            <input type="text" class="form-control" id="codbar" placeholder="Insira o código de barras"/>
                        </div>
                        <label for="exampleCheck1" className="form-label mt-3">Forma de pagamento</label>
                        <Row className="mb-3">
                            <Col>
                            <input type="radio" class="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label ps-2" for="exampleCheck1">Debito em conta corrente</label>                      
                            </Col>
                            <Col>
                            <input type="radio" class="form-check-input" id="exampleCheck2" />
                            <label className="form-check-label ps-2" for="exampleCheck2">Cartão de credito</label>    
                            </Col>                    
                        </Row>    
                    
                        <button type="submit" className="btn btn-success mt-3">Continuar</button>
                    </form>                                              
                </Tab>
                <Tab eventKey="transference" title="Trasnferência">
                    <form className="pt-3 mb-5">
                        <Row>
                            <Col>
                                <label for="banco" className="form-label">Banco</label>
                                <input type="text" class="form-control" id="banco" />
                            </Col>                   
                            <Col>
                                <label for="agencia" className="form-label">Agência</label>
                                <input type="text" class="form-control" id="agencia" />
                            </Col>
                            <Col>
                                <label for="conta" className="form-label">Conta corrente</label>
                                <input type="text" class="form-control" id="conta" />
                            </Col>                        
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <label for="valor" className="form-label">Valor da transferência</label>
                                <input type="text" class="form-control" id="valor" />
                            </Col>                   
                            <Col>
                                <label for="idextrato" className="form-label">Identificação no extrato</label>
                                <input type="text" class="form-control" id="idextrato" />
                            </Col>                        
                        </Row>                        
                        <button type="submit" className="btn btn-success mt-4">Continuar</button>
                    </form>                            
                </Tab>
            </Tabs>                    
        </Col>
    </>
)
};
export default Payments;
