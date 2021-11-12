import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hook/useAuth";
import "./BookingOrder.css";
const BookOrder = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { Allcontext } = useAuth();
  const { user } = Allcontext;
  const { bookingId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/order/${bookingId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [bookingId]);
  const onSubmit = (data) => {
    data.order = product;
    data.status = "pending";
    fetch("http://localhost:5000/addOrders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          history.push("/");
          alert('Your order place successfully')
        }
      });
  };
  return (
    <Container className="mt-5 w-100 py-5 my-5 shadow">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} defaultValue={user?.displayName} />

          <input {...register("email")} defaultValue={user?.email} />
          <input {...register("phone")} placeholder="Phone" />
          <input {...register("Address")} placeholder="Address" />
          <input type="submit" value="Place Order" />
        </form>
      </div>
    </Container>
  );
};

export default BookOrder;
