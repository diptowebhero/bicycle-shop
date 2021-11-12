import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import BookOrder from "./Pages/BookOrder/BookOrder";
import Dashboard from "./Pages/Dashboard/Dashbored/Dashboard";
import OrderList from "./Pages/Dashboard/OrderList/OrderList";
import Home from "./Pages/Home/Home/Home";
import MoreService from "./Pages/Home/MoreService/MoreService";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/morService">
            <MoreService></MoreService>
          </PrivateRoute>
          <PrivateRoute path="/booking/:bookingId">
            <BookOrder></BookOrder>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/orderList">
            <OrderList></OrderList>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
