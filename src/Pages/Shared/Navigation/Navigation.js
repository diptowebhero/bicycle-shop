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
            Bicycle Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              {!user.email ? (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link as={Link} to="/Dashboard">
                    Dashboard
                  </Nav.Link>
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
                      <p style={{ fontSize: "12px" }} className="m-0">
                        {user.email}
                      </p>
                      <Button variant="" className="drop-btn" onClick={logOut}>Log out</Button>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Navigation;
