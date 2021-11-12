import React from "react";
import { Card, Col } from "react-bootstrap";

const SignleOrder = (props) => {
  const { status, _id } = props?.order;
  const { price, title, img } = props?.order.order;
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
        <Card style={{ borderRadius: "20px", border: "none" }}>
          <Card.Img
            style={{ width: "70%", margin: "auto" }}
            variant="top"
            src={img}
          />
          <Card.Body className="card-body">
            <Card.Title className="title">{title}</Card.Title>
            <Card.Text>
              <p className="m-0 text-success">{status}</p>
            </Card.Text>
            <Card.Text>
              <h5>
                <span class="dollar">$</span>
                {price}
              </h5>
            </Card.Text>
            <button
              onClick={() => deleteOrder(_id)}
              className="buy-btn"
              variant=""
            >
              Cancel
            </button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SignleOrder;
