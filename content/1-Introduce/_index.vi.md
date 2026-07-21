---
title : "Giới thiệu"
date: 2026-05-11
weight : 1
chapter : false
pre : "<b> 1. </b>"
---

# Xây dựng Serverless Todo API trên AWS

## Giới thiệu

Trong workshop này, bạn sẽ thực hành xây dựng một **Serverless Todo API** bằng cách sử dụng các dịch vụ cốt lõi của AWS. Thông qua các bước triển khai thực tế, bạn sẽ hiểu cách phát triển một hệ thống backend hiện đại, có khả năng mở rộng linh hoạt mà không cần quản lý hạ tầng máy chủ.

### Nội dung sẽ thực hiện

Kết thúc workshop, bạn sẽ hoàn thành một API RESTful hỗ trợ quản lý danh sách công việc với các chức năng:

- Thêm mới một công việc (Todo)
- Hiển thị danh sách các công việc
- Chỉnh sửa thông tin hoặc trạng thái công việc
- Xóa các công việc không còn sử dụng

Toàn bộ dữ liệu sẽ được lưu trữ trên cơ sở dữ liệu đám mây và được truy cập thông qua các HTTP API.

### Ứng dụng trong thực tế

Mô hình kiến trúc này được áp dụng rộng rãi trong nhiều hệ thống hiện đại như:

- **Microservices:** Xây dựng các dịch vụ độc lập, dễ mở rộng và bảo trì.
- **Backend cho Web và Mobile:** Cung cấp API phục vụ ứng dụng web hoặc di động.
- **Nền tảng IoT:** Tiếp nhận, lưu trữ và xử lý dữ liệu từ các thiết bị thông minh.
- **Thương mại điện tử:** Quản lý sản phẩm, đơn hàng và dữ liệu khách hàng.

---

## Kiến trúc hệ thống

```
Client (Browser/Postman)
        │
        ▼
 Amazon API Gateway
        │
        ▼
 AWS Lambda
        │
        ▼
 Amazon DynamoDB
```

### Các dịch vụ AWS được sử dụng

1. **Amazon API Gateway:** Cung cấp các điểm cuối (HTTP API) để tiếp nhận yêu cầu từ người dùng.
2. **AWS Lambda:** Thực thi các chức năng nghiệp vụ như thêm, xem, cập nhật và xóa dữ liệu.
3. **Amazon DynamoDB:** Lưu trữ dữ liệu Todo bằng cơ sở dữ liệu NoSQL được AWS quản lý.

---

## Lý do lựa chọn kiến trúc này

| Dịch vụ AWS | Vai trò |
|-------------|---------|
| **Amazon API Gateway** | Cung cấp các HTTP API, định tuyến yêu cầu và quản lý lưu lượng truy cập. |
| **AWS Lambda** | Thực thi mã nguồn theo yêu cầu, tự động mở rộng và không cần quản lý máy chủ. |
| **Amazon DynamoDB** | Cơ sở dữ liệu NoSQL hiệu năng cao, có khả năng mở rộng tự động và được quản lý hoàn toàn. |

---

## Kiến thức đạt được

Sau khi hoàn thành workshop, bạn sẽ có thể:

- ✅ Tạo và cấu hình bảng Amazon DynamoDB với khóa chính phù hợp.
- ✅ Xây dựng các hàm AWS Lambda bằng Python để thực hiện các thao tác CRUD.
- ✅ Kết nối Amazon API Gateway với Lambda nhằm xây dựng RESTful API.
- ✅ Kiểm thử API bằng Postman để xác nhận kết quả hoạt động.
- ✅ Theo dõi nhật ký thực thi thông qua Amazon CloudWatch.
- ✅ Thiết lập IAM Roles theo nguyên tắc phân quyền tối thiểu (Least Privilege).
- ✅ Triển khai hạ tầng bằng AWS CloudFormation theo mô hình Infrastructure as Code.
- ✅ Xóa và quản lý tài nguyên AWS đúng quy trình sau khi hoàn thành bài thực hành.

---

## Kết quả mong đợi

Sau khi hoàn tất workshop, bạn sẽ:

- Hoàn thành một Serverless Todo API có thể triển khai và vận hành trên AWS.
- Hiểu rõ cách hoạt động và lợi ích của kiến trúc Serverless.
- Có kinh nghiệm thực hành với ba dịch vụ quan trọng gồm Amazon API Gateway, AWS Lambda và Amazon DynamoDB.
- Nắm được quy trình thiết kế cũng như triển khai một RESTful API theo các nguyên tắc phổ biến.
- Sở hữu một ứng dụng backend có khả năng mở rộng và sẵn sàng phát triển thêm trong tương lai.