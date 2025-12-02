import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "420px",
                  margin: "0 auto",
                }}
              >
                <svg
                  viewBox="0 0 300 300"
                  style={{
                    position: "absolute",
                    top: "-60px",
                    left: "-40px",
                    width: "120%",
                    height: "120%",
                    zIndex: 0,
                  }}
                >
                  <defs>
                    <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8e2de2" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#4a00e0" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <circle cx="120" cy="140" r="90" fill="url(#aboutGradient)">
                    <animate attributeName="r" from="80" to="110" dur="6s" repeatCount="indefinite" direction="alternate" />
                  </circle>
                  <circle cx="210" cy="110" r="60" fill="#9b5de5" opacity="0.25">
                    <animate attributeName="cx" values="200;220;200" dur="5s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="100;120;100" dur="5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="170" cy="210" r="40" fill="#f15bb5" opacity="0.18">
                    <animate attributeName="r" values="35;55;35" dur="7s" repeatCount="indefinite" />
                  </circle>
                </svg>
                <img
                  src={laptopImg}
                  alt="about"
                  className="img-fluid"
                  style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.25))" }}
                />
              </div>
            </Col>
          </Row>

          <Row className="about-story-row">
            <Col md={12}>
              <div className="about-story-card">
                <h2>Trusted AI partner for production builds</h2>
                <p>
                  I help teams design, build, and scale LLM products that stay reliable
                  after launch—covering retrieval, agentic flows, voice, and safety.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="about-stats-row">
            <Col md={4} className="about-stat-card">
              <div className="about-stat-number">25+</div>
              <div className="about-stat-label">LLM / RAG projects shipped</div>
            </Col>
            <Col md={4} className="about-stat-card">
              <div className="about-stat-number">12+</div>
              <div className="about-stat-label">Production deployments</div>
            </Col>
            <Col md={4} className="about-stat-card">
              <div className="about-stat-number">15+</div>
              <div className="about-stat-label">Voice & chat copilots tuned</div>
            </Col>
          </Row>

          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
