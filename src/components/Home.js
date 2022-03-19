import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useHistory } from "react-router-dom";
import ADLOGO from "../assets/ad logo.png";
import VOL1 from "../assets/vol-1/Vol-1 feb 2022.pdf"
import VOL1IMG from "../assets/vol-1/Vol-1.jpg"
import VOL2 from "../assets/Vol-2/1.pdf"
import VOL2IMG from "../assets/Vol-2/Deep_Learning.png"

const Home = ({ setPdf, setBackIcon, AD, setAD }) => {
  const history = useHistory();

  useEffect(() => {
    setBackIcon(false);
    if (AD === true) {
      setTimeout(() => {
        setAD(false);
      }, 2000);
    }
  });

  return (
    <React.Fragment>
      {AD === false ? (
        <React.Fragment>
          <div className="back_img"></div>
          <Container className="mt-2">
            <Row>
              <Col md="3" sm="6" xs="6" className="mt-3">
                <img
                  src={VOL1IMG}
                  name="PIC_1"
                  style={{ width: "inherit", height: "250px" }}
                  onClick={(e) => {
                    setPdf(VOL1);
                    history.push("/pdf");
                  }}
                />
              </Col>
              <Col md="3" sm="6" xs="6" className="mt-3">
                <img
                  src={VOL2IMG}
                  name="PIC_1"
                  style={{ width: "inherit", height: "250px" }}
                  onClick={(e) => {
                    setPdf(VOL2);
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
            <img src={ADLOGO} style={{ width: "150px", height: "150px" }} />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Home;
