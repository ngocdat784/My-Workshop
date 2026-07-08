---
title: "Nhật ký làm việc 12 tuần"
weight: 2
---

## Chương Trình Thực Tập First Cloud Journey – AWS
**Thời gian:** 17/04/2026 – 10/07/2026

---

## Tuần 1: Giới Thiệu AWS & Setup Cơ Bản
**📅 17/04/2026 – 21/04/2026**

**Mục tiêu:**
- Kết nối và làm quen với các thành viên của First Cloud Journey
- Hiểu tổng quan AWS và các dịch vụ cơ bản

**Công việc & Thành tích:**
- Làm quen với môi trường thực tập và thành viên FCJ
- Tìm hiểu AWS cơ bản: Điện toán, Lưu trữ, Kết nối mạng, Cơ sở dữ liệu, Bảo mật
- Tạo thành công tài khoản AWS Free Tier và cấu hình AWS CLI
- Thực hành điều hướng AWS Management Console

---

## Tuần 2: EC2 Cơ Bản & Quản Lý
**📅 24/04/2026 – 28/04/2026**

**Mục tiêu:**
- Nắm vững EC2: Instance types, AMI, EBS, Elastic IP
- Thực hành khởi chạy và quản lý EC2 instance

**Công việc & Thành tích:**
- Tìm hiểu chi tiết các loại EC2 instance, AMI, EBS volume, Elastic IP
- Học về SSH key pair và cấu hình Security Group
- Khởi chạy EC2 thành công và kết nối SSH
- Đính kèm EBS volume và tạo AMI tùy chỉnh từ instance đang chạy

---

## Tuần 3: VPC & Hạ Tầng Mạng
**📅 01/05/2026 – 05/05/2026**

**Mục tiêu:**
- Nắm vững VPC: Subnet, Internet Gateway, Route Table, Security Group
- Triển khai hạ tầng mạng cơ bản trên AWS

**Công việc & Thành tích:**
- ⚠️ Lưu ý: Tuần 3 có ngày lễ (số ngày học giảm)
- Hiểu kiến trúc VPC: CIDR, Subnet công khai/riêu tư
- Tạo VPC tùy chỉnh với Internet Gateway và Route Table
- Phân biệt Security Group (stateful) và Network ACL (stateless)

---

## Tuần 4: VPC Nâng Cao & S3 Storage
**📅 08/05/2026 – 12/05/2026**

**Mục tiêu:**
- Hoàn thiện kiến thức VPC và thực hành triển khai mạng đầy đủ
- Tìm hiểu S3: Storage Classes, Versioning, Lifecycle Policy

**Công việc & Thành tích:**
- Triển khai đầy đủ hạ tầng VPC: Public subnet, Private subnet, NAT Gateway
- EC2 trong Private subnet kết nối internet thành công qua NAT
- Hiểu các S3 Storage Class và chính sách vòng đời dữ liệu
- Cấu hình S3 Versioning và Lifecycle Policy

---

## Tuần 5: S3 Nâng Cao & IAM Bảo Mật
**📅 15/05/2026 – 19/05/2026**

**Mục tiêu:**
- Thực hành S3 nâng cao và host static website
- Tìm hiểu IAM: User, Group, Role, Policy và nguyên tắc Least Privilege

**Công việc & Thành tích:**
- Triển khai static website trên S3 với CloudFront CDN
- Hiểu cơ chế IAM Policy: Allow/Deny, Effect, Action, Resource
- Phân biệt IAM User, Group, Role và khi nào dùng từng loại
- Bật MFA cho tài khoản root và IAM User

---

## Tuần 6: Dịch Vụ Cơ Sở Dữ Liệu & Bảo Mật
**📅 22/05/2026 – 26/05/2026**

**Mục tiêu:**
- Thực hành IAM nâng cao và tìm hiểu RDS, DynamoDB
- Triển khai database trong môi trường bảo mật

**Công việc & Thành tích:**
- Tạo IAM Role cho EC2 truy cập S3 không cần Access Key
- Hiểu sự khác nhau giữa RDS (relational) và DynamoDB (NoSQL)
- Triển khai RDS MySQL trong Private Subnet với Multi-AZ
- Kết nối EC2 → RDS thành công, thực hiện CRUD operations

---

## Tuần 7: Serverless Computing & APIs
**📅 29/05/2026 – 02/06/2026**

**Mục tiêu:**
- Tìm hiểu và thực hành Lambda, API Gateway – Xây dựng Serverless API
- Kết hợp Lambda + DynamoDB để xử lý dữ liệu

**Công việc & Thành tích:**
- Hiểu kiến trúc Serverless và lợi ích của Lambda
- Viết Lambda function Python xử lý S3 trigger thành công
- Xây dựng REST API hoàn chỉnh: API Gateway + Lambda + DynamoDB
- Test API với Postman, xác nhận tất cả endpoints hoạt động đúng

---

## Tuần 8: Giám Sát & Tự Động Mở Rộng
**📅 05/06/2026 – 09/06/2026**

**Mục tiêu:**
- Thiết lập giám sát hệ thống với CloudWatch, SNS
- Tìm hiểu Auto Scaling Group và Elastic Load Balancer

**Công việc & Thành tích:**
- Tạo CloudWatch Dashboard theo dõi EC2 (CPU, Network, Disk)
- Cấu hình CloudWatch Alarm gửi cảnh báo qua SNS Email
- Tạo ALB với Target Group và Health Check
- Cấu hình ASG với Target Tracking Policy, kiểm tra scale-out/in

---

## Tuần 9: Infrastructure as Code
**📅 12/06/2026 – 16/06/2026**

**Mục tiêu:**
- Tìm hiểu CloudFormation – Infrastructure as Code
- Tự động hóa triển khai hạ tầng bằng CloudFormation template

**Công việc & Thành tích:**
- Hiểu lợi ích của IaC và vòng đời CloudFormation Stack
- Viết YAML template triển khai VPC, EC2, Security Group tự động
- Thực hiện stack update và rollback thành công khi gặp lỗi
- Làm quen với Nested Stack để tổ chức template quy mô lớn

---

## Tuần 10: CI/CD Pipelines
**📅 19/06/2026 – 23/06/2026**

**Mục tiêu:**
- Xây dựng CI/CD pipeline với CodePipeline, CodeBuild, CodeDeploy
- Tự động hóa quy trình từ code đến production

**Công việc & Thành tích:**
- Hiểu luồng CI/CD: Source → Build → Test → Deploy
- Kết nối GitHub với CodePipeline, pipeline tự kích hoạt khi push code
- Triển khai ứng dụng lên EC2 bằng CodeDeploy Blue/Green strategy
- Cấu hình manual approval và kiểm tra rollback tự động

---

## Tuần 11: Bảo Mật Nâng Cao
**📅 26/06/2026 – 30/06/2026**

**Mục tiêu:**
- Tìm hiểu bảo mật nâng cao: WAF, GuardDuty, Shield, Security Hub
- Thiết lập các lớp bảo vệ cho hạ tầng AWS

**Công việc & Thành tích:**
- Hiểu cơ chế WAF và viết Rule chặn SQL Injection, XSS
- Bật GuardDuty và phân tích các findings bảo mật tự động
- Gắn WAF Web ACL vào ALB để bảo vệ ứng dụng web
- Kích hoạt Security Hub, xem báo cáo tuân thủ bảo mật AWS

---

## Tuần 12: Tài Liệu & Hoàn Thiện
**📅 03/07/2026 – 17/07/2026**

**Mục tiêu:**
- Hoàn thiện Workshop kỹ thuật chính và tài liệu báo cáo cuối khóa
- Tổng kết, tự đánh giá và chuẩn bị bảo vệ báo cáo

**Công việc & Thành tích:**
- Hoàn thành Workshop kỹ thuật với kiến trúc, diagram, IAM và CloudWatch đầy đủ
- Viết tài liệu Workshop song ngữ Việt/Anh đạt chuẩn FCAJ
- Clean-up toàn bộ tài nguyên AWS, không để lại chi phí phát sinh
- Hoàn thiện đầy đủ 7 mục báo cáo thực tập theo yêu cầu FCAJ
- Nộp báo cáo và sẵn sàng cho buổi demo cuối khóa ngày 19/07/2026

---

**Kết Thúc Nhật Ký 12 Tuần**