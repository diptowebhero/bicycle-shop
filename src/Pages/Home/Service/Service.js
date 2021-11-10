
import { Container, Row } from "react-bootstrap";
import useAuth from "../../../hook/useAuth";
import Allservices from "../AllServices/Allservices";
import "./Service.css";
const Service = () => {
    const{services} = useAuth();
  return (
    <div className="service-container">
      <Container>
        <div className="service-title mt-3">
          <h5>What We Do</h5>
          <h3>Service We Provided</h3>
        </div>

        <Row xs={1} md={3} className="w-100 mx-auto mb-3">
            {
                services.map(service => <Allservices key={service.title} service={service}></Allservices>)
            }
        </Row>
      </Container>
    </div>
  );
};

export default Service;
