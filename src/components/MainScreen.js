import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./MainScreen.css";

const MainScreen = (props) => {
  return (
    <div className="main-bg">
      <Container>
        <Row>
          <div className="page">
            <h1 className="header"> {props.title}</h1>
            <hr />

            {props.children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
