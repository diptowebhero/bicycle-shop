import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth";

const CustomerReview = () => {
  const { Allcontext } = useAuth();
  const { user } = Allcontext;
  const { photoURL } = user;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.photoURL = photoURL;
    fetch("https://enigmatic-plateau-73097.herokuapp.com/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Review Send Successfully!!");
          reset();
          window.location.reload()
        }
      });
  };

  return (
    <Container className="mt-4">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Review</h2>
          <input {...register("name")} placeholder="Your Name" />
          <input
            type="number"
            {...register("rating")}
            placeholder="Rating 1-5"
          />
          <input
            {...register("desc")}
            placeholder="Said Something About This Website"
          />
          <input type="submit" value="Add Now" />
        </form>
      </div>
    </Container>
  );
};

export default CustomerReview;
