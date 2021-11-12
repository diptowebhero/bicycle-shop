import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../../hook/useAuth";
import AllMoreService from "../../AllMoreSevice/AllMoreService";

const MoreService = () => {
    const{services} = useAuth();
  return (
    <div className="service-container">
    <Container>
      <div className="service-title mt-3">
        <h5>More Services</h5>
        <h3>We Provided</h3>
      </div>

      <Row xs={1} md={3} className="w-100 mx-auto mb-3">
          {
              services.slice(6,16).map(service => <AllMoreService key={service.title} service={service}></AllMoreService>)
          }
      </Row>
    </Container>
  </div>
  );
};

export default MoreService;
