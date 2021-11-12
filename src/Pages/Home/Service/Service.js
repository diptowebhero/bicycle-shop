import { Container, Row, Spinner } from "react-bootstrap";
import useAuth from "../../../hook/useAuth";
import Allservices from "../AllServices/Allservices";
import "./Service.css";
const Service = () => {
  const { services } = useAuth();
  return (
    <div className="service-container">
      <Container>
        <div className="service-title mt-3">
          <h5>What We Do</h5>
          <h3>Service We Provided</h3>
        </div>

        {services.length === 0 ? (
          <div className="text-center my-5 py-5">
            <Spinner className="text-center" animation="grow" />
          </div>
        ) : (
          <Row xs={1} md={3} className="w-100 mx-auto mb-3">
            {services.slice(0, 6).map((service) => (
              <Allservices key={service._id} service={service}></Allservices>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Service;
