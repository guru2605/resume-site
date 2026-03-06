export const resumeData = {
    basics: {
      name: "Gurudatta Shanbhag",
      title: "Software Developer 3 – Backend",
      summary: "Backend Software Developer with 7+ years of experience leading backend architecture, system design, and ML data pipelines.",
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
          "Led backend development single-handedly for the Rater Assistant, a RAG-based training application enabling raters to ask questions and learn from large uploaded training documents.",
          "Defined API contracts, implemented async services with FastAPI, and collaborated closely with the ML team to integrate data retrieval for LLM-driven features.",
          "Mentored and onboarded new team members, helping them understand backend architecture and best practices; facilitated knowledge-sharing sessions.",
          "Conducted 100+ interviews for backend engineering roles, strengthening the hiring pipeline with a focus on technical quality and team fit.",
          "Partnered with the manager to create and track quarterly developer growth plans.",
          "Contributed to data collection applications for ML model training, ensuring seamless data ingestion and reliability for customer projects.",
          "Built sourcing projects to recruit and manage crowd workers for specialized ML data-collection tasks.",
          "Designed and built features for Audio Annotation System & Computer Vision products, enabling annotation on audio/LiDAR/Image/Video datasets for self-driving car projects.",
          "Developed a QC tool for reviewer feedback & accuracy measurement, improving annotation quality.",
          "Re-architected CV labeling to support long image sequences; wrote Python scripts to debug pixel corruption and backfill data.",
          "Optimized backend performance by caching (Redis), pre-aggregations, and refactoring 60% of legacy Go code.",
          "Delivered backend migrations for data-collection apps and worked on prompt engineering for annotation flows."
        ]
      },
      {
        company: "Digicollect",
        role: "Software Developer → Senior SDE → Lead",
        dates: "12/2018 – 10/2022",
        location: "Bengaluru",
        bullets:[
          "Led a team of 5 engineers, mentoring juniors, conducting daily stand-ups, and distributing tasks effectively.",
          "Built an Order Management System for restaurants and ERP modules (SCM, POS, CRM) using Python + MongoDB stack.",
          "Implemented centralized Logging Microservice for all ERP services with searchable UI and filters.",
          "Delivered Email, SMS & Notification Microservice using RabbitMQ, reducing delivery latency and improving monitoring of notifications.",
          "Managed SSL/DNS setups, migrated MongoDB to Atlas, and automated EOD reporting using APScheduler & Pandas.",
          "Worked on API integration with VueJS for client-facing dashboards and automated inventory uploads from Excel."
        ]
      }
    ],
    achievements:[
      { title: "100+ Interviews", context: "Conducted to strengthen the hiring pipeline." },
      { title: "60% Legacy Code Refactored", context: "Optimized backend performance using Redis." },
      { title: "Led Team of 5", context: "Managed and mentored engineers at Digicollect." }
    ],
    skills:[
      { category: "Languages", items: ["Python", "Go", "Java"] },
      { category: "Databases & Brokers", items: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ"] },
      { category: "Infrastructure", items: ["FastAPI", "AWS", "Docker", "Circle CI", "Git"] },
      { category: "Concepts", items: ["System Design", "Microservices", "LLM Integration"] }
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