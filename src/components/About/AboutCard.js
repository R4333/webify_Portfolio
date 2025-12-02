import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m <span className="purple">Tallha Waheed</span>, an{" "}
            <strong>AI consultant & ML Engineer</strong> in{" "}
            <span className="purple">Sterling, Virginia</span> building{" "}
            <span className="purple">LLMs, RAG, and agentic workflows</span> that
            stay reliable in production.
          </p>

          <div className="about-badges" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "12px" }}>
            {["LLM Systems", "RAG", "Agents", "Voice AI"].map((label) => (
              <span
                key={label}
                style={{
                  background: "rgba(155, 126, 172, 0.15)",
                  border: "1px solid rgba(155, 126, 172, 0.35)",
                  color: "#fff",
                  padding: "6px 10px",
                  borderRadius: "12px",
                  fontSize: "0.85rem",
                }}
              >
                {label}
              </span>
            ))}
          </div>

          <p style={{ textAlign: "justify" }}>
            <strong>What I do</strong>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> RAG pipelines with vector search + rerankers
            </li>
            <li className="about-activity">
              <ImPointRight /> Agentic workflows with tool-calling + APIs
            </li>
            <li className="about-activity">
              <ImPointRight /> Voice/chat copilots mixing OpenAI, Gemini, Deepgram
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            <strong>How I work</strong>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> End-to-end builds (architecture → POC → launch)
            </li>
            <li className="about-activity">
              <ImPointRight /> Advisory blocks for AI strategy and roadmaps
            </li>
            <li className="about-activity">
              <ImPointRight /> Staff-aug ML engineer for AI/LLM teams
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            <strong>Experience</strong>
          </p>
          <ul>
            <li>
              <span className="purple">Self-employed</span> — Lead AI Consultant (2025–Now)
            </li>
            <li>
              <span className="purple">Accenture</span> — Sr. ML Engineer (2022–2025)
            </li>
            <li>
              <span className="purple">Dropbox</span> — ML Engineer (2019–2022)
            </li>
            <li>
              <span className="purple">Incedo</span> — Data Scientist (2016–2019)
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            <strong>Top skills:</strong> Data Structures · Big Data · Decision Sciences
            <br />
            <strong>Contact:</strong>{" "}
            <a href="mailto:devtallhawaheed@gmail.com">devtallhawaheed@gmail.com</a>
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
