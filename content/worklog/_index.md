---
title: "Worklog"
weight: 2
---

# 12-Week Work Log
## First Cloud Journey AWS Internship Program
**Duration:** April 17, 2026 – July 19, 2026

---

## Week 1: AWS Overview & Basic Setup
**📅 April 17–21, 2026**

**Goals:**
- Connect and get acquainted with First Cloud Journey members
- Understand AWS overview and basic services

**Tasks & Achievements:**
- Onboarded to FCJ and reviewed internship guidelines
- Learned AWS fundamentals: Computing, Storage, Networking, Databases, Security
- Created AWS Free Tier account and configured AWS CLI
- Practiced navigating AWS Management Console

---

## Week 2: EC2 Fundamentals & Management
**📅 April 24–28, 2026**

**Goals:**
- Master EC2: Instance types, AMI, EBS, Elastic IP
- Practice launching and managing EC2 instances

**Tasks & Achievements:**
- Studied EC2 instance types, AMI, EBS volume types, and Elastic IP
- Learned SSH key pairs and Security Groups configuration
- Successfully launched EC2 instances and connected via SSH
- Attached EBS volumes and created custom AMIs from running instances

---

## Week 3: VPC & Network Infrastructure
**📅 May 1–5, 2026**

**Goals:**
- Master VPC: Subnet, Internet Gateway, Route Table, Security Group
- Deploy basic network infrastructure on AWS

**Tasks & Achievements:**
- ⚠️ Note: Week 3 included public holidays (fewer working days)
- Understood VPC architecture: CIDR, public/private subnets
- Created custom VPC with Internet Gateway and Route Tables
- Distinguished Security Groups (stateful) from Network ACLs (stateless)

---

## Week 4: Advanced VPC & S3 Storage
**📅 May 8–12, 2026**

**Goals:**
- Complete VPC knowledge and practice full network deployment
- Learn S3: Storage Classes, Versioning, Lifecycle Policy

**Tasks & Achievements:**
- Deployed complete VPC infrastructure: Public/Private subnets, NAT Gateway
- EC2 in Private subnet successfully accessed internet via NAT
- Understood S3 Storage Classes and data lifecycle policies
- Configured S3 Versioning and Lifecycle Policy

---

## Week 5: S3 Advanced Features & IAM Security
**📅 May 15–19, 2026**

**Goals:**
- Practice advanced S3 and host a static website
- Learn IAM: Users, Groups, Roles, Policies, and Least Privilege principle

**Tasks & Achievements:**
- Deployed static website on S3 with CloudFront CDN integration
- Understood IAM Policy mechanics: Allow/Deny, Effect, Action, Resource
- Distinguished IAM User, Group, Role and when to use each
- Enabled MFA for root account and IAM Users

---

## Week 6: Database Services & Security
**📅 May 22–26, 2026**

**Goals:**
- Practice advanced IAM and learn RDS, DynamoDB
- Deploy databases in a secure environment

**Tasks & Achievements:**
- Created IAM Roles for EC2 to access S3 without Access Keys
- Understood differences between RDS (relational) and DynamoDB (NoSQL)
- Deployed RDS MySQL in Private Subnet with Multi-AZ configuration
- Successfully connected EC2 → RDS and performed CRUD operations

---

## Week 7: Serverless Computing & APIs
**📅 May 29 – June 2, 2026**

**Goals:**
- Learn and practice Lambda, API Gateway – Build a Serverless API
- Combine Lambda + DynamoDB for data processing

**Tasks & Achievements:**
- Understood Serverless architecture and Lambda benefits
- Wrote Python Lambda function to handle S3 triggers
- Built complete REST API: API Gateway + Lambda + DynamoDB
- Tested API with Postman and verified all endpoints work correctly

---

## Week 8: Monitoring & Auto Scaling
**📅 June 5–9, 2026**

**Goals:**
- Set up system monitoring with CloudWatch and SNS
- Learn Auto Scaling Groups and Elastic Load Balancer

**Tasks & Achievements:**
- Created CloudWatch Dashboard monitoring EC2 metrics (CPU, Network, Disk)
- Configured CloudWatch Alarms with SNS Email notifications
- Created Application Load Balancer (ALB) with Target Groups and Health Checks
- Configured Auto Scaling Group with Target Tracking Policy and verified scaling behavior

---

## Week 9: Infrastructure as Code
**📅 June 12–16, 2026**

**Goals:**
- Learn CloudFormation – Infrastructure as Code
- Automate infrastructure deployment using CloudFormation templates

**Tasks & Achievements:**
- Understood IaC benefits and CloudFormation Stack lifecycle
- Wrote YAML templates to automatically deploy VPC, EC2, Security Groups
- Successfully performed stack updates and rollback on errors
- Got familiar with Nested Stack for organizing large-scale templates

---

## Week 10: CI/CD Pipelines
**📅 June 19–23, 2026**

**Goals:**
- Build a CI/CD pipeline with CodePipeline, CodeBuild, CodeDeploy
- Automate the process from code to production

**Tasks & Achievements:**
- Understood the CI/CD flow: Source → Build → Test → Deploy
- Connected GitHub to CodePipeline; pipeline triggers automatically on code push
- Deployed application to EC2 using CodeDeploy Blue/Green strategy
- Configured manual approval and verified automatic rollback on failures

---

## Week 11: Advanced Security
**📅 June 26–30, 2026**

**Goals:**
- Learn advanced security: WAF, GuardDuty, Shield, Security Hub
- Set up protection layers for AWS infrastructure

**Tasks & Achievements:**
- Understood WAF mechanics and wrote rules to block SQL Injection and XSS attacks
- Enabled GuardDuty and analyzed automated security findings
- Attached WAF Web ACL to ALB to protect web applications
- Activated Security Hub and reviewed AWS security compliance reports

---

## Week 12: Documentation & Finalization
**📅 July 3–17, 2026**

**Goals:**
- Complete the main technical Workshop and final internship report
- Summarize knowledge, self-evaluate, and prepare for report defense

**Tasks & Achievements:**
- Completed technical Workshop with full architecture diagrams, IAM roles, and CloudWatch monitoring
- Wrote bilingual (Vietnamese/English) Workshop documentation to FCAJ standards
- Cleaned up all AWS resources with no remaining costs
- Completed all 7 required sections of the FCAJ internship report
- Submitted the report and prepared for the final defense presentation on July 19, 2026

---

**End of 12-Week Work Log**