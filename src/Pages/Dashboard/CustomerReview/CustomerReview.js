import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CustomerReview = () => {
  const { register, handleSubmit ,reset} = useForm();
  const onSubmit = (data) => {
    fetch("https://enigmatic-plateau-73097.herokuapp.com/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.insertedId){
          alert('Review Send Successfully!!');
          reset();
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
