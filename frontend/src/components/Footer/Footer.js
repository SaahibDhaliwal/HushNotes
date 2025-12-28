import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        padding: "1.5rem 0",
        textAlign: "center",
        color: "rgba(255, 255, 255, 0.4)",
        fontSize: "0.875rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container>
        <Row>
          <Col>Copyright &copy; {new Date().getFullYear()} Hush Notes</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
