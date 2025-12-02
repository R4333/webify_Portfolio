import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an AI consultant and Machine Learning Engineer (ex-Accenture)
              who helps product teams ship LLM, RAG, and AI agent solutions.
              I partner with founders, product leads, and engineering managers
              to turn AI ideas into reliable features and internal tools.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, JavaScript/TypeScript, and Node.js{" "}
                </b>
              </i>
              — with a focus on data engineering, backend services, and cloud
              deployments that keep AI systems fast and dependable.
              <br />
              <br />
              My key areas of interest include designing
              <b className="purple"> retrieval pipelines, vector search,</b>{" "}
              and <b className="purple">agentic workflows</b> that automate
              complex processes.
              <br />
              <br />
              I lead a small team so we can cover end-to-end delivery—from
              architecture and POCs to production-grade deployments. If you’re
              exploring an AI project, let’s build it.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
