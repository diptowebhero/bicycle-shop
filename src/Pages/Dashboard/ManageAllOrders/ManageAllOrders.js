import React, { useEffect, useState } from "react";
import "./ManageAllOrders.css";
const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const[control,setControl] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, [control]);
  const deleteOrderAdmin = (id) => {
    const proceed = window.confirm("Are you sure? you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            const remainingOrder = orders.filter((order) => order._id !== id);
            setOrders(remainingOrder);
          }
        });
    }
  };

  const confirmOrder = (id) => {
    fetch(`http://localhost:5000/confirm/${id}`,{
        method: "PUT",
    })
    .then((res) => res.json())
    .then(data=>{
        if(data.modifiedCount === 1){
            alert('Order Confirmed Successfully');
            setControl(!control)
        }
    })
  };
  return (
    <div>
      <div
        className=""
        style={{
          color: "white !important",
        }}
      >
        <div style={{ borderRadius: "5px" }} className="shadow bg-white mt-4">
          <div style={{ width: "100%", overflow: "auto" }}>
            <table className="table table-hover text-center">
              <thead className="theads">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Status</th>
                  <th scope="col">Cancellation</th>
                  <th scope="col">Confirm</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order) => {
                  const { title } = order?.order;
                  const { status, email, name, _id } = order;
                  return (
                    <tr>
                      <td className="td">{name}</td>
                      <td className="td">{email}</td>
                      <td className="text-primary">{title}</td>
                      <td className="td">{status}</td>
                      <td className="td">
                        <button
                          onClick={() => deleteOrderAdmin(_id)}
                          className="btn btn-danger"
                        >
                          Cancel
                        </button>
                      </td>
                      <td className="td">
                        <button
                          onClick={() => confirmOrder(_id)}
                          className="btn btn-danger"
                        >
                          Confirm
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
