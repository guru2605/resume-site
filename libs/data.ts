export const resumeData ={
  "basics": {
    "name": "Gurudatta Shanbhag",
    "title": "Senior Backend Engineer",
    "summary": "Backend Software Engineer with 7+ years of experience building scalable distributed systems, event-driven microservices, and ML/AI infrastructure. Proficient in Python, Go, and Java with deep expertise in multi-database architectures, async services, and platform engineering across systems serving thousands of users.",
    "location": "Bengaluru",
    "email": "gurushan13@gmail.com",
    "phone": "9743458616",
    "linkedin": "https://www.linkedin.com/in/gurudatta-shanbhag/"
  },
  "experience": [
    {
      "company": "TELUS International CV (formerly Playment / Lionbridge AI)",
      "role": "Software Developer 2 → Software Developer 3 – Backend",
      "dates": "01/2021 – Present",
      "location": "Bengaluru",
      "bullets": [
        "Optimized MongoDB aggregation pipelines by eliminating correlated subqueries and COLLSCAN, reducing API latency from 14s to 44ms (99.7% improvement) on contributor roster endpoints serving 10K+ users.",
        "Architected a partition-based BigQuery-to-PostgreSQL incremental sync engine handling 500K+ rows with staging tables, per-partition resume, deduplication, and exclusive DB locks — enabling zero-downtime data migration across 8+ tables.",
        "Built a feature-flag-driven DAO routing layer using Split.io to enable user-level gradual rollout between 2 data sources (PostgreSQL and BigQuery) with instant rollback and zero redeployment.",
        "Designed and implemented a RAG-based assistant platform end-to-end across 3 Python microservices — async prompt query with RabbitMQ polling, LLM-powered retrieval, file ingestion, and conversation history management.",
        "Developed 10+ Go microservices in a monorepo with PostgreSQL, RabbitMQ, and S3 — including concurrent job assignment with optimistic locking, CSV batch ingestion with progress tracking, and QC sample stats pipeline.",
        "Built 6+ backend features in a Java/Dropwizard service using jOOQ and Knex migrations — interpolation/extrapolation engines for video sequences, editor preset APIs, and cache eviction strategies.",
        "Implemented Valkey (Redis-compatible) caching with TTL-based key strategy and feature-flag-gated initialization, reducing upstream HTTP calls by ~40% for contributor assignment lookups.",
        "Resolved SQLAlchemy connection pool exhaustion under BigQuery load by implementing NullPool strategy; fixed async event loop deadlocks by refactoring AMQP consumer threading model.",
        "Built Signed Cookies API and secure upload-url endpoints in a Java media storage service, enabling S3 presigned access for 3 client platforms (web, Android, iOS).",
        "Managed Helm charts for 55+ microservices across 4 environments (staging, prelive, playdock, live) with shared library chart, OIDC-based GCP auth, and Artifact Registry publishing.",
        "Configured Auth0 OIDC integration in a Java/Dropwizard auth gateway — multi-client OAuth configuration, signup flow controls, and token validation null-safety fix eliminating a production NullPointerException.",
        "Conducted 100+ technical interviews for backend engineering roles and mentored 3+ junior engineers on system design and async Python patterns."
      ]
    },
    {
      "company": "Digicollect",
      "role": "Software Developer → Senior SDE → Lead",
      "dates": "12/2018 – 12/2020",
      "location": "Bengaluru",
      "bullets": [
        "Led a team of 5 engineers delivering backend systems across 6 ERP modules (Order Management, Inventory, SCM, POS, CRM, Reporting) using Python and MongoDB.",
        "Designed and built a restaurant Order Management System processing 1000+ daily orders, integrated with POS, supply chain, and CRM modules.",
        "Developed 3 notification microservices (Email, SMS, Push) using RabbitMQ for async decoupling, reducing API response times by ~30%.",
        "Built a centralized logging microservice with searchable UI and filtering, adopted across 6+ ERP services for unified observability.",
        "Automated end-of-day reporting pipelines using APScheduler and Pandas, generating 10+ daily business analytics reports.",
        "Managed production infrastructure including SSL, DNS, and migrated 4 MongoDB databases to Atlas with zero downtime.",
        "Built REST APIs for client dashboards and developed batch data processing tools handling 5000+ row Excel uploads."
      ]
    }
  ],
  "achievements": [
    {
      "title": "99.7% Query Optimization (14s → 44ms)",
      "context": "Eliminated correlated subqueries and COLLSCAN in MongoDB aggregation pipelines on contributor roster APIs serving 10K+ users."
    },
    {
      "title": "BigQuery-to-PostgreSQL Migration Engine",
      "context": "Designed partition-based incremental sync handling 500K+ rows across 8+ tables with zero-downtime rollback via feature flags."
    },
    {
      "title": "RAG Assistant Platform (3 Services)",
      "context": "Architected end-to-end across 3 microservices — async RabbitMQ polling, LLM retrieval, file ingestion — from API gateway to ML backend."
    },
    {
      "title": "10+ Go Microservices in Annotation Platform",
      "context": "Built concurrent job assignment, CSV batch processing, QC pipelines, and S3 media APIs in a Go monorepo with PostgreSQL and RabbitMQ."
    },
    {
      "title": "Helm Infrastructure for 55+ Services",
      "context": "Managed centralized Helm repository across 4 environments with shared library chart, OIDC auth, and automated CI/CD publishing."
    },
    {
      "title": "100+ Technical Interviews",
      "context": "Conducted backend engineering interviews over 3+ years to strengthen hiring pipeline and maintain team quality."
    }
  ],
  "architecture": [
    {
      "title": "AI Data Platform Backend (6+ Microservices)",
      "description": "Contributed to backend architecture across 6+ Python microservices forming an AI data platform with event-driven communication, multi-database support, and feature-flagged rollouts.",
      "highlights": [
        "Optimized MongoDB aggregation pipelines reducing query latency by 99.7% (14s → 44ms) on high-traffic endpoints.",
        "Built async event-driven architecture with RabbitMQ for LLM prompt processing with polling-based status resolution.",
        "Implemented dual data-source routing (BigQuery ↔ PostgreSQL) with feature-flag-gated DAO selection and user-level targeting.",
        "Designed Valkey caching layer with TTL strategy and conditional initialization, reducing upstream HTTP calls by ~40%.",
        "Built partition-based BigQuery-to-PostgreSQL sync with crash-safe resume, staging deduplication, and exclusive DB locks."
      ],
      "technologies": ["Python", "FastAPI", "SQLAlchemy", "asyncpg", "MongoDB", "PostgreSQL", "BigQuery", "Elasticsearch", "RabbitMQ", "Valkey"]
    },
    {
      "title": "Annotation & Labeling Platform (Go + Java)",
      "description": "Built 10+ backend features across a distributed annotation platform (Go monorepo + Java service + media service) handling image, video, LiDAR, and audio labeling at scale.",
      "highlights": [
        "Developed concurrent job assignment in Go with optimistic locking, group-level stats, and mission fallback across 2 services.",
        "Built interpolation/extrapolation engines for long video sequences in Java with jOOQ and PostgreSQL.",
        "Implemented QC sample stats pipeline with RabbitMQ queue processing and pagination across 3 Go microservices.",
        "Built Signed Cookies API and presigned S3 upload endpoints in Java for secure cross-platform media access.",
        "Developed CSV batch ingestion API with validation, progress tracking, and job-creation stats."
      ],
      "technologies": ["Go", "Java", "Dropwizard", "jOOQ", "PostgreSQL", "MongoDB", "RabbitMQ", "S3"]
    },
    {
      "title": "Workflow Orchestration Engine Architecture",
      "description": "Designed and prototyped a scalable workflow orchestration platform for long-running, event-driven workflow execution.",
      "highlights": [
        "Researched 4+ orchestration platforms (Temporal, Workato, Trigger.dev, n8n) and designed execution model with retries, timers, and signals.",
        "Defined workflow step abstractions: Service Tasks, User Tasks, Event Waiters, and Scheduled Tasks.",
        "Built working POC with Go backend, PostgreSQL state storage, and RabbitMQ task dispatch.",
        "Designed visual workflow graph → executable runtime compilation for n8n-style dynamic workflow builder.",
        "Explored scalability strategies for millions of concurrent workflows using durable state storage."
      ],
      "technologies": ["Go", "Temporal", "PostgreSQL", "RabbitMQ", "Distributed Systems"]
    }
  ],
  "skills": [
    { "category": "Languages", "items": ["Python", "Go", "Java"] },
    {
      "category": "Databases & Search",
      "items": ["PostgreSQL", "MongoDB", "BigQuery", "Elasticsearch", "Redis", "Valkey"]
    },
    {
      "category": "Messaging & Events",
      "items": ["RabbitMQ (AMQP)", "MongoDB Change Streams", "Event-Driven Architecture"]
    },
    {
      "category": "Backend & Infrastructure",
      "items": ["FastAPI", "SQLAlchemy", "asyncpg", "Motor", "Pydantic", "Dropwizard", "jOOQ", "Docker", "Kubernetes", "Helm", "AWS (S3, EKS)", "GCP (BigQuery, Artifact Registry)", "CircleCI", "Gunicorn", "Git"]
    },
    {
      "category": "Architecture & Concepts",
      "items": ["System Design", "Distributed Systems", "Microservices", "Workflow Orchestration", "Event-Driven Architecture", "Feature Flags", "Data Migration", "Domain-Driven Design"]
    },
    {
      "category": "AI / ML Systems",
      "items": ["RAG Systems", "LLM Integration (OpenAI, Gemini)", "Embedding Pipelines", "ML Data Collection Platforms", "Annotation Tooling"]
    },
    {
      "category": "Auth & Security",
      "items": ["OIDC/OAuth (Auth0)", "JWT", "Signed Cookies / Presigned URLs"]
    }
  ],
  "education": [
    {
      "institution": "Atria Institute of Technology",
      "location": "Bengaluru",
      "degree": "B.E. in Computer Science",
      "date": "08/2018"
    }
  ]
}
