import React, { useState }  from "react";
import { Card, Container, Button, Row, Col, Image } from "react-bootstrap";
import { FaCreditCard, FaShoppingCart, FaWallet, FaMobile } from "react-icons/fa";
import AccoutModal from "../AccountModal";
import cartao from "../../assets/cartao.png";
import card01 from "../../assets/card01.jpg";
import card02 from "../../assets/card02.jpg";
import card03 from "../../assets/card03.jpg";
import Cards from "../Card/index.js";
import "./index.scss";

const Main = () => {
    const [showModal, setShowModal] = useState(false);
    return(
    <Card>
        <Container>
            <Row className="row-3">
                <Col lg className="text-lg-start">
                    <h1 className="h1--copy">Cartão de crédito</h1>
                    <Row className="row-p">
                        <Col lg className="text-lg-start">
                            <p><FaCreditCard />Crédito Pessoal</p>
                            <p><FaMobile />APP</p>
                        </Col>
                        <Col lg className="text-lg-start">
                            <p><FaShoppingCart />Pagamento Online</p>
                            <p><FaWallet />Carteira Digital</p>
                        </Col>                    
                    </Row>                    
                </Col>
                <Col lg className="text-center text-lg-end">
                    <Image className="d-lg-none img--copy" src={cartao} />
                    <Image className="d-none d-lg-inline-block img--copy" src={cartao} />
                </Col>                
            </Row>
            <Row>
                <Col lg>
                    <Cards 
                        src={card01} 
                        Title='Lorem ipsum dolor sit' 
                        Text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue.' 
                    />
                </Col>
                <Col lg>
                    <Cards 
                        src={card02} 
                        Title='Phasellus eget elementum diam' 
                        Text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue.' 
                    />
                </Col>                
                <Col lg>
                    <Cards 
                        src={card03} 
                        Title='Fusce tempus' 
                        Text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue.' 
                    />
                </Col>                
            </Row>
            <div className="text-center">
                <Button type="button" className="btn main-btn btn-primary" onClick={() => setShowModal(true)}>Abra sua conta</Button>
            </div>
        </Container>
        <AccoutModal show={showModal} handleClose={() => setShowModal(false)}/>
    </Card>     
)};

export default Main;