export const resumeData = {
    basics: {
      name: "Gurudatta Shanbhag",
      title: "Software Developer 3 – Backend",
      summary: "Senior Backend Engineer with 7+ years of experience designing scalable distributed systems, ML data pipelines, and workflow-driven platforms. Experienced in building high-performance APIs, data collection systems for machine learning, and LLM-powered applications. Strong focus on system design, backend architecture, and reliability while mentoring engineers and driving technical decision-making.",
      location: "Bengaluru",
      email: "gurushan13@gmail.com",
      phone: "9743458616"
    },
    experience:[
      {
        company: "TELUS International CV",
        role: "Software Developer 3 – Backend",
        dates: "10/2022 – Present",
        location: "Bengaluru",
        bullets:[
          "Led backend architecture and development for Rater Assistant, a Retrieval-Augmented Generation (RAG) based training platform enabling raters to query large training datasets and documentation using LLM-powered question answering.",
          "Designed scalable REST APIs and asynchronous backend services using FastAPI for document ingestion, metadata processing, and retrieval pipelines.",
          "Collaborated with ML engineers to integrate embedding generation, vector search, and retrieval pipelines enabling LLM-driven workflows for large document collections.",
          "Designed and implemented backend systems supporting large-scale ML data collection workflows used to train Computer Vision and Audio models.",
          "Built and maintained annotation platforms supporting Image, Video, Audio, and LiDAR datasets used for autonomous driving and AI training projects.",
          "Developed quality control tools to measure rater accuracy, capture reviewer feedback, and improve dataset quality across annotation workflows.",
          "Re-architected computer vision labeling pipelines to support long sequential image datasets, improving annotation efficiency and processing performance.",
          "Developed internal tooling and Python scripts to identify and repair corrupted pixel data in large image datasets and backfill millions of affected records.",
          "Optimized backend performance by introducing Redis caching, query optimization, and pre-aggregation strategies, significantly reducing API latency for large dataset queries.",
          "Refactored and modernized ~60% of legacy Go backend services, improving maintainability, modularity, and observability.",
          "Built scalable ingestion pipelines to process large training datasets uploaded by customers, supporting preprocessing and metadata indexing.",
          "Worked on vector search and retrieval approaches for document search systems using modern embedding-based techniques.",
          "Participated in architectural exploration of workflow orchestration systems and long-running workflow engines for complex data processing pipelines.",
          "Mentored junior engineers and onboarded new team members by explaining backend architecture, codebase structure, and development practices.",
          "Conducted 100+ backend engineering interviews, strengthening the hiring pipeline with strong technical evaluation standards.",
          "Collaborated with engineering leadership to create developer growth plans and guide engineers toward stronger backend engineering practices.",
          "Worked directly with customers and internal stakeholders to understand ML data collection requirements and translate them into scalable backend systems."
        ]
      },
      {
        company: "Digicollect",
        role: "Software Developer → Senior SDE → Lead",
        dates: "12/2018 – 10/2022",
        location: "Bengaluru",
        bullets:[
          "Led a team of 5 engineers responsible for backend platform development, mentoring junior developers and coordinating engineering delivery.",
          "Designed and implemented a scalable Order Management System for restaurants along with ERP modules including Supply Chain Management (SCM), Point of Sale (POS), and CRM.",
          "Built backend microservices using Python and MongoDB supporting order processing, inventory management, and customer operations.",
          "Developed a centralized Logging Microservice aggregating logs across ERP services with a searchable UI and filtering capabilities for easier debugging and monitoring.",
          "Designed event-driven notification systems using RabbitMQ to deliver Email, SMS, and in-app notifications across multiple services.",
          "Reduced latency and improved reliability of notifications by introducing asynchronous message queues and background workers.",
          "Managed infrastructure operations including SSL certificate setup, DNS configuration, and service deployments.",
          "Migrated MongoDB infrastructure to MongoDB Atlas to improve scalability, backup reliability, and operational stability.",
          "Developed automated reporting pipelines using APScheduler and Pandas to generate End-of-Day business reports for restaurants.",
          "Built backend ingestion tools to process bulk inventory uploads from Excel sheets and automate data processing.",
          "Collaborated with frontend teams integrating APIs with VueJS dashboards used by restaurant operators."
        ]
      }
    ],
    achievements:[
      { title: "100+ Engineering Interviews Conducted", context: "Strengthened backend hiring pipeline and improved engineering quality through structured technical evaluation." },
      { title: "60% Legacy Backend Refactored", context: "Improved system performance, reliability, and maintainability through refactoring and Redis caching strategies." },
      { title: "Led Engineering Team of 5", context: "Mentored engineers, coordinated development processes, and improved engineering practices at Digicollect." }
    ],
    skills:[
      { category: "Languages", items: ["Python", "Go", "Java"] },
      { category: "Backend Frameworks", items: ["FastAPI", "REST APIs", "Async Services"] },
      { category: "Databases & Messaging", items: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ"] },
      { category: "Infrastructure & DevOps", items: ["AWS", "Docker", "CI/CD (CircleCI)", "Git"] },
      { category: "Concepts", items: ["System Design", "Microservices Architecture", "Distributed Systems", "LLM Integration", "RAG Systems", "Vector Search", "ML Data Pipelines", "Workflow Orchestration"] }
    ],
    education:[
      {
        institution: "Atria Institute of Technology",
        location: "Bengaluru",
        degree: "B.E. in Computer Science",
        date: "08/2018"
      }
    ]
  };