import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const addAdmin = (e) => {
    const user = { email };
    fetch("https://enigmatic-plateau-73097.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.modifiedCount){
          alert('Admin add successfully')
        }
        setEmail('')
      });
    e.preventDefault();
  };
  return (
    <div className="form-container mt-4">
      <form onSubmit={addAdmin}>
        <h3>Make Admin</h3>
        <input
          onBlur={handleOnBlur}
          type="email"
          placeholder="Email"
          required
        />
        <button type="submit">Make Admin</button>
      </form>
    </div>
  );
};

export default MakeAdmin;
