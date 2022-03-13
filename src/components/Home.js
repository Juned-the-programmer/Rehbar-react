import React from "react";
import { Col, Container, Row } from "reactstrap";
import PIC from "../assets/pic.png";
import { useHistory } from "react-router-dom";

const Home = (props) => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="back_img"></div>
      <Container className="mt-3">
        <Row>
          <Col md="6" sm="6" xs="6">
            <img
              src={PIC}
              style={{ width: "inherit", height: "250px" }}
              onClick={(e) => {
                history.push("/pdf");
              }}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Home;
