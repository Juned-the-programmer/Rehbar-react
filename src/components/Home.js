import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import PIC from "../assets/Vol-1.jpg";
import DEEP from "../assets/Deep_Learning.png";
import { useHistory } from "react-router-dom";
import ADLOGO from "../assets/ad logo.png";
import PDF from "../assets/Vol-1 feb 2022.pdf";
import PDF1 from "../assets/1.pdf";
import PDF2 from "../assets/2.pdf";
import PDF3 from "../assets/3.pdf";
import PDF4 from "../assets/4.pdf";
import PDF5 from "../assets/5.pdf";
import PDF6 from "../assets/6.pdf";
import PDF7 from "../assets/7.pdf";
import PDF8 from "../assets/8.pdf";
import PDF9 from "../assets/9.pdf";

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
                  src={PIC}
                  name="PIC_1"
                  style={{ width: "inherit", height: "250px" }}
                  onClick={(e) => {
                    setPdf(PDF);
                    history.push("/pdf");
                  }}
                />
              </Col>
              <Col md="3" sm="6" xs="6" className="mt-3">
                <img
                  src={DEEP}
                  name="Deep_Learning_1"
                  style={{ width: "inherit", height: "250px" }}
                  onClick={(e) => {
                    setPdf(PDF1);
                    history.push("/pdf");
                  }}
                />
              </Col>
              <Col md="3" sm="6" xs="6" className="mt-3">
                <img
                  src={DEEP}
                  name="Deep_Learning_1"
                  style={{ width: "inherit", height: "250px" }}
                  onClick={(e) => {
                    setPdf(PDF2);
                    history.push("/pdf");
                  }}
                />
              </Col>
              <Col md="3" sm="6" xs="6" className="mt-3">
                <img
                  src={DEEP}
                  name="Deep_Learning_1"
                  style={{ width: "inherit", height: "250px" }}
                  onClick={(e) => {
                    setPdf(PDF3);
                    history.push("/pdf");
                  }}
                />
              </Col>
              <Col md="3" sm="6" xs="6" className="mt-3">
                <img
                  src={DEEP}
                  name="Deep_Learning_1"
                  style={{ width: "inherit", height: "250px" }}
                  onClick={(e) => {
                    setPdf(PDF4);
                    history.push("/pdf");
                  }}
                />
              </Col>
              <Col md="3" sm="6" xs="6" className="mt-3">
                <img
                  src={DEEP}
                  name="Deep_Learning_1"
                  style={{ width: "inherit", height: "250px" }}
                  onClick={(e) => {
                    setPdf(PDF5);
                    history.push("/pdf");
                  }}
                />
              </Col>
              <Col md="3" sm="6" xs="6" className="mt-3">
                <img
                  src={DEEP}
                  name="Deep_Learning_1"
                  style={{ width: "inherit", height: "250px" }}
                  onClick={(e) => {
                    setPdf(PDF6);
                    history.push("/pdf");
                  }}
                />
              </Col>
              <Col md="3" sm="6" xs="6" className="mt-3">
                <img
                  src={DEEP}
                  name="Deep_Learning_1"
                  style={{ width: "inherit", height: "250px" }}
                  onClick={(e) => {
                    setPdf(PDF7);
                    history.push("/pdf");
                  }}
                />
              </Col>
              <Col md="3" sm="6" xs="6" className="mt-3 mb-5">
                <img
                  src={DEEP}
                  name="Deep_Learning_1"
                  style={{ width: "inherit", height: "250px" }}
                  onClick={(e) => {
                    setPdf(PDF8);
                    history.push("/pdf");
                  }}
                />
              </Col>
              <Col md="3" sm="6" xs="6" className="mt-3 mb-5">
                <img
                  src={DEEP}
                  name="Deep_Learning_1"
                  style={{ width: "inherit", height: "250px" }}
                  onClick={(e) => {
                    setPdf(PDF9);
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
