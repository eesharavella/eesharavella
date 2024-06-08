import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col size={12} sm={12} className="text-center d-flex flex-column align-items-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/eesha-ravella/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/eesharavella"><img src={navIcon2} alt="GitHub" /></a>
              <a href="https://www.instagram.com/eesharavella/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>© 2024 Eesha Ravella.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
