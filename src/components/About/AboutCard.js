import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Tallha Waheed</span> —
            <span style={{ display: "block" }}>
              <strong>
                Sr. Machine Learning Engineer




                
              </strong>
            </span>
            <br />
            from <span className="purple">Sterling, Virginia, United States</span>.
            <br />
            I’m currently working as a <span className="purple">Sr. Machine Learning Engineer</span> at <span className="purple">Accenture</span>.
            <br />
            Areas of focus: <span className="purple">LLMs</span>, <span className="purple">Agentic AI</span>, and
            applied <span className="purple">Generative AI</span>.
            <br />
            <br />
            
            <br />
            <br />
            <strong>Experience:</strong>
            <ul>
              <li>
                <span className="purple">Accenture</span> — Sr. Machine Learning Engineer
                (June 2018 - Present)
              </li>
            </ul>
            <strong>Education:</strong>
            <ul>
              <li>
                <span className="purple">Becker College</span> — B.S. Computer Science
                (June 2013 - July 2017)
              </li>
            </ul>
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

            <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
            <footer className="blockquote-footer">Tallha Waheed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
