import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";

const Testimonial = ({ testimonial }) => {
  const { name, desc, rating, photoURL } = testimonial;
  return (
    <Col className="mt-4">
      <Card className="shadow" style={{ borderRadius: "20px", border: "none", maxWidth: "25rem" }}>
        <Card.Img
          style={{
            width: "150px",
            margin: "auto",
            objectFit: "contain",
            borderRadius: "50%",
            marginTop: "10px",
          }}
          variant="top"
          src={photoURL}
        />
        <Card.Body className="card-body text-center">
          <Card.Title className="title">{name}</Card.Title>
          <Card.Text>
            <p className="m-0">{desc}</p>
            <Rating
              initialRating={rating}
              emptySymbol="fa fa-star"
              fullSymbol="fas fa-star"
              readonly
            ></Rating>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Testimonial;
