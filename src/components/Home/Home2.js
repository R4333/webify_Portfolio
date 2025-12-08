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
              I’m a Senior Machine Learning Engineer who designs and ships
              production-grade Generative AI, NLP/NLU, and data science systems.
              I partner with business, product, and engineering teams to turn AI
              concepts into reliable features and platforms.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, LangChain/LangGraph, FastAPI, and LLaMA-based stacks{" "}
                </b>
              </i>
              — with a focus on RAG pipelines, agentic workflows, hybrid search,
              and model tuning that keep AI systems fast and dependable.
              <br />
              <br />
              Recent work includes fine-tuning open-source models with LoRA/PEFT,
              building LLM evaluation harnesses, integrating voice agents, and
              optimizing cloud deployments across AWS and Azure.
              <br />
              <br />
              If you’re exploring credit scoring, content safety, recommender
              systems, or agentic copilots, let’s build them together.
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
