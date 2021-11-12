import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../../../hook/useAuth";
import SignleOrder from "./SignleOrder";

const OrderList = () => {
  const [order, setOrder] = useState([]);
  const { Allcontext } = useAuth();
  const { user } = Allcontext;
  const { email } = user;
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${email}`)
      .then((response) => response.json())
      .then((data) => {
          console.log(data)
          setOrder(data);
      });
  }, [email]);
  return (
    <div>
        <Row xs={1} md={3}>
              {order.map(singleOrder => <SignleOrder order={singleOrder}></SignleOrder>)}  
        </Row>
    </div>
  );
};

export default OrderList;
