import React from "react";
import './Allservice.css'
import { Card, Col } from "react-bootstrap";

const Allservices = ({ service }) => {
  const{img,desc,title,price} = service;
  return (
    <Col className="mt-4">
      <Card style={{borderRadius:"20px",border:"none"}}>
        <Card.Img style={{width:'70%',margin:'auto'}} variant="top" src={img} />
        <Card.Body className="card-body">
          <Card.Title className="title">{title}</Card.Title>
          <Card.Text>
            <p className="m-0">{desc}</p>
          </Card.Text>
          <Card.Text>
            <h5><span class="dollar">$</span>{price}</h5>
          </Card.Text>
          <button className="buy-btn" variant="">Buy Now</button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Allservices;
