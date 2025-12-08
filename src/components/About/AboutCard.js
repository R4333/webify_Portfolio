import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m <span className="purple">Talha Turab</span>, a{" "}
            <strong>Senior Machine Learning Engineer</strong> based in{" "}
            <span className="purple">Lahore, Pakistan</span> specializing in{" "}
            <span className="purple">Generative AI, NLP/NLU, LLMs, and data science</span>.
            I build production systems end-to-end—credit scoring, RAG and agentic workflows,
            content safety, and recommendation engines.
          </p>

          <div className="about-badges" style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "12px" }}>
            {["LangChain / LangGraph", "LLaMA fine-tuning (LoRA/PEFT)", "FastAPI", "Hybrid RAG"].map((label) => (
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
            <strong>Top skills</strong>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> LangChain/LangGraph orchestration, agentic workflows, and tool-calling
            </li>
            <li className="about-activity">
              <ImPointRight /> LLaMA/Mistral/DeepSeek tuning with LoRA, PEFT, adapters, and RAG grounding
            </li>
            <li className="about-activity">
              <ImPointRight /> FastAPI microservices, hybrid search (vector + rerank), and ML evaluation harnesses
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            <strong>Certifications</strong>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Graph Search, Shortest Paths, and Data Structures
            </li>
            <li className="about-activity">
              <ImPointRight /> React NanoDegree
            </li>
            <li className="about-activity">
              <ImPointRight /> Lumen Microservices
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            <strong>Experience</strong>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">NETSOL Technologies</span> — Lead ML Engineer (Sep 2023–Present):
              fine-tuned DeepSeek/Mistral/LLaMA with LoRA/PEFT, built RAG + Neo4j graph workflows,
              voice agents with Twilio, and AWS/Azure ML pipelines; improved GPT-3 responses 23% vs GPT-4.
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">WALEE</span> — Sr. Data Scientist (Aug 2020–Sep 2023):
              credit scoring for banking (95% accuracy), hybrid search + Docling/LlamaParser pipelines,
              RLHF time-series underwriting, and content moderation + video recommenders.
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">OnRegle / Heuristiks</span> — ML Engineer (Nov 2018–Aug 2020):
              OCR for PDFs, ETL pipelines, and data gathering via network calls and web scraping.
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">British Airways</span> — Data Scientist:
              web-scraped reviews, built TF-IDF insights, and a 97% precision ticket-purchase classifier.
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">KPMG</span> — Audit Associate:
              financial reporting, audit oversight, and cost optimization.
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            <strong>Education</strong>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> BS Computer Science — Thomas Edison State University (2015–2019)
            </li>
            <li className="about-activity">
              <ImPointRight /> MS Artificial Intelligence — Lahore University of Management Sciences (2023–2026)
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Scientist in Python (Dataquest.io), Data Scientist With Python (DataCamp), Data Analyst (Udacity)
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            <strong>Contact:</strong>{" "}
            <a href="https://www.linkedin.com/in/talha-turab/" target="_blank" rel="noreferrer">
              linkedin.com/in/talha-turab
            </a>
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ship AI that is reliable, fast, and useful."
          </p>
          <footer className="blockquote-footer">Talha Turab</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
