export const resumeData = {
    basics: {
      name: "Gurudatta Shanbhag",
      title: "Software Developer 3 – Backend",
      summary:
        "Backend Software Engineer with 7+ years of experience building scalable distributed systems, ML data pipelines, and backend platforms. Experienced in system design, workflow orchestration, RAG-based AI systems, and high-performance backend services.",
      location: "Bengaluru",
      email: "gurushan13@gmail.com",
      phone: "9743458616",
      linkedin: "https://www.linkedin.com/in/gurudatta-shanbhag/"
    },
  
    experience: [
      {
        company: "TELUS International CV",
        role: "Software Developer 3 – Backend",
        dates: "10/2022 – Present",
        location: "Bengaluru",
        bullets: [
          "Led backend development for Rater Assistant, a RAG-based training platform enabling crowd raters to query large training datasets using LLM-powered search.",
          "Designed backend APIs and async services using FastAPI, enabling document ingestion, embedding generation, and retrieval pipelines.",
          "Collaborated closely with ML engineers to integrate LLM retrieval pipelines and optimize data access patterns for large document collections.",
          "Contributed to backend systems powering ML data-collection pipelines used for training computer vision and language models.",
          "Designed and implemented backend services for annotation platforms supporting image, video, LiDAR, and audio datasets used in autonomous vehicle training.",
          "Built internal QC tooling for reviewer feedback and annotation accuracy measurement, improving overall data quality.",
          "Re-architected computer vision labeling workflows to support long image sequences and large dataset processing.",
          "Developed Python debugging and recovery scripts to detect corrupted pixel data and backfill missing annotation results.",
          "Improved backend performance through Redis caching, pre-aggregation strategies, and refactoring ~60% of legacy Go services.",
          "Participated in customer discussions to understand ML data requirements and delivered backend systems supporting scalable data ingestion.",
          "Mentored junior engineers and onboarded new team members by explaining backend architecture and engineering practices.",
          "Conducted 100+ technical interviews for backend engineering roles and collaborated with management on developer growth plans."
        ]
      },
  
      {
        company: "Digicollect",
        role: "Software Developer → Senior SDE → Lead",
        dates: "12/2018 – 10/2022",
        location: "Bengaluru",
        bullets: [
          "Led a team of 5 engineers responsible for backend development across multiple ERP modules.",
          "Designed and built an Order Management System for restaurants integrated with POS, SCM, and CRM modules.",
          "Developed backend services using Python and MongoDB supporting inventory, order management, and reporting workflows.",
          "Built centralized logging microservice used across ERP systems with searchable UI and log filtering.",
          "Developed Email, SMS, and notification microservices using RabbitMQ to decouple services and improve reliability.",
          "Automated end-of-day reporting pipelines using APScheduler and Pandas for business analytics.",
          "Managed production infrastructure including SSL configuration, DNS setup, and MongoDB Atlas migration.",
          "Built APIs for client-facing dashboards integrated with VueJS frontends.",
          "Developed tools for automated Excel-based inventory uploads and batch data processing."
        ]
      }
    ],
  
    achievements: [
      {
        title: "60% Legacy Backend Refactor",
        context:
          "Improved system performance by refactoring legacy services and introducing Redis caching."
      },
      {
        title: "Team Leadership",
        context:
          "Led and mentored a team of 5 engineers while delivering multiple backend systems."
      },
      {
        title: "100+ Backend Interviews",
        context:
          "Conducted technical interviews to strengthen hiring pipeline and maintain engineering quality."
      }
    ],
  
    architecture: [
      {
        title: "Workflow Orchestration Engine Architecture",
        description:
          "Designed architecture for a scalable workflow orchestration platform capable of executing long-running workflows with dynamic step execution.",
        highlights: [
          "Researched workflow orchestration platforms including Temporal, Workato, Trigger.dev, and n8n.",
          "Designed execution model for long-running workflows supporting retries, timers, signals, and event-driven execution.",
          "Defined workflow step abstractions including Service Tasks, User Tasks, Event Waiters, and Scheduled Tasks.",
          "Explored strategies for scaling to millions of concurrent workflows using durable workflow state storage.",
          "Designed event-driven architecture enabling workflows to pause and resume based on external triggers."
        ],
        technologies: [
          "Temporal",
          "Distributed Systems",
          "Workflow Engines",
          "Event Driven Architecture",
          "Golang"
        ]
      },
  
      {
        title: "Dynamic Workflow Runtime Research",
        description:
          "Explored architecture for building a visual workflow builder similar to n8n where workflows defined in a UI can dynamically execute on a scalable backend engine.",
        highlights: [
          "Designed concept of compiling visual workflow graphs into executable runtime workflows.",
          "Researched architecture where UI-defined workflows generate runtime workflow definitions executed by backend workers.",
          "Explored dependency resolution between workflow nodes and dynamic step scheduling.",
          "Designed event-driven execution supporting external signals, human approvals, and scheduled triggers.",
          "Investigated scalability considerations for executing large numbers of concurrent workflows."
        ],
        technologies: [
          "Temporal",
          "Workflow Engines",
          "System Design",
          "Distributed Systems"
        ]
      }
    ],
  
    skills: [
      {
        category: "Languages",
        items: ["Python", "Go", "Java"]
      },
      {
        category: "Databases & Messaging",
        items: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ"]
      },
      {
        category: "Backend & Infrastructure",
        items: ["FastAPI", "Docker", "AWS", "CircleCI", "Git"]
      },
      {
        category: "Architecture & Concepts",
        items: [
          "System Design",
          "Distributed Systems",
          "Microservices",
          "Workflow Orchestration",
          "Event Driven Architecture"
        ]
      },
      {
        category: "AI / ML Systems",
        items: [
          "RAG Systems",
          "LLM Integration",
          "Embedding Pipelines",
          "ML Data Collection Systems"
        ]
      }
    ],
  
    education: [
      {
        institution: "Atria Institute of Technology",
        location: "Bengaluru",
        degree: "B.E. in Computer Science",
        date: "08/2018"
      }
    ]
  };