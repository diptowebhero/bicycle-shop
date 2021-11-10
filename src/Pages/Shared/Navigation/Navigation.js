import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import "./Navigation.css";
const Navigation = () => {
  const { Allcontext } = useAuth();
  const { user, logOut } = Allcontext;
  return (
    <Container>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className="nav-logo" href="#home">
            Supper Bicycle
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
            </Nav>
            <Nav>
              {!user.email ? (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              ) : (
                <NavDropdown
                  title={
                    <img
                      style={{
                        width: "45px",
                        borderRadius: "50%",
                      }}
                      src={user.photoURL}
                      alt=""
                    />
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item className="text-center">
                    <Button onClick={logOut}>Log out</Button>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Navigation;
