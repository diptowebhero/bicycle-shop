import React from "react";
import "./Banner.css";
import bannerImg from "../../../assets/images/banner.png";
import { Button, Col, Container, Row } from "react-bootstrap";
const Banner = () => {
  return (
    <Container>
      <Row className="w-100 mx-auto align-items-center">
        <Col md={6} sm={12}>
            <div className="banner-text">
              <h2>largest bicycle manufacturer</h2>
              <p>
                checkout our exiclusive collection of <br/>mounten bike,city
                bike,girls bike and more
              </p>
              <Button className="btn-banner" variant="">Explore</Button>
            </div>
        </Col>
        <Col md={6} sm={12}>
          <img src={bannerImg} className="w-100" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
