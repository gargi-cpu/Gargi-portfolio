export const projects = [
  {
    title: "StockPulse",
    subtitle: "Live market data backend for stock dashboards",
    tech: ["Java", "Spring Boot", "REST APIs", "Cloud-native architecture"],
    problem:
      "Stock dashboards often rely on dummy data, which hides real API latency, failures, and rate limits.",
    solution:
      "Implemented a real-time backend that pulls live public market APIs and exposes clean, stable endpoints.",
    architecture: [
      "Controller",
      "Service",
      "Client",
      "External Market API",
    ],
    highlights: [
      "Clean layered architecture with strict separation of concerns.",
      "Actuator monitoring, CORS control, and config management built in.",
      "Built for real data handling and reliable uptime.",
    ],
    skills: ["Backend design", "API scalability", "Real data handling"],
    github: "https://github.com/gargi-cpu/stockpulse",
  },
  {
    title: "Async Task Processing System",
    subtitle: "Async pipelines with streaming responses",
    tech: ["Python", "FastAPI", "Async/Await", "Streaming APIs"],
    problem:
      "Synchronous task pipelines stall under load and block client feedback.",
    solution:
      "Built async workers with streaming responses to keep clients informed while workloads run.",
    architecture: ["API Layer", "Async Queue", "Worker Pool", "Streaming Output"],
    highlights: [
      "Async-first design to improve throughput under traffic.",
      "Background workers with controlled concurrency.",
      "Measured ~25% performance improvement in response handling.",
    ],
    skills: ["Modern backend systems", "Async execution", "Streaming UX"],
    github: "",
  },
  {
    title: "Trading Portfolio Microservice",
    subtitle: "Reliable service boundaries for portfolio data",
    tech: ["Java", "Spring Boot", "SQL"],
    problem:
      "Portfolio services need consistent data models and safe concurrent access.",
    solution:
      "Implemented a microservice with MVC and multithreaded processing for portfolio operations.",
    architecture: ["Controller", "Service", "Repository", "SQL Store"],
    highlights: [
      "Microservice design with clear ownership.",
      "Multithreading with guarded error handling.",
      "Source code private due to internship confidentiality.",
    ],
    skills: ["Microservices", "Concurrency", "Error handling"],
    github: "",
  },
  {
    title: "AI Speech Synthesis System",
    subtitle: "Low-latency speech generation pipeline",
    tech: ["Python", "FastAPI", "Streaming", "SQL"],
    problem:
      "Speech generation workflows are heavy and can block real-time use cases.",
    solution:
      "Designed a streaming pipeline to deliver partial audio outputs with minimal delay.",
    architecture: ["API Gateway", "Async Pipeline", "Audio Streamer", "SQL Store"],
    highlights: [
      "Streaming audio for low-latency playback.",
      "Async pipeline design with resilient handoff.",
      "Built for consistent output under variable load.",
    ],
    skills: ["Low latency", "Streaming audio", "Async pipelines"],
    github: "",
  },
];
