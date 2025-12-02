import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiOutlineLink,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Tallha Waheed </strong>
              </h1>

              <p className="heading-description">
                AI consultant & Machine Learning Engineer helping companies
                turn LLMs, RAG, and AI agents into production-grade products
                and internal tools.
              </p>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="home-stats-container">
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
          <Col md={4} sm={12} className="about-stat-card">
            <div className="about-stat-number">25+</div>
            <div className="about-stat-label">LLM / RAG projects shipped</div>
          </Col>
          <Col md={4} sm={12} className="about-stat-card">
            <div className="about-stat-number">12+</div>
            <div className="about-stat-label">Production deployments</div>
          </Col>
          <Col md={4} sm={12} className="about-stat-card">
            <div className="about-stat-number">15+</div>
            <div className="about-stat-label">Voice & chat copilots tuned</div>
          </Col>
        </Row>
      </Container>

      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>for AI builds,
              advisory, or collaboration.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tallha-waheed-254257115/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://tallhawaheed.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineLink />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:devtallhawaheed@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
