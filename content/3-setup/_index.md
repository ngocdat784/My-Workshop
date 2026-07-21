---
title: "Configure DynamoDB Table"
date: 2026-05-11
weight: 3
chapter: false
pre: "<b> 3. </b>"
---

# Step 1: Configure the DynamoDB Table

## Introduction

Amazon DynamoDB is a fully managed NoSQL database service designed for high availability and low-latency performance. In this section, you will create a table named **todos**, which will serve as the primary data store for the Serverless Todo API.

---

## Table Structure

| Attribute | Data Type | Description |
|-----------|-----------|-------------|
| `todoId` | String | Primary key generated as a unique UUID |
| `title` | String | Title of the todo task |
| `description` | String | Additional details about the task (optional) |
| `status` | String | Current status (`pending` or `completed`) |
| `createdAt` | Number | Unix timestamp when the item is created |
| `updatedAt` | Number | Unix timestamp updated whenever the item changes |

---

## Creating the Table from the AWS Console

### Step 1 — Open Amazon DynamoDB

1. Log in to the AWS Management Console.
2. Search for **DynamoDB** using the AWS search bar.
3. Open the **Tables** page from the navigation menu.

### Step 2 — Configure the Table

Select **Create table**, then provide the following information:

- **Table Name:** `todos`
- **Partition Key:** `todoId`
- **Data Type:** String

Keep the **Sort Key** empty.

Next,

- Open **Table Settings** and choose **Customize Settings**.
- Under **Capacity Mode**, select **On-demand** so that DynamoDB automatically scales based on traffic.
- Leave the remaining settings unchanged.
- Click **Create Table**.

### Step 3 — Confirm Table Creation

Wait until the table status changes to **Active**.

Verify the following information:

- Table Name: `todos`
- Partition Key: `todoId`
- Billing Mode: On-demand
- Table Status: Active

---

## Creating the Table with AWS CLI

Execute the following command:

```bash
aws dynamodb create-table \
  --table-name todos \
  --attribute-definitions AttributeName=todoId,AttributeType=S \
  --key-schema AttributeName=todoId,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --region us-east-1
```

To verify the table status:

```bash
aws dynamodb describe-table \
  --table-name todos \
  --query "Table.TableStatus" \
  --output text
```

Expected result:

```
ACTIVE
```

---

## Insert a Sample Record (Optional)

You may insert a sample item to confirm the table is functioning correctly.

```bash
aws dynamodb put-item \
  --table-name todos \
  --item '{
    "todoId":{"S":"test-001"},
    "title":{"S":"Test Item"},
    "description":{"S":"Testing DynamoDB"},
    "status":{"S":"pending"},
    "createdAt":{"N":"1700000000"},
    "updatedAt":{"N":"1700000000"}
}'
```

Retrieve the inserted record:

```bash
aws dynamodb get-item \
  --table-name todos \
  --key '{"todoId":{"S":"test-001"}}'
```

After verification, remove the sample item:

```bash
aws dynamodb delete-item \
  --table-name todos \
  --key '{"todoId":{"S":"test-001"}}'
```

---

## Continue to the Next Section

Once the DynamoDB table has been created successfully, proceed to **Step 2: Develop Lambda Functions**, where you will implement the CRUD logic for the Todo API.