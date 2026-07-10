---
title: "Blog Posts"
weight: 1
---

# AWS Blog Posts - 3 Articles

## Overview

As part of the First Cloud Journey internship program, I researched and published three AWS-related technical articles in the AWS Study Group community. These articles focus on practical cloud computing knowledge, AI cost optimization, serverless architectures, and AWS security best practices.

---

# Blog Post 1: Intelligent Prompt Routing for Cost Optimization on Amazon Bedrock

**Title**: "Optimize LLM Operating Costs with Intelligent Prompt Routing on Amazon Bedrock"

**Published On**: AWS Study Group (July 2026)

### Overview

One of the most common cost traps in production AI systems is the **Single-Model Strategy**, where every request is processed by the most powerful model regardless of complexity. This leads to unnecessary infrastructure costs and increased response latency.

Amazon Bedrock introduces **Intelligent Prompt Routing**, a serverless routing mechanism that dynamically selects the most appropriate model within the same model family based on prompt complexity.

### Key Topics

- How Intelligent Prompt Routing works
- Dynamic routing between Claude Sonnet and Claude Haiku
- Automatic complexity estimation
- Zero integration overhead using a single routing endpoint
- Serverless architecture for AI model selection

### Cost Analysis

The article analyzes real-world benchmark data showing:

- Claude 3 Haiku costs approximately **$0.000379 per request**
- Claude 3.5 Sonnet costs approximately **$0.0066 per request**
- Up to **94% cost reduction**
- Around **2.5× faster response time** for simple prompts

At production scale (1 million simple requests):

- Sonnet-only deployment: approximately **$6,600**
- Haiku-only deployment: approximately **$379**
- Potential savings of over **$6,200**

The article also references an enterprise case study where AWS Bedrock costs were reduced from **$40,000/month to $18,000/month** using prompt routing and infrastructure optimization.

### Advanced Applications

The article discusses how Prompt Routing improves AI Agent architectures by:

- Routing planning and tool-calling tasks to lightweight models
- Using larger models only for deep reasoning
- Combining Prompt Routing with Prompt Caching for additional cost savings
- Optimizing long-context agent workflows

### Limitations

- Router accuracy is currently optimized primarily for English prompts.
- The routing algorithm cannot be customized with application-specific training data.

### Learning Outcomes

- Learned how Amazon Bedrock optimizes AI inference costs.
- Understood dynamic model selection strategies.
- Explored production-ready AI optimization techniques.

---

# Blog Post 2: Optimizing Backend Costs with AWS Lambda Serverless Architecture

**Title**: "Reduce Backend Operating Costs with AWS Lambda Serverless Architecture"

**Published On**: AWS Study Group (July 2026)

### Overview

Traditional backend systems often keep EC2 instances running continuously, even during periods of low traffic. This creates unnecessary infrastructure costs and operational overhead.

AWS Lambda addresses this issue through a **serverless Function-as-a-Service (FaaS)** model where applications only consume compute resources when functions are executed.

### Key Topics

- Problems with traditional always-on servers
- AWS Lambda architecture
- Event-driven computing
- Automatic scaling
- Pay-per-use pricing model

### Cost Optimization

The article compares:

**Traditional EC2**

- Servers run 24/7
- Continuous infrastructure costs
- Manual scaling
- Idle resource expenses

**AWS Lambda**

- Pay only for executions
- Automatic scaling
- No server management
- Near-zero cost when idle

### AI and Chatbot Applications

The article demonstrates replacing:

```
EC2
└── FastAPI
    └── AI Chatbot
```

with:

```
API Gateway
      │
      ▼
AWS Lambda
      │
      ▼
Amazon Bedrock
```

Benefits include:

- No always-on backend servers
- Automatic scaling
- Lower operational costs
- Ideal for AI chatbots, student projects, and startups

### Event-Driven Architecture

The article also presents an event-driven e-commerce example:

```
Customer Places Order
          │
          ▼
      DynamoDB
          │
          ▼
     EventBridge
      │       │
      ▼       ▼
 Lambda   Lambda
 Email    Inventory Update
```

Each Lambda function performs a single responsibility, improving scalability and maintainability.

### Limitations

- Cold Start latency
- More complex debugging compared to monolithic systems
- Not suitable for long-running workloads such as video processing or real-time streaming

### Learning Outcomes

- Understood serverless computing principles.
- Learned AWS cost optimization strategies.
- Applied event-driven architecture concepts.

---

# Blog Post 3: AWS Security Best Practices

**Title**: "Securing AWS Applications with IAM and the Principle of Least Privilege"

**Published On**: AWS Study Group (July 2026)

### Overview

This article introduces essential AWS security practices centered around Identity and Access Management (IAM) and the Principle of Least Privilege.

### Key Topics

- Principle of Least Privilege
- IAM Roles vs IAM Policies
- Common AWS security mistakes
- Encryption at rest and in transit
- CloudTrail audit logging

### Security Best Practices

- Never use the root account for daily operations.
- Enable Multi-Factor Authentication (MFA).
- Create dedicated IAM roles for applications.
- Rotate credentials regularly.
- Use AWS Key Management Service (KMS) for encryption keys.
- Monitor account activity using AWS CloudTrail.

### Learning Outcomes

- Improved understanding of AWS identity management.
- Applied security best practices in AWS environments.
- Learned how to design secure cloud applications following AWS recommendations.

---

# Skills & Knowledge Gained

Through these three technical articles, I gained practical experience in:

- AI cost optimization on Amazon Bedrock
- Intelligent Prompt Routing
- Serverless application architecture
- AWS Lambda
- Event-driven system design
- Cloud cost management
- AWS Identity and Access Management (IAM)
- AWS security best practices
- Production-ready cloud architecture

---

# References

- AWS Blog
- AWS Documentation
- Amazon Bedrock Documentation
- AWS Lambda Documentation
- AWS Study Group Community