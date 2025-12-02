import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Consultant & ML Engineer",
          "RAG & AI Agents",
          "Generative AI Systems",
          "Prompt Engineering",
          "Production-Grade GenAI",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
