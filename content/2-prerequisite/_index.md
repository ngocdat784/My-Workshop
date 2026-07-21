---
title : "Requirements"
date: 2026-05-11
weight : 2
chapter : false
pre : "<b> 2. </b>"
---

# Requirements

## AWS Account Preparation

Before starting this workshop, make sure you have an AWS account with sufficient permissions to create and manage the resources required throughout the lab.

### Required Permissions

Your AWS account should be able to:

- Create and manage **Amazon API Gateway** resources.
- Deploy and update **AWS Lambda** functions.
- Create and maintain **Amazon DynamoDB** tables.
- Configure **IAM** roles and policies.
- Access **Amazon CloudWatch** for monitoring and log analysis.

{{% notice info %}}
If you don't already have an AWS account, you can register for the **AWS Free Tier**. Most of the resources used in this workshop fall within the free tier limits for eligible accounts.
{{% /notice %}}

---

## Development Environment

### Required Software

- **AWS CLI (Version 2.x or later)**
  - Installation Guide: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
  - Verify the installation by running:

```bash
aws --version
```

- **AWS CLI Configuration**

Configure your local credentials with:

```bash
aws configure
```

Provide the following information when prompted:

- AWS Access Key ID
- AWS Secret Access Key
- Default Region (recommended: `us-east-1`)
- Default Output Format (optional)

- **Code Editor or IDE**

You may use any development environment you prefer, such as:

- Visual Studio Code
- PyCharm
- IntelliJ IDEA
- Any other compatible code editor

### Recommended Tools

The following tools are optional but highly recommended:

- **Python 3.8 or newer** for local Lambda development and testing.
- **Postman** or **curl** to send HTTP requests to your API.
- **Git** for source code management and version control.

---

## AWS Services Used

During this workshop, you will primarily work with the following AWS services:

1. **Amazon API Gateway** – Exposes RESTful HTTP endpoints.
2. **AWS Lambda** – Executes serverless business logic.
3. **Amazon DynamoDB** – Stores Todo application data in a managed NoSQL database.

### Supporting Services

Additional AWS services used throughout the workshop include:

- **AWS IAM** for authentication and access management.
- **Amazon CloudWatch** for monitoring application activity and viewing execution logs.
- **AWS CloudFormation** (optional) for deploying infrastructure using Infrastructure as Code.

---

## Estimated Cost

The overall cost of completing this workshop is expected to remain **below USD 1**, provided that:

- The lab is completed within approximately 2–3 hours.
- All created AWS resources are removed after the workshop.
- Your AWS account is eligible for the AWS Free Tier.

### AWS Free Tier Limits

The following free usage limits are typically available:

- **AWS Lambda:** Up to 1,000,000 requests per month.
- **Amazon DynamoDB:** 25 GB of storage with 25 RCU and 25 WCU.
- **Amazon API Gateway:** Up to 1,000,000 API requests per month during the first year.

**Important:** Remember to delete all deployed resources after finishing the workshop to prevent unnecessary AWS charges.

---

## Estimated Completion Time

The workshop can typically be completed in **2 to 3 hours**.

| Activity | Estimated Time |
|----------|---------------:|
| Environment preparation | 15–20 minutes |
| Create DynamoDB table | 10 minutes |
| Develop Lambda functions | 40–50 minutes |
| Configure API Gateway | 30–40 minutes |
| Test and troubleshoot APIs | 20–30 minutes |
| Resource cleanup | 10 minutes |

---

## Before Moving On

Complete the following tasks before proceeding:

1. Verify that your AWS account has the required permissions.
2. Install and configure AWS CLI.
3. Confirm your AWS connection by running:

```bash
aws s3 ls
```

4. Continue with the **DynamoDB Table Setup** section.

---

{{% notice warning %}}
Never store or commit your AWS Access Key ID and Secret Access Key to Git repositories or any version control system. Instead, keep your credentials securely in the AWS CLI configuration file located at `~/.aws/credentials`.
{{% /notice %}}