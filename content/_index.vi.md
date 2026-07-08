---
title : "Serverless Todo API trên AWS"
date: 2026-05-11 
weight : 1 
chapter : false
---


### Tổng quan

Trong workshop này, bạn sẽ xây dựng một **API Ứng dụng Todo Serverless** hoàn chỉnh sử dụng ba dịch vụ AWS cốt lõi. Bạn sẽ học cách thiết kế, triển khai và kiểm thử một REST API hoàn toàn serverless — không cần quản lý máy chủ, tự động mở rộng và tính phí theo lượng sử dụng.

![Kiến trúc](/images/workshop-architecture.png)

### Kiến trúc

```
Client (Postman/Browser)
         ↓
Amazon API Gateway  (HTTP Endpoints)
         ↓
AWS Lambda Functions  (CRUD Business Logic)
         ↓
Amazon DynamoDB  (NoSQL Storage)
```

### Dịch vụ AWS sử dụng

| Dịch vụ | Vai trò |
|---|---|
| **Amazon API Gateway** | Cung cấp các HTTP endpoint công khai, xử lý routing |
| **AWS Lambda** | Các hàm serverless xử lý từng thao tác CRUD |
| **Amazon DynamoDB** | Cơ sở dữ liệu NoSQL được quản lý hoàn toàn |
| **AWS IAM** | Kiểm soát truy cập và bảo mật least-privilege |
| **Amazon CloudWatch** | Giám sát, logging và metrics |

### Nội dung

1. [Giới thiệu](1-introduce/)
2. [Điều kiện tiên quyết](2-prerequisite/)
3. [Tạo DynamoDB Table](3-setup/)
4. [Tạo Lambda Functions](4-implementation/)
5. [Cấu hình API Gateway & Kiểm thử](5-testing/)
6. [Dọn dẹp Tài nguyên](6-cleanup/)
