---
title : "Getting Started"
date: 2026-05-11
weight : 1
chapter : false
pre : "<b> 1. </b>"
---

# Building a Serverless Todo API with AWS

## Introduction

This workshop walks you through the process of developing a **Serverless Todo API** by leveraging several core AWS services. Throughout the hands-on exercises, you will learn how to build a reliable backend application without provisioning or maintaining traditional servers.

### Project Objectives

By the end of this workshop, you will have created a RESTful API capable of managing todo tasks. The application will support the following features:

- Add new todo records
- Display existing todo items
- Modify task information or completion status
- Remove unnecessary tasks

Each request is processed through HTTP endpoints, while all data is stored securely inside a cloud database.

### Practical Applications

The architecture introduced in this workshop is commonly adopted in many production environments, including:

- **Microservice-based Applications**: Independent and scalable backend components
- **Content Platforms**: APIs supporting articles, blogs, and publishing systems
- **Mobile Services**: Backend APIs for Android and iOS applications
- **IoT Solutions**: Managing and presenting data collected from connected devices
- **Online Retail Systems**: Handling products, inventory, and customer orders

---

## Solution Architecture


```
User (Browser/Postman)
│
▼
Amazon API Gateway
│
▼
AWS Lambda Functions
│
▼
Amazon DynamoDB
```


### Core AWS Components

1. **Amazon API Gateway** – Exposes HTTP endpoints and forwards client requests.
2. **AWS Lambda** – Executes backend logic for Create, Read, Update, and Delete operations.
3. **Amazon DynamoDB** – Stores todo data using a managed NoSQL database service.

---

## Why Use These AWS Services?

| AWS Service | Purpose |
|-------------|---------|
| **Amazon API Gateway** | Publishes REST endpoints, routes requests, and manages incoming traffic |
| **AWS Lambda** | Runs application logic without managing infrastructure while automatically scaling based on demand |
| **Amazon DynamoDB** | Delivers a highly available NoSQL database with fast performance and automatic scalability |

---

## Learning Objectives

During this workshop, you will learn how to:

- Create and configure a DynamoDB table using an appropriate primary key.
- Develop Lambda functions in Python to perform CRUD operations.
- Connect API Gateway with Lambda to expose RESTful endpoints.
- Validate API functionality using Postman.
- Monitor execution logs through Amazon CloudWatch.
- Apply IAM roles following the Principle of Least Privilege.
- Deploy cloud resources using AWS CloudFormation.
- Remove AWS resources safely after completing the project.

---

## Expected Results

After finishing this workshop, you should be able to:

- Build a complete Serverless Todo API running on AWS.
- Understand the advantages of serverless application architecture.
- Gain practical experience with Amazon API Gateway, AWS Lambda, and Amazon DynamoDB.
- Design and implement RESTful APIs following common best practices.
- Deploy a scalable cloud-native application that can be extended for future development.