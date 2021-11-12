import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit ,reset} = useForm();
  const onSubmit = (data) => {
    fetch("https://enigmatic-plateau-73097.herokuapp.com/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.insertedId){
            alert('Product Add successfully!!')
            reset()
        };
      });
  };
  return (
    <Container className="mt-4">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Add New Order</h2>
          <input {...register("title")} placeholder="Product-Name" />
          <input {...register("price")} placeholder="Price" />
          <input {...register("desc")} placeholder="Description" />
          <input {...register("img")} placeholder="Img-Url" />
          <input type="submit" value="Add Now" />
        </form>
      </div>
    </Container>
  );
};

export default AddProduct;
