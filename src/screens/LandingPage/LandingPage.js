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
            <div>
              <h1> Welcome to Hush Notes</h1>
              <p className="intro-body"> Keep your notes </p>
              <p className="intro-body-special">HUSH</p>
              <p className="intro-body">ed</p>
            </div>
            <div className="button-container">
              <a href="/login">
                <Button
                  size="lg"
                  className="main-button"
                  variant="outline-primary"
                >
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="main-button"
                  variant="outline-primary"
                >
                  Signup
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
