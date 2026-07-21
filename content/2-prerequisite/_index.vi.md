---
title : "Điều kiện chuẩn bị"
date: 2026-05-11
weight : 2
chapter : false
pre : "<b> 2. </b>"
---

# Điều kiện chuẩn bị

## Chuẩn bị tài khoản AWS

Trước khi bắt đầu workshop, bạn cần có một tài khoản AWS với đầy đủ quyền để triển khai và quản lý các dịch vụ sẽ sử dụng trong bài thực hành.

### Quyền truy cập cần có

- **Amazon API Gateway**: Tạo và quản lý các REST API.
- **AWS Lambda**: Tạo, cập nhật và quản lý các hàm Lambda.
- **Amazon DynamoDB**: Tạo và thao tác với các bảng dữ liệu.
- **AWS IAM**: Quản lý Role và Policy phục vụ phân quyền.
- **Amazon CloudWatch**: Theo dõi log và giám sát quá trình thực thi.

{{% notice info %}}
Nếu bạn chưa sở hữu tài khoản AWS, hãy đăng ký **AWS Free Tier** để bắt đầu. Phần lớn nội dung trong workshop này đều nằm trong giới hạn miễn phí của AWS đối với các tài khoản đủ điều kiện.
{{% /notice %}}

---

## Chuẩn bị môi trường làm việc

### Thành phần bắt buộc

- **AWS CLI (phiên bản 2.x trở lên)**
  - Hướng dẫn cài đặt: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
  - Kiểm tra phiên bản:

```bash
aws --version
```

- **Cấu hình thông tin đăng nhập AWS**

Sau khi cài đặt AWS CLI, thực hiện:

```bash
aws configure
```

Sau đó nhập:

- AWS Access Key ID
- AWS Secret Access Key
- Default Region (khuyến nghị: `us-east-1`)
- Default Output Format (có thể để trống hoặc chọn `json`)

- **Trình soạn thảo mã nguồn**

Có thể sử dụng một trong các công cụ như:

- Visual Studio Code
- PyCharm
- IntelliJ IDEA
- Hoặc bất kỳ IDE nào bạn quen thuộc

### Thành phần khuyến nghị

Để việc thực hành thuận lợi hơn, bạn nên cài đặt thêm:

- **Python 3.8 hoặc mới hơn** để kiểm thử Lambda trên máy cục bộ.
- **Postman** hoặc **curl** để gửi và kiểm tra các HTTP Request.
- **Git** nhằm quản lý mã nguồn và theo dõi lịch sử thay đổi.

---

## Các dịch vụ AWS sử dụng trong workshop

Trong suốt quá trình thực hành, bạn sẽ làm việc với ba dịch vụ chính:

1. **Amazon API Gateway** – Cung cấp các HTTP API cho ứng dụng.
2. **AWS Lambda** – Xử lý toàn bộ logic nghiệp vụ theo mô hình Serverless.
3. **Amazon DynamoDB** – Lưu trữ dữ liệu Todo bằng cơ sở dữ liệu NoSQL.

### Các dịch vụ hỗ trợ

Ngoài ba dịch vụ trên, workshop còn sử dụng:

- **AWS IAM** để quản lý quyền truy cập và bảo mật.
- **Amazon CloudWatch** để giám sát hoạt động và lưu nhật ký hệ thống.
- **AWS CloudFormation** (tùy chọn) để triển khai hạ tầng theo mô hình Infrastructure as Code.

---

## Chi phí ước tính

Nếu thực hiện đúng theo hướng dẫn, tổng chi phí của workshop thường **không vượt quá 1 USD**, với điều kiện:

- Hoàn thành bài thực hành trong khoảng 2–3 giờ.
- Xóa toàn bộ tài nguyên sau khi kết thúc.
- Tài khoản của bạn vẫn nằm trong chương trình AWS Free Tier.

### Giới hạn miễn phí của AWS Free Tier

Một số dịch vụ được miễn phí trong giới hạn bao gồm:

- **AWS Lambda:** 1.000.000 lượt gọi hàm mỗi tháng.
- **Amazon DynamoDB:** 25 GB lưu trữ cùng 25 RCU và 25 WCU.
- **Amazon API Gateway:** 1.000.000 yêu cầu API mỗi tháng trong năm đầu tiên.

**Lưu ý:** Luôn kiểm tra và xóa tài nguyên sau khi hoàn thành workshop để tránh phát sinh chi phí ngoài mong muốn.

---

## Thời gian thực hiện

Tổng thời gian dự kiến: **2 đến 3 giờ**

| Nội dung | Thời gian |
|----------|-----------:|
| Chuẩn bị môi trường | 15–20 phút |
| Tạo bảng DynamoDB | Khoảng 10 phút |
| Xây dựng các hàm Lambda | 40–50 phút |
| Cấu hình API Gateway | 30–40 phút |
| Kiểm thử và xử lý lỗi | 20–30 phút |
| Dọn dẹp tài nguyên | Khoảng 10 phút |

---

## Các bước tiếp theo

Sau khi hoàn tất phần chuẩn bị, hãy thực hiện theo thứ tự sau:

1. Đảm bảo tài khoản AWS có đầy đủ quyền cần thiết.
2. Cài đặt và cấu hình AWS CLI trên máy tính.
3. Kiểm tra kết nối bằng lệnh:

```bash
aws s3 ls
```

4. Nếu mọi thứ hoạt động bình thường, tiếp tục sang phần **Thiết lập bảng DynamoDB**.

---

{{% notice warning %}}
Không lưu hoặc đưa **AWS Access Key** và **Secret Access Key** lên GitHub hoặc bất kỳ hệ thống quản lý mã nguồn nào. Thay vào đó, hãy sử dụng tệp cấu hình được AWS CLI lưu tại thư mục `~/.aws/credentials` để đảm bảo an toàn thông tin.
{{% /notice %}}