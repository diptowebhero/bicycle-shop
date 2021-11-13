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
    fetch(`https://enigmatic-plateau-73097.herokuapp.com/orders/${email}`)
      .then((response) => response.json())
      .then((data) => {
          setOrder(data);
      });
  }, [email]);
  return (
    <div>
        <Row xs={1} md={3} className="w-100 mx-auto">
              {order.map(singleOrder => <SignleOrder order={singleOrder}></SignleOrder>)}  
        </Row>
    </div>
  );
};

export default OrderList;
