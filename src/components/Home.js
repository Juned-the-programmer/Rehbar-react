import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import PIC from "../assets/pic.png";
import { useHistory } from "react-router-dom";
import AD from "../assets/ad logo.png";

const Home = (props) => {
  const [load, setLoad] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (load === true) {
      setTimeout(() => {
        setLoad(false);
      }, 2000);
    }
  });

  return (
    <React.Fragment>
      {load === false ? (
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
      ) : (
        <React.Fragment>
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={AD} style={{ width: "150px", height: "150px" }} />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
