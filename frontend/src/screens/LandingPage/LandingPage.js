import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./LandingPage.css";

const LandingPage = () => {
  //   useEffect(() => {
  //     const userInfo = localStorage.getItem("userInfo");

  //     if (userInfo) {
  //       history.push("/mynotes");
  //     }
  //   }, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-title">
            <h1>Hush Notes</h1>
            <p className="tagline">
              Keep your notes
              <span className="tagline-highlight">HUSH</span>
              ed
            </p>
            <div className="button-container">
              <a href="/login">
                <Button className="main-button" variant="outline-primary">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button className="main-button" variant="outline-primary">
                  Sign Up
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
