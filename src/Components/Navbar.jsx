import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

export default function MyNavbar() {
  const location = useLocation(); // Get the current URL

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Left-aligned Brand */}
        <Navbar.Brand as={Link} to="/">Student Registration App</Navbar.Brand>

        {/* Toggle Button for Mobile View */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>Home </Nav.Link>
            <Nav.Link as={Link} to="/register" active={location.pathname === "/register"}>Students Register</Nav.Link>
            <Nav.Link as={Link} to="/students" active={location.pathname === "/students"}>All Students</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
