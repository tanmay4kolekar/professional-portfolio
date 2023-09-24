import { Container, Form, Nav, Navbar } from "react-bootstrap";

// Styles
import "./Header.scss";
import { routes } from "../../../Constants/RoutingConstants";
import { THEME_TYPES } from "../../../Utility/Constants/AppConstants";
import { useDispatch } from "react-redux";
import { SET_THEME_TYPE } from "../../../Store/ActionTypes/ActionTypes";

export default function Header() {
  const dispatch = useDispatch();
  const handleOnChangeToggle = (e) => {
    dispatch({
      type: SET_THEME_TYPE,
      payload: {
        themeType: e.target.checked ? THEME_TYPES.light : THEME_TYPES.dark,
      },
    });
  };
  return (
    <Navbar expand="lg" className="navbarContainer">
      <Container>
        <Navbar.Brand>Tanmay S. Kolekar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {routes.map((route) => (
              <Nav.Link key={route.id} href={route.path}>
                {route.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Light"
          onChange={handleOnChangeToggle}
        />
      </Container>
    </Navbar>
  );
}
