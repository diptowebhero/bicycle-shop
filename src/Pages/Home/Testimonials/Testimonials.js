import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Testimonial from "../Testimonial/Testimonial";
import './Testimonial.css'
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("https://enigmatic-plateau-73097.herokuapp.com/reviews")
      .then((response) => response.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="testimonial-container mt-5 p-4">
      <Container>
        <div className="testimonial-title">
          <h4>Our Customer Say</h4>
          <h3>Testimonial</h3>
        </div>

        <Row xs={1} md={3} className="mx-auto">
          {testimonials.map(testimonial=><Testimonial key={testimonial._id} testimonial={testimonial}></Testimonial>)}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
