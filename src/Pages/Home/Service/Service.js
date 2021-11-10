import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Allservices from "../AllServices/Allservices";
import "./Service.css";
const Service = () => {
    const[services,setService] = useState([]);

    useEffect(() => {
        fetch('./service.json')
        .then(response => response.json())
        .then(data => setService(data))
    },[])
  return (
    <div className="service-container">
      <Container>
        <div className="service-title mt-3">
          <h5>What We Do</h5>
          <h3>Service We Provided</h3>
        </div>

        <Row xs={1} md={3} className="w-100 mx-auto">
            {
                services.map(service => <Allservices key={service.title} service={service}></Allservices>)
            }
        </Row>
      </Container>
    </div>
  );
};

export default Service;
