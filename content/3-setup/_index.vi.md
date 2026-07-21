---
title: "Tạo bảng DynamoDB"
date: 2026-05-11
weight: 3
chapter: false
pre: "<b> 3. </b>"
---

# Bước 1: Tạo bảng DynamoDB

## Giới thiệu

Amazon DynamoDB là dịch vụ cơ sở dữ liệu NoSQL được AWS quản lý hoàn toàn, có khả năng mở rộng linh hoạt và đáp ứng truy vấn với độ trễ rất thấp. Trong phần này, bạn sẽ tạo bảng **todos**, nơi lưu trữ toàn bộ dữ liệu của ứng dụng Todo API.

---

## Cấu trúc bảng dữ liệu

| Thuộc tính | Kiểu dữ liệu | Mô tả |
|------------|-------------|------|
| `todoId` | String | Khóa chính (Partition Key), sử dụng UUID duy nhất |
| `title` | String | Tiêu đề của công việc |
| `description` | String | Nội dung mô tả (không bắt buộc) |
| `status` | String | Trạng thái công việc (`pending` hoặc `completed`) |
| `createdAt` | Number | Thời điểm tạo dữ liệu (Unix Timestamp) |
| `updatedAt` | Number | Thời điểm cập nhật gần nhất (Unix Timestamp) |

---

## Tạo bảng bằng AWS Management Console

### Bước 1 — Truy cập DynamoDB

1. Đăng nhập vào AWS Management Console.
2. Tìm kiếm **DynamoDB** trên thanh tìm kiếm.
3. Chọn mục **Tables** trong menu bên trái.

### Bước 2 — Khởi tạo bảng

Nhấn **Create table**, sau đó nhập các thông tin sau:

- **Table name:** `todos`
- **Partition key:** `todoId`
- **Kiểu dữ liệu:** String

Không cần khai báo **Sort Key**.

Tiếp theo:

- Mở phần **Table Settings** và chọn **Customize Settings**.
- Trong mục **Capacity Mode**, chọn **On-demand** để DynamoDB tự động điều chỉnh tài nguyên theo lưu lượng sử dụng.
- Giữ nguyên các thiết lập còn lại.
- Nhấn **Create Table** để hoàn tất.

### Bước 3 — Kiểm tra bảng

Đợi trạng thái của bảng chuyển sang **Active**.

Kiểm tra các thông tin sau:

- Tên bảng: `todos`
- Partition Key: `todoId`
- Billing Mode: On-demand
- Trạng thái: Active

---

## Tạo bảng bằng AWS CLI

Thực hiện lệnh sau:

```bash
aws dynamodb create-table \
  --table-name todos \
  --attribute-definitions AttributeName=todoId,AttributeType=S \
  --key-schema AttributeName=todoId,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST \
  --region us-east-1
```

Kiểm tra trạng thái của bảng:

```bash
aws dynamodb describe-table \
  --table-name todos \
  --query "Table.TableStatus" \
  --output text
```

Kết quả mong đợi:

```
ACTIVE
```

---

## Thêm dữ liệu mẫu (Tùy chọn)

Để kiểm tra bảng đã hoạt động chính xác hay chưa, bạn có thể thêm một bản ghi thử nghiệm.

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

Đọc lại dữ liệu vừa thêm:

```bash
aws dynamodb get-item \
  --table-name todos \
  --key '{"todoId":{"S":"test-001"}}'
```

Sau khi kiểm tra xong, hãy xóa dữ liệu thử:

```bash
aws dynamodb delete-item \
  --table-name todos \
  --key '{"todoId":{"S":"test-001"}}'
```

---

## Bước tiếp theo

Sau khi tạo thành công bảng DynamoDB, hãy chuyển sang **Bước 2: Xây dựng các hàm AWS Lambda** để triển khai các chức năng CRUD cho Serverless Todo API.