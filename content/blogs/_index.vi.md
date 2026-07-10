---
title: "Bài Viết Blog"
weight: 1
---

# Bài Viết AWS - 3 Bài Blog

## Tổng Quan

Tôi đã nghiên cứu và chia sẻ 3 bài viết liên quan AWS trên cộng đồng AWS Study Group. Những bài viết này tập trung vào kiến thức thực tế về AWS.

---

## Bài Viết 1:TỐI ƯU HÓA CHI PHÍ VẬN HÀNH LLM QUA CƠ CHẾ ĐỊNH TUYẾN PROMPT THÔNG MINH (INTELLIGENT PROMPT ROUTING)
Một "bẫy chi phí" phổ biến mà nhiều team AI gặp phải khi đưa hệ thống lên production là chiến lược Một Mô Hình Duy Nhất (Single-Model Approach). Việc sử dụng các mô hình lớp trên (như Claude 3.5 Sonnet) cho mọi tác vụ — từ câu hỏi định nghĩa đơn giản đến phân tích kiến trúc phức tạp — đang tạo ra sự lãng phí tài nguyên biên rất lớn.

Để giải quyết bài toán mất cân bằng này, giải pháp Intelligent Prompt Routing trên Amazon Bedrock cung cấp một cách tiếp cận mang tính hệ thống dựa trên việc phân phối tải động theo thời gian thực. Dưới đây là phân tích chi tiết về cơ chế, hiệu quả định lượng và góc nhìn ứng dụng cho các Model Agent.

1. BẢN CHẤT KỸ THUẬT CỦA INTELLIGENT PROMPT ROUTING

Thay vì yêu cầu kỹ sư phải thiết lập cứng (hard-code) hoặc tự xây dựng các mô hình phân loại phụ (classification models) tốn kém để phân bổ prompt, giải pháp này cung cấp một Serverless Endpoint duy nhất làm trung gian.
Khi một truy vấn đầu vào (Incoming Prompt) đi vào hệ thống, Router sẽ chạy một thuật toán dự đoán nội bộ để ước lượng độ phức tạp và hiệu suất mong đợi của từng phân lớp mô hình trong cùng một dòng (Model Family) theo thời gian thực:
Tác vụ phức tạp (High Complexity / Deep Reasoning): Hệ thống định tuyến đến mô hình có năng lực xử lý cao nhất (Claude 3.5 Sonnet hoặc Llama 3.1 70B).
Tác vụ đơn giản (Low Complexity / Operational): Các truy vấn mang tính thủ tục hoặc tra cứu thông tin (Lookup) được chuyển hướng tới mô hình nhỏ hơn (Claude 3 Haiku hoặc Llama 3.1 8B).

2. PHÂN TÍCH ĐỊNH LƯỢNG VÀ HIỆU QUẢ KINH TẾ
Dựa trên các thực nghiệm thực tế được ghi nhận bởi AWS Community Builder cho một truy vấn đơn giản (ước tính khoảng 15 input tokens và 300 output tokens), hiệu quả tối ưu hóa được thể hiện rất rõ ràng:
Về chi phí và độ trễ trên mỗi truy vấn đơn lẻ:
Claude 3 Haiku: Tổng chi phí $0.000379 / query | Độ trễ trung bình ~3.7 giây.
Claude 3.5 Sonnet: Tổng chi phí $0.0066 / query | Độ trễ trung bình ~9.4 giây.
Hiệu quả: Giảm 94.26% chi phí và tốc độ phản hồi nhanh hơn ~2.5 lần đối với tác vụ đơn giản.
Khi tịnh tiến lên quy mô vận hành công nghiệp (Production Scale) với 1 triệu truy vấn đơn giản:
Chi phí nếu dùng thuần Sonnet: ~$6,600.00
Chi phí nếu dùng thuần Haiku: ~$378.75
Ngân sách tiết kiệm tối đa: $6,221.25 (Tương đương giảm 17.4 lần chi phí biên).
Case study thực tế: Báo cáo từ DoiT cho thấy khi kết hợp chiến lược định tuyến mô hình linh hoạt cùng các giải pháp tối ưu hạ tầng khác, một hệ thống doanh nghiệp lớn đã giảm thành công hóa đơn vận hành Bedrock từ $40,000/tháng xuống còn $18,000/tháng.

3. ỨNG DỤNG NÂNG CAO: TỐI ƯU HÓA CHO CẤU TRÚC MODEL AGENT
Đối với các hệ thống chạy theo kiến trúc Model Agent (Hệ tác nhân AI), cơ chế định tuyến này giải quyết được bài toán thắt nút cổ chai về cả chi phí lẫn thời gian phản hồi qua các vòng lặp tư duy (Reasoning loops):
Phân cấp tác vụ trong Agent Workflow: Các Agent thường trải qua nhiều bước lặp như Lập kế hoạch (Planning), Gọi công cụ (Tool calling), Trích xuất thực thể (Data Extraction), và Đánh giá (Reflection). Router giúp các bước trung gian mang tính thủ tục chạy trên Haiku để lấy tốc độ và chi phí thấp, chỉ kích hoạt Sonnet khi cần xử lý logic nặng hoặc giải quyết ngoại lệ (Exception handling).
Giảm chi phí tích lũy bộ nhớ (Memory Accumulation): Agent bắt buộc phải duy trì lịch sử hội thoại (Context window) lớn qua từng bước lặp. Khi kết hợp cơ chế Prompt Routing với Prompt Caching (giảm tới 90% chi phí cho các token lặp lại), hệ thống Agent sẽ đạt được trạng thái tối ưu hóa kép (Double Win).

4. CÁC HẠN CHẾ HỆ THỐNG CẦN LƯU Ý
Mặc dù mang lại hiệu quả kinh tế cao, kiến trúc này vẫn tồn tại những rào cản kỹ thuật ở giai đoạn hiện tại:
Giới hạn ngôn ngữ: Thuật toán phân tích độ phức tạp của Router hiện tại được huấn luyện tối ưu nhất trên tập dữ liệu tiếng Anh. Khi áp dụng cho các ngôn ngữ khác như tiếng Việt, độ chính xác của việc định tuyến có thể bị ảnh hưởng.
Tính đóng gói của Router: Hệ thống phân phối dựa trên thuật toán tổng quát của AWS, không thể tự động tinh chỉnh hoặc học lại dựa trên dữ liệu hiệu năng (performance data) đặc thù riêng biệt của từng ứng dụng.

KẾT LUẬN
Cơ chế Định tuyến Prompt Thông minh dịch chuyển tư duy thiết kế hệ thống AI từ việc tìm kiếm một mô hình vạn năng sang tư duy phối hợp các phân lớp mô hình một cách linh hoạt.
Điểm cộng lớn của giải pháp này là "zero integration overhead" — kỹ sư không cần viết thêm pipeline hay logic phân loại phức tạp nào trong code, chỉ cần thay đổi mã định danh mô hình (modelId) từ mã ARN của một model cụ thể sang mã ARN của Prompt Router là hệ thống có thể tự động vận hành mượt mà.
Chi tiết bài phân tích thực nghiệm và số liệu gốc của tác giả Gerardo Arroyo (AWS Community Builder):
https://towardsaws.com/stop-paying-for-every-token-amazon-bedrock-intelligent-prompt-routing-f01d81a7e18f

---

## Bài Viết 2: TỐI ƯU HÓA CHI PHÍ VẬN HÀNH BACKEND QUA KIẾN TRÚC SERVERLESS VỚI AWS LAMBDA

1. BÀI TOÁN CHI PHÍ CỦA KIẾN TRÚC TRUYỀN THỐNG
Một sai lầm phổ biến khi triển khai ứng dụng backend là duy trì các máy chủ EC2 hoạt động 24/7 bất kể lưu lượng thực tế.
Trong nhiều hệ thống nội bộ hoặc startup giai đoạn đầu, CPU thường chỉ sử dụng dưới 10-20% nhưng doanh nghiệp vẫn phải trả tiền cho toàn bộ tài nguyên đã cấp phát.
Điều này tạo ra hiện tượng:
Trả tiền cho thời gian nhàn rỗi (Idle Cost)
Tốn công quản trị máy chủ
Khó mở rộng khi lượng truy cập tăng đột biến
Chi phí vận hành tăng theo số lượng server
AWS Lambda được thiết kế để giải quyết chính xác bài toán này bằng mô hình Serverless Compute: chỉ chạy code khi có yêu cầu và tự động scale theo lưu lượng thực tế.

2. BẢN CHẤT KỸ THUẬT CỦA AWS LAMBDA
AWS Lambda là dịch vụ Function-as-a-Service (FaaS).
Thay vì quản lý server, kỹ sư chỉ cần upload code.
Khi có sự kiện phát sinh:
HTTP Request từ API Gateway
Upload file lên S3
Tin nhắn từ SQS
Event từ EventBridge
Thay đổi dữ liệu DynamoDB
Lambda sẽ tự động khởi tạo môi trường thực thi, chạy code và giải phóng tài nguyên sau khi hoàn thành.

3. PHÂN TÍCH HIỆU QUẢ KINH TẾ
Mô hình EC2 truyền thống
Ví dụ:
1 EC2 t3.medium chạy 24/7
Backend có 500 người dùng/ngày
Chi phí:
Trả tiền cả tháng
Dù có request hay không
Mô hình Lambda
Lambda chỉ tính phí:
Số lần gọi hàm (Invocations)
Thời gian thực thi (Duration)
Không có request:
Chi phí gần như bằng 0
AWS xác nhận Lambda tự động scale từ 0 request lên hàng nghìn request mỗi giây mà không cần quản trị hạ tầng.

4. ỨNG DỤNG THỰC TẾ CHO AI AGENT VÀ CHATBOT
Đây là phần rất hợp với đồ án AI hiện nay.
Thay vì:
EC2
└── FastAPI
└── AI Chatbot
Có thể chuyển sang:
API Gateway
│
▼
Lambda
│
▼
Amazon Bedrock
Lợi ích:
Không cần bật server liên tục
Tự động scale khi nhiều người dùng chat
Chỉ trả tiền khi chatbot được sử dụng
Giảm đáng kể chi phí cho các dự án sinh viên hoặc startup
Lambda hiện còn hỗ trợ tích hợp trực tiếp với các workflow AI thông qua MCP và Bedrock.

5. KẾT HỢP EVENT-DRIVEN ARCHITECTURE
Một ưu điểm lớn khác là khả năng xây dựng hệ thống hướng sự kiện.
Ví dụ website bán hàng:
Khách đặt hàng
│
▼
DynamoDB
│
▼
EventBridge
│
┌────┴────┐
▼ ▼
Lambda Lambda
Gửi mail Cập nhật kho
Mỗi Lambda chỉ thực hiện một nhiệm vụ nhỏ.
AWS khuyến nghị chia nhỏ Lambda theo từng chức năng thay vì xây dựng "Lambda Monolith" để tăng khả năng mở rộng và giảm chi phí bảo trì.

6. NHỮNG HẠN CHẾ CẦN LƯU Ý
Cold Start
Khi Lambda không được sử dụng trong một khoảng thời gian, lần gọi tiếp theo có thể phát sinh độ trễ khởi động.
Đây là vấn đề phổ biến trong kiến trúc serverless.
Khó Debug Hơn Monolith
Một hệ thống có:
20 Lambda
10 Queue
5 Event Source
sẽ phức tạp hơn đáng kể so với một backend đơn khối.
Không Phù Hợp Với Workload Chạy Liên Tục
Các tác vụ:
Streaming thời gian thực
Video Processing kéo dài
Hệ thống giao dịch siêu thấp độ trễ
thường không phải ứng viên tốt nhất cho Lambda.

---

## Bài Viết 3: AWS Security

**Tiêu đề**: "Bảo Mật Ứng Dụng AWS: IAM và Least Privilege"

**Xuất bản**: AWS Study Group (Tháng 7/2026)

**Chủ Đề**:
- Nguyên tắc Least Privilege
- IAM roles vs policies
- Cách tránh lỗi bảo mật
- Mã hóa tĩnh và chuyển động
- CloudTrail kiểm toán

---



**✅ 3 bài blog hoàn thành**