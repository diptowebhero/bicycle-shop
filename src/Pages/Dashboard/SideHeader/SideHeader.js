import React from "react";
import { Col, Row } from "react-bootstrap";
import "./SideHeader.css";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import OrderList from "../OrderList/OrderList";
import CustomerReview from "../CustomerReview/CustomerReview";
import Profile from "../Profile/Profile";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import Payment from "../Payment/Payment";
const SideHeader = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Row className="w-100">
        <Col className="shadow" md={2} sm={12}>
          <div className="side-bar">
            <div className="side-bar-text">
              <ul>
                <li>
                  <Link to={`${url}/profile`}>Profile</Link>
                </li>
                <li>
                  <Link to={`${url}/OrderList`}>Order List</Link>
                </li>
                <li>
                  <Link to={`${url}/review`}>Review</Link>
                </li>
                <li>
                  <Link to={`${url}/payment`}>Payment</Link>
                </li>
                <li>
                  <Link to={`${url}/addAdmin`}>Make Admin</Link>
                </li>
                <li>
                  <Link to={`${url}/manageOrders`}>Manage All Orders</Link>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col style={{backgroundColor:"#E5E5E5"}} md={10} sm={12}>
          <div className="text-center">
            <Switch>
              <Route exact path={path}>
                <Profile></Profile>
              </Route>
              <Route path={`${path}/OrderList`}>
                <OrderList></OrderList>
              </Route>
              <Route path={`${path}/review`}>
                <CustomerReview></CustomerReview>
              </Route>
              <Route path={`${path}/payment`}>
                <Payment></Payment>
              </Route>
              <Route path={`${path}/profile`}>
                <Profile></Profile>
              </Route>
              <Route path={`${path}/addAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route path={`${path}/manageOrders`}>
                <ManageAllOrders></ManageAllOrders>
              </Route>
            </Switch>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SideHeader;
