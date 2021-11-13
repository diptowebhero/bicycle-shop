import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Order.css";
const SignleOrder = (props) => {
  const { status, _id } = props?.order;
  const { title, img, desc } = props?.order.order;
  const deleteOrder = (id) => {
    const proceed = window.confirm("Are you sure? you want to delete");
    if (proceed) {
      fetch(`https://enigmatic-plateau-73097.herokuapp.com/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            alert("product deleted");
            window.location.reload();
          }
        });
    }
  };
  return (
    <div>
      <Col className="mt-4">
        <Card className="card" height="100" style={{ borderRadius: "20px", border: "none", padding: "5px" }}>
          <Card.Body className="card-body d-flex align-items-center justify-content-between">
            <Card.Img
              height="100"
              style={{
                width: "100px",
                borderRadius: "100%",
                objectFit: "contain",
              }}
              variant="top"
              src={img}
            />
            <Card.Text>
              <p className="text-success fw-bold">{status}</p>
            </Card.Text>
          </Card.Body>
          <h5>{title}</h5>
          <p className="">{desc.split(" ").slice(0, 14).join(" ")}</p>
          <button
            onClick={() => deleteOrder(_id)}
            className="buy-btn mx-auto"
            variant=""
          >
            Cancel
          </button>
        </Card>
      </Col>
    </div>
  );
};

export default SignleOrder;
