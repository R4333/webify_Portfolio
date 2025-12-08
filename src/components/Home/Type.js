import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Sr. Machine Learning Engineer",
          "LangChain / LangGraph",
          "LLaMA Fine-Tuning (LoRA/PEFT)",
          "FastAPI Microservices",
          "Hybrid RAG & Evaluation",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
