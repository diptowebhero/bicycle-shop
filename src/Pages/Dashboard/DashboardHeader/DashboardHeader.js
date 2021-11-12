import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const DashboardHeader = () => {
  const { Allcontext } = useAuth();
  const { user, logOut } = Allcontext;
  return (
    <Navbar className="shadow"expand="lg">
      <Container>
        <Navbar.Brand className="nav-logo" href="#home">
          Supper Bicycle
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-center ms-auto">
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
  );
};

export default DashboardHeader;
