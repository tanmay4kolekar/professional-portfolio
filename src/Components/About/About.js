import { Col, Container, Row } from "react-bootstrap";
import logo from "../../logo.svg";

export default function About() {
  return (
    <div className="about-container">
      <div className="header">About</div>
      <Container>
        <Row>
          <Col sm={12} md={6} className="description">
            This is where you can describe about yourself. The more you describe
            about yourself, the better it is
          </Col>
          <Col sm={12} md={6} className="profile-image">
            <img src={logo} alt="logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
