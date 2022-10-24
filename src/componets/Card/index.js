import React from "react";
import { Card, Button } from "react-bootstrap";
import "./index.scss";

const Cards = (props) => (
    <Card className="cards">
    <Card.Img className="cards__img" src={props.src} />
    <Card.Body>
        <Card.Title className="cards__title">{props.Title}</Card.Title>
        <Card.Text className="cards__text">
            {props.Text}
        </Card.Text>
        <Button className="cards-btn">Peça já</Button>
    </Card.Body>
</Card>     

);

export default Cards;