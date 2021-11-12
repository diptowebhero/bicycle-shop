import React from "react";

const MakeAdmin = () => {
  return (
    <div className="form-container mt-4">
      <form>
        <h3>Make Admin</h3>
        <input name="email" type="email" placeholder="Email" required />
        <button>submit</button>
      </form>
    </div>
  );
};

export default MakeAdmin;
