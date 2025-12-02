import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Tallha Waheed</span> — an{" "}
            <strong>AI consultant & Machine Learning Engineer</strong> based in{" "}
            <span className="purple">Sterling, Virginia</span>.
            I help companies turn <span className="purple">LLMs, RAG, and AI agents</span>{" "}
            into production-grade products and internal tools. I lead a small
            team so we can cover architecture, POCs, and production deployments
            end-to-end.
          </p>

          <p style={{ textAlign: "justify" }}>
            <strong>What I can help with:</strong>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Design & implementation of LLM / RAG systems (retrieval pipelines, vector DBs, evaluation)
            </li>
            <li className="about-activity">
              <ImPointRight /> AI agents for workflow automation, tool-calling, and API integrations
            </li>
            <li className="about-activity">
              <ImPointRight /> Integrating OpenAI / other LLMs into apps, backends, CRMs, and support tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Architecture reviews, technical roadmaps, and AI strategy
            </li>
            <li className="about-activity">
              <ImPointRight /> Prototyping/MVPs for new AI features or internal copilots
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            <strong>How I work:</strong>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Project-based consulting & implementation
            </li>
            <li className="about-activity">
              <ImPointRight /> Ongoing technical advisory (a few hours per week)
            </li>
            <li className="about-activity">
              <ImPointRight /> Independent contractor / staff-augmentation for AI/LLM teams
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            <strong>Recent experience:</strong>
          </p>
          <ul>
            <li>
              <span className="purple">Self-employed</span> — Founder & Lead AI Consultant (Jan 2025 - Present)
            </li>
            <li>
              <span className="purple">Accenture</span> — Sr. Machine Learning Engineer (Jun 2022 - May 2025)
            </li>
            <li>
              <span className="purple">Dropbox</span> — Machine Learning Engineer (Mar 2019 - Jun 2022)
            </li>
            <li>
              <span className="purple">Incedo Inc.</span> — Data Scientist (May 2016 - Feb 2019)
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            <strong>Top skills:</strong> Data Structures · Big Data · Decision Sciences
            <br />
            If you’re exploring an AI project, email me at{" "}
            <a href="mailto:devtallhawaheed@gmail.com">devtallhawaheed@gmail.com</a>{" "}
            or connect on LinkedIn.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ship AI that is reliable, fast, and useful."
          </p>
            <footer className="blockquote-footer">Tallha Waheed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
