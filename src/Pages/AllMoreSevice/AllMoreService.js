import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const AllMoreService = ({ service }) => {
  const{img,desc,title,price,_id} = service;
  return (
    <Col className="mt-4">
      <Card style={{borderRadius:"20px",border:"none"}}>
        <Card.Img style={{width:'100%',margin:'auto'}} variant="top" src={img} />
        <Card.Body className="card-body">
          <Card.Title className="title">{title}</Card.Title>
          <Card.Text>
            <p className="m-0">{desc}</p>
          </Card.Text>
          <Card.Text>
            <h5><span class="dollar">$</span>{price}</h5>
          </Card.Text>
          <Link to={`/booking/${_id}`}>
          <button className="buy-btn" variant="">Buy Now</button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AllMoreService;
