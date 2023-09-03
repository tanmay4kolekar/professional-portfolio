import { Container, Nav, Navbar } from "react-bootstrap";

// Styles
import "./Header.scss";

export default function Header() {
  return (
    <Navbar expand="lg" className="navbarContainer">
      <Container>
        <Navbar.Brand>Tanmay S. Kolekar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
