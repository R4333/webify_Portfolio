import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import blog from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";
import coversa from "../../Assets/Projects/conversaiq.png";
import thalamus from "../../Assets/Projects/thalamusai.png";
import contractReview from "../../Assets/Projects/frcm.png";
import emotion from "../../Assets/Projects/emotion.png";

const creditScoringImg =
  "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1200&q=80";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={12} style={{ marginBottom: "20px" }}>
            <h3 className="purple" style={{ marginBottom: "8px" }}>
              AI Platforms & Pipelines
            </h3>
            <p style={{ color: "white", marginBottom: 0 }}>
              End-to-end systems for LLM apps, RAG, and industry-tuned workflows.
            </p>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coversa}
              isBlog={false}
              title="CoversaIQ"
              description={
                "CoversaIQ is a platform that leverages LLMs and automated transcription to help call center and sales agents improve performance. It offers intelligent summarization, agent assist, and SLA tracking to increase conversion and shorten call handling time."
              }
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thalamus}
              isBlog={false}
              title="Thalamus"
              description={
                "Thalamus is a Retrieval-Augmented Generation (RAG) pipeline platform that integrates vector search, knowledge indexing, and LLM orchestration for fast, context-aware AI applications."
              }
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contractReview}
              isBlog={false}
              title="First Rule — Contract Manager"
              description={
                "AI-Powered Contract Review for Construction: Save time, protect margins, and reduce risk with industry-trained, AI-powered contract review, management and built-in training — designed specifically for the way construction teams work."
              }
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={12} style={{ margin: "30px 0 20px" }}>
            <h3 className="purple" style={{ marginBottom: "8px" }}>
              Automation, Intelligence & Risk
            </h3>
            <p style={{ color: "white", marginBottom: 0 }}>
              Agentic workflows, voice AI, OCR, and predictive modeling that ship to production.
            </p>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AI Voice System"
              description={
                <>
                  <strong>
                    Live test line:{" "}
                    <a href="tel:+19729450560">+1 972-945-0560</a>
                  </strong>
                  . Architected an AI voice system with Twilio WebSockets,
                  custom VAD, and NER models to drop conversational latency from
                  7s to under 2s while cutting costs by 95%. Leverages OpenAI’s
                  GPT-Realtime with pluggable support for Gemini, OpenAI, and
                  Deepgram models to mix ASR, reasoning, and synthesis pipelines.
                </>
              }
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Agentic Resume Screener"
              description="Built a LangChain/LangGraph workflow with OCR ingestion to automate resume analysis, scoring, and recommendations for recruiting teams."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Document Retrieval & OCR Automation"
              description="Developed hybrid search with Docling, LlamaParser, and Mistral OCR to accelerate document indexing, extraction, and grounded responses for operations teams."
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={creditScoringImg}
              isBlog={false}
              title="Credit Scoring Model"
              description="Built a production-grade credit scoring model using XGBoost/CatBoost with explainability reporting, reaching 95% accuracy on delinquency prediction."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Content Safety & Recommendations"
              description="Engineered transformer vision + YOLO workflows for short-form video moderation (85% reduction in harmful content) and a recommendation engine that boosted engagement by 50%."
              ghLink=""
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
