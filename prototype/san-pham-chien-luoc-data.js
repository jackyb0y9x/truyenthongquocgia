/**
 * Dữ liệu 30 Sản phẩm công nghệ chiến lược Quốc gia
 * Phân thành 2 nhóm:
 * - Nhóm 1: 22 sản phẩm đã có thị trường, tạo tác động lớn và trực tiếp đến kinh tế
 * - Nhóm 2: 8 sản phẩm tạo động lực tăng trưởng mới, nền tảng tương lai, tự chủ an ninh quốc phòng
 */

const STRATEGIC_PRODUCTS = [
  // --- NHÓM 1: 1 đến 22 ---
  {
    id: 1,
    group: 1,
    title: "Mô hình ngôn ngữ lớn tiếng Việt, trợ lý ảo và trí tuệ nhân tạo (AI) chuyên ngành.",
    description: "Nghiên cứu, làm chủ các mô hình ngôn ngữ lớn thuần Việt (LLM), phát triển hệ sinh thái trợ lý ảo phục vụ công chức và AI chuyên ngành y tế, giáo dục, tài chính.",
    products: [
      {
        code: "SP-CL-01-A",
        name: "Mô hình Ngôn ngữ lớn PhởGPT Enterprise 70B",
        enterprise: "Viện Công nghệ Quốc gia & VNPT AI",
        summary: "Mô hình AI tạo sinh thuần Việt 70 tỷ tham số, tối ưu hóa xử lý văn bản quy phạm pháp luật và nghiệp vụ hành chính công.",
        status: "commercial",
        statusText: "Đã thương mại hóa",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80"
      },
      {
        code: "SP-CL-01-B",
        name: "Trợ lý ảo Công chức số GovAssistant",
        enterprise: "Trung tâm ĐMST Quốc gia & Viettel AI",
        summary: "Trợ lý ảo AI hỗ trợ cán bộ công chức tra cứu thủ tục, dự thảo văn bản và trả lời kiến nghị người dân tự động 24/7.",
        status: "commercial",
        statusText: "Đã vận hành toàn quốc",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
      },
      {
        code: "SP-CL-01-C",
        name: "Hệ thống AI chẩn đoán hình ảnh y tế VinDr",
        enterprise: "Viện Nghiên cứu Dữ liệu lớn (VinBigData)",
        summary: "Giải pháp trí tuệ nhân tạo hỗ trợ bác sĩ chẩn đoán hình ảnh X-quang, CT, MRI với độ chính xác trên 90%.",
        status: "commercial",
        statusText: "Đạt chuẩn Bộ Y tế",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 2,
    group: 1,
    title: "AI camera xử lý tại biên.",
    description: "Dòng sản phẩm camera thông minh tích hợp vi xử lý AI cục bộ (Edge Computing), nhận diện khuôn mặt, phân tích lưu lượng giao thông không phụ thuộc đường truyền máy chủ.",
    products: [
      {
        code: "SP-CL-02-A",
        name: "Camera AI Giao thông thông minh BK-EdgeCam",
        enterprise: "Tập đoàn Công nghệ CMC & ĐH Bách Khoa",
        summary: "Camera giao thông AI phân tích biển số, phát hiện vi phạm làn đường thời gian thực ngay tại cột đèn tín hiệu.",
        status: "commercial",
        statusText: "Đã thương mại hóa",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80"
      },
      {
        code: "SP-CL-02-B",
        name: "Hộp xử lý AI tại biên AI Edge Box VNPT",
        enterprise: "Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT)",
        summary: "Thiết bị tích hợp mô-đun AI NPU biến camera thông thường thành camera thông minh bảo vệ an ninh trật tự.",
        status: "commercial",
        statusText: "Đã thương mại hóa",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 3,
    group: 1,
    title: "Nền tảng bản sao số.",
    description: "Giải pháp mô phỏng số hóa 3D thời gian thực (Digital Twin) cho các công trình hạ tầng, nhà máy thông minh và quy hoạch đô thị số.",
    products: [
      {
        code: "SP-CL-03-A",
        name: "Bản sao số Đô thị thông minh TP. Hồ Chí Minh",
        enterprise: "Sở TT&TT TP.HCM & Viettel Solutions",
        summary: "Mô hình 3D GIS số hóa toàn bộ hệ thống thoát nước, giao thông và công trình ngầm phục vụ quản trị rủi ro ngập lụt.",
        status: "commercial",
        statusText: "Đang vận hành thử nghiệm",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
      },
      {
        code: "SP-CL-03-B",
        name: "Digital Twin Nhà máy sản xuất ô tô VinFast",
        enterprise: "Tổ hợp Sản xuất VinFast Hải Phòng",
        summary: "Mô phỏng toàn bộ dây chuyền dập, hàn, sơn và lắp ráp xe điện nhằm tối ưu hóa 28% năng suất vận hành.",
        status: "commercial",
        statusText: "Đã ứng dụng thực tế",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 4,
    group: 1,
    title: "Nền tảng điện toán đám mây.",
    description: "Hạ tầng đám mây chủ quyền (Sovereign Cloud) đáp ứng tiêu chuẩn an toàn cấp độ 4, bảo vệ chủ quyền dữ liệu số quốc gia.",
    products: [
      {
        code: "SP-CL-04-A",
        name: "Viettel Cloud Sovereign Platform",
        enterprise: "Tổng Công ty Giải pháp Doanh nghiệp Viettel",
        summary: "Hạ tầng đám mây hơn 17.000 máy chủ với 13 trung tâm dữ liệu đạt chuẩn Rated 3 TIA-942 quốc tế.",
        status: "commercial",
        statusText: "Đạt chuẩn Cấp độ 4",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
      },
      {
        code: "SP-CL-04-B",
        name: "FPT Smart Cloud for Enterprise",
        enterprise: "Công ty Cổ phần FPT",
        summary: "Nền tảng Cloud AI thế hệ mới với hơn 80 dịch vụ điện toán phục vụ 3.000 doanh nghiệp trong và ngoài nước.",
        status: "commercial",
        statusText: "Đã thương mại hóa",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 5,
    group: 1,
    title: "Hạ tầng mạng chuỗi khối và hệ thống truy xuất nguồn gốc.",
    description: "Nền tảng Blockchain quốc gia phục vụ truy xuất nguồn gốc nông sản xuất khẩu, xác thực văn bằng điện tử và logistics minh bạch.",
    products: [
      {
        code: "SP-CL-05-A",
        name: "Nền tảng Blockchain Quốc gia V-Chain",
        enterprise: "Hiệp hội Blockchain Việt Nam & Cục Chuyển đổi số",
        summary: "Mạng lưới chuỗi khối mở liên thông các bộ ngành phục vụ định danh tài sản số và cấp phát chứng thư số.",
        status: "commercial",
        statusText: "Đã triển khai thí điểm",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80"
      },
      {
        code: "SP-CL-05-B",
        name: "Hệ thống Truy xuất nguồn gốc Nông sản AgriTrace",
        enterprise: "Vietnam Post & Trung tâm Mã số Mã vạch Quốc gia",
        summary: "Truy xuất hành trình từ trang trại đến bàn ăn cho hơn 500 nông sản OCOP xuất khẩu sang thị trường EU và Mỹ.",
        status: "commercial",
        statusText: "Đã thương mại hóa",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 6,
    group: 1,
    title: "Thiết bị và hệ thống mạng di động 5G/5G-Advanced.",
    description: "Thiết bị thu phát trạm gốc 5G gNodeB, hệ thống truyền dẫn quang và mạng lõi 5G làm chủ bởi doanh nghiệp Make in Viet Nam.",
    products: [
      {
        code: "SP-CL-06-A",
        name: "Trạm thu phát sóng 5G gNodeB 8T8R & 32T32R",
        enterprise: "Tổng Công ty Công nghiệp Công nghệ cao Viettel (VHT)",
        summary: "Trạm gốc 5G Make in Viet Nam thương mại hóa tại thị trường trong nước và xuất khẩu sang Ấn Độ, Philippines.",
        status: "commercial",
        statusText: "Xuất khẩu quốc tế",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
      },
      {
        code: "SP-CL-06-B",
        name: "Mạng lõi 5G Core Network nội địa VNPT",
        enterprise: "Tập đoàn VNPT",
        summary: "Hệ thống mạng lõi 5G độc lập Standalone (SA) đạt tiêu chuẩn 3GPP Release 17 phục vụ chuyển đổi mạng quốc gia.",
        status: "commercial",
        statusText: "Đạt chuẩn 3GPP",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 7,
    group: 1,
    title: "Robot di động tự hành và robot công nghiệp.",
    description: "Robot vận chuyển kho thông minh (AGV/AMR), cánh tay robot tự động hóa dây chuyền lắp ráp và robot dịch vụ chuyên dụng.",
    products: [
      {
        code: "SP-CL-07-A",
        name: "Robot kho tự hành AGV tải trọng 1.5 tấn",
        enterprise: "Công ty Cổ phần Công nghệ Robot Viễn Đông",
        summary: "Robot di chuyển tự động ứng dụng điều hướng LiDAR phục vụ kho hàng thông minh của các nhà máy điện tử.",
        status: "commercial",
        statusText: "Đã thương mại hóa",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
      },
      {
        code: "SP-CL-07-B",
        name: "Cánh tay robot hàn tự động 6 bậc tự do Cobot",
        enterprise: "Viện Nghiên cứu Cơ khí (Bộ Công Thương)",
        summary: "Robot cộng tác công nghiệp ứng dụng hàn chính xác vỏ container và kết cấu thép công trình.",
        status: "commercial",
        statusText: "Đạt chuẩn kiểm định",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 8,
    group: 1,
    title: "Nền tảng, giải pháp và mô hình phục vụ sản xuất thông minh.",
    description: "Hệ điều hành sản xuất MES, giải pháp bảo trì dự đoán cho máy móc và hệ thống giám sát năng lượng nhà máy số.",
    products: [
      {
        code: "SP-CL-08-A",
        name: "Hệ thống Điều hành Sản xuất Thông minh MES-X",
        enterprise: "VTI Group & Bộ KH&CN",
        summary: "Số hóa quy trình lệnh sản xuất, theo dõi OEE và quản lý chất lượng theo thời gian thực cho hơn 200 nhà máy.",
        status: "commercial",
        statusText: "Đã thương mại hóa",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 9,
    group: 1,
    title: "Giải pháp bảo mật và an ninh mạng cho hạ tầng quan trọng và cơ sở dữ liệu quốc gia.",
    description: "Trung tâm điều hành an toàn thông tin SOC, giải pháp phát hiện ngăn chặn xâm nhập APT và tường lửa cấp nhà nước.",
    products: [
      {
        code: "SP-CL-09-A",
        name: "Hệ sinh thái An ninh mạng Cấp độ 5 Viettel Cyber Security",
        enterprise: "Công ty An ninh mạng Viettel",
        summary: "Bảo vệ các hệ thống trọng yếu quốc gia, cơ sở dữ liệu dân cư và hệ thống ngân hàng chống tấn công chuỗi cung ứng.",
        status: "commercial",
        statusText: "Vận hành Cấp độ Quốc gia",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 10,
    group: 1,
    title: "Vắc xin thế hệ mới dùng cho người.",
    description: "Nghiên cứu và sản xuất vắc xin công nghệ mRNA, vắc xin tái tổ hợp và vắc xin liên hợp đạt chuẩn WHO-GMP.",
    products: [
      {
        code: "SP-CL-10-A",
        name: "Vắc xin Tái tổ hợp phòng bệnh do virus Dengue",
        enterprise: "Viện Vắc xin và Sinh phẩm Y tế (IVAC)",
        summary: "Vắc xin thế hệ mới phòng ngừa sốt xuất huyết 4 tuýp đang hoàn thiện thử nghiệm lâm sàng giai đoạn 3.",
        status: "pilot",
        statusText: "Thử nghiệm lâm sàng pha 3",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 11,
    group: 1,
    title: "Liệu pháp tế bào (tế bào gốc, tế bào miễn dịch) dùng cho người.",
    description: "Ứng dụng công nghệ tế bào gốc trung mô và tế bào miễn dịch CAR-T trong điều trị thoái hóa và ung thư huyết học.",
    products: [
      {
        code: "SP-CL-11-A",
        name: "Liệu pháp Tế bào gốc Trung mô điều trị thoái hóa khớp",
        enterprise: "Bệnh viện Đa khoa Quốc tế Vinmec",
        summary: "Công nghệ nuôi cấy và ghép tế bào gốc trung mô tự thân phục hồi sụn khớp không cần phẫu thuật thay khớp nhân tạo.",
        status: "commercial",
        statusText: "Bộ Y tế cấp phép lưu hành",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 12,
    group: 1,
    title: "Hệ thống sản xuất sản phẩm y tế cá thể hóa ứng dụng công nghệ in 3D.",
    description: "In 3D hợp kim titan và polyme sinh học chế tạo mảnh ghép xương sọ, khớp háng và dụng cụ trợ cụ y khoa riêng biệt.",
    products: [
      {
        code: "SP-CL-12-A",
        name: "Khớp nhân tạo in 3D Titanium cá thể hóa",
        enterprise: "Đại học Bách Khoa Hà Nội & Viện Chấn thương Chỉnh hình",
        summary: "Thiết kế và in 3D xương hàm và khớp háng theo ảnh chụp CT chính xác từng milimet cho từng bệnh nhân.",
        status: "commercial",
        statusText: "Đã ứng dụng lâm sàng",
        image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 13,
    group: 1,
    title: "Hệ thống cảm biến sinh học thông minh.",
    description: "Cảm biến điện hóa và quang học phát hiện nhanh độc tố thực phẩm, dư lượng thuốc BVTV và mầm bệnh nguy hiểm tại chỗ.",
    products: [
      {
        code: "SP-CL-13-A",
        name: "Cảm biến Sinh học quang học BioSensor phát hiện vi khuẩn",
        enterprise: "Viện Hàn lâm Khoa học và Công nghệ Việt Nam",
        summary: "Thiết bị cầm tay phát hiện vi khuẩn E.coli và Salmonella trong nước và thực phẩm trong vòng 15 phút.",
        status: "commercial",
        statusText: "Đã thương mại hóa",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 14,
    group: 1,
    title: "Vắc xin và chế phẩm sinh học thế hệ mới dùng trong chăn nuôi, thú y, thủy sản, trồng trọt và bảo vệ thực vật.",
    description: "Vắc xin tả lợn châu Phi, chế phẩm thảo dược kháng khuẩn thay thế kháng sinh trong nuôi tôm cá và thuốc trừ sâu sinh học.",
    products: [
      {
        code: "SP-CL-14-A",
        name: "Vắc xin Nhược độc Dịch tả lợn Châu Phi AVAC ASF LIVE",
        enterprise: "Công ty Cổ phần AVAC Việt Nam",
        summary: "Vắc xin thương mại đầu tiên trên thế giới phòng chống dịch tả lợn châu Phi xuất khẩu sang 5 quốc gia Đông Nam Á.",
        status: "commercial",
        statusText: "Thương mại quốc tế",
        image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 15,
    group: 1,
    title: "Hệ thống sản xuất, thu hoạch và chế biến sâu sản phẩm, phụ phẩm nông nghiệp và sinh khối.",
    description: "Dây chuyền sấy thăng hoa chân không, công nghệ ép viên sinh khối xuất khẩu và chiết xuất hợp chất thứ cấp giá trị cao.",
    products: [
      {
        code: "SP-CL-15-A",
        name: "Dây chuyền Sấy thăng hoa nông sản quy mô công nghiệp",
        enterprise: "Tập đoàn VinEco & Đại học Nông Lâm",
        summary: "Giữ nguyên 98% hàm lượng dinh dưỡng và màu sắc của sầu riêng, thanh long xuất khẩu thị trường cao cấp.",
        status: "commercial",
        statusText: "Đã thương mại hóa",
        image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 16,
    group: 1,
    title: "Giống cây trồng, vật nuôi, thủy sản thế hệ mới được tạo ra từ công nghệ tế bào, chỉnh sửa gen và công nghệ sinh học.",
    description: "Tạo giống lúa chịu mặn ngập úng phục vụ thích ứng biến đổi khí hậu ĐBSCL, giống tôm sú bố mẹ sạch bệnh gia hóa trong nước.",
    products: [
      {
        code: "SP-CL-16-A",
        name: "Giống Lúa chịu mặn hạn đột phá ST28",
        enterprise: "Viện Lúa Đồng bằng Sông Cửu Long",
        summary: "Giống lúa chất lượng gạo thượng hạng kháng rầy nâu và chịu mặn đến 6 phần nghìn, thích ứng hạn mặn ven biển.",
        status: "commercial",
        statusText: "Phổ biến rộng rãi",
        image: "https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 17,
    group: 1,
    title: "Vật liệu tiên tiến và vật liệu chức năng hiệu năng cao cho công nghiệp chế biến, chế tạo.",
    description: "Hợp kim nhôm siêu nhẹ cường độ cao, vật liệu composite sợi carbon và màng phủ nano chống ăn mòn môi trường biển đảo.",
    products: [
      {
        code: "SP-CL-17-A",
        name: "Hợp kim Nhôm cấu trúc Nano dùng trong vỏ xe ô tô điện",
        enterprise: "Tập đoàn Hòa Phát & Viện Luyện kim Quốc gia",
        summary: "Giảm 35% trọng lượng khung vỏ xe so với thép truyền thống, nâng cao phạm vi hành trình của pin xe điện.",
        status: "commercial",
        statusText: "Đã thương mại hóa",
        image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 18,
    group: 1,
    title: "Pin, ắc quy tiên tiến và hệ thống tích trữ năng lượng tích hợp (BESS).",
    description: "Pack pin Lithium-LFP cho trạm năng lượng tái tạo, pin thể rắn và hệ thống tích điện thông minh nối lưới quốc gia.",
    products: [
      {
        code: "SP-CL-18-A",
        name: "Hệ thống Tích trữ Năng lượng Nối lưới BESS 50MWh",
        enterprise: "Công ty Cổ phần Giải pháp Năng lượng VinES",
        summary: "Lưu trữ điện mặt trời và điện gió ban ngày để phát bù giờ cao điểm ban đêm, ổn định lưới điện miền Trung.",
        status: "commercial",
        statusText: "Vận hành lưới điện EVN",
        image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 19,
    group: 1,
    title: "Hệ thống sản xuất, lưu trữ, vận chuyển và phân phối hydrogen xanh, nhiên liệu sinh học.",
    description: "Thiết bị điện phân kiềm sản xuất Hydro xanh từ năng lượng tái tạo, bồn chứa composite áp suất 700 bar và trạm cấp nhiên liệu.",
    products: [
      {
        code: "SP-CL-19-A",
        name: "Tổ hợp Điện phân Nước sản xuất Hydrogen Xanh Trà Vinh",
        enterprise: "Tập đoàn Dầu khí Việt Nam (Petrovietnam)",
        summary: "Dự án sản xuất Hydro xanh quy mô 24.000 tấn/năm phục vụ khử cacbon ngành luyện thép và phân bón.",
        status: "pilot",
        statusText: "Đang thi công xây dựng",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 20,
    group: 1,
    title: "Thiết bị điện cao áp, siêu cao áp; máy điện, động cơ điện và hệ thống truyền tải - truyền động điện hiện đại, hiệu suất cao.",
    description: "Máy biến áp 500kV, thiết bị chuyển mạch đóng cắt cao thế GIS và động cơ điện nam châm vĩnh cửu hiệu suất cao IE4/IE5.",
    products: [
      {
        code: "SP-CL-20-A",
        name: "Máy biến áp Siêu cao áp 500kV - 900MVA Make in Viet Nam",
        enterprise: "Tổng Công ty Thiết bị Điện Đông Anh (EEMC)",
        summary: "Làm chủ thiết kế và chế tạo máy biến áp 500kV đầu tiên tại Đông Nam Á, phục vụ đường dây truyền tải điện 500kV mạch 3.",
        status: "commercial",
        statusText: "Vận hành lưới điện 500kV",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 21,
    group: 1,
    title: "Hệ thống thu giữ, sử dụng và lưu trữ carbon.",
    description: "Công nghệ hấp thụ CO2 từ khói lò nhiệt điện, chuyển hóa CO2 thành vật liệu nano canxi cacbonat và lưu giữ vĩnh viễn.",
    products: [
      {
        code: "SP-CL-21-A",
        name: "Hệ thống Hấp thụ và Hóa lỏng CO2 nhà máy xi măng",
        enterprise: "Tổng Công ty Xi măng Việt Nam (VICEM) & Viện KHCN",
        summary: "Thu gom 100.000 tấn CO2 mỗi năm từ dây chuyền nung clinker, phục vụ tái sử dụng trong công nghiệp giải khát và hóa chất.",
        status: "pilot",
        statusText: "Thử nghiệm công nghiệp",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 22,
    group: 1,
    title: "Thiết bị, phương tiện bay không người lái (UAV); hệ thống quản lý, phát hiện, giám sát và chế áp UAV.",
    description: "Thiết bị bay tầm trung viễn thám, máy bay không người lái nông nghiệp phun thuốc tự động và tổ hợp radar chế áp điện tử.",
    products: [
      {
        code: "SP-CL-22-A",
        name: "Phương tiện bay không người lái viễn thám UAV-VT05",
        enterprise: "Tổng Công ty Công nghiệp Công nghệ cao Viettel",
        summary: "UAV tầm trung thời gian bay liên tục 12 giờ, phạm vi hoạt động 200km phục vụ tuần tra biên giới và cứu nạn thiên tai.",
        status: "commercial",
        statusText: "Đạt chuẩn an ninh quốc phòng",
        image: "drone-satellite.png"
      },
      {
        code: "SP-CL-22-B",
        name: "Hệ thống Radar và Thiết bị Chế áp Điện tử DroneJammer",
        enterprise: "Viện Vũ khí (Bộ Quốc phòng)",
        summary: "Phát hiện mục tiêu drone mini từ cự ly 5km và áp chế điện tử vô hiệu hóa đường bay trong 3 giây.",
        status: "commercial",
        statusText: "Sẵn sàng chiến đấu",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },

  // --- NHÓM 2: 23 đến 30 ---
  {
    id: 23,
    group: 2,
    title: "Chip chuyên dụng.",
    description: "Vi mạch thiết kế nội địa ASIC phục vụ xử lý mã hóa bảo mật, vi mạch quản lý nguồn PMIC và chip thu phát sóng 5G/IoT.",
    products: [
      {
        code: "SP-CL-23-A",
        name: "Vi mạch xử lý tín hiệu bảo mật mật mã cứng VN-CryptoChip",
        enterprise: "Ban Cơ yếu Chính phủ & FPT Semiconductor",
        summary: "Chip mật mã học phần cứng chống can thiệp vật lý, bảo vệ thông tin mật nhà nước và thẻ công dân điện tử.",
        status: "pilot",
        statusText: "Chế tạo mẫu thành công",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      },
      {
        code: "SP-CL-23-B",
        name: "Chip IoT nguồn năng lượng cực thấp Make in Viet Nam",
        enterprise: "Trung tâm Nghiên cứu Vi mạch Bách Khoa (ICDREC)",
        summary: "Vi mạch 32-bit tiêu thụ dòng tĩnh dưới 1 microampere cho các đồng hồ nước và cảm biến thông minh ngoài trời.",
        status: "commercial",
        statusText: "Đã thương mại hóa",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 24,
    group: 2,
    title: "Truyền thông lượng tử, tính toán lượng tử và cảm biến lượng tử.",
    description: "Hệ thống phân phối khóa lượng tử QKD cáp quang, bộ mô phỏng lượng tử và cảm biến từ trường lượng tử siêu nhạy.",
    products: [
      {
        code: "SP-CL-24-A",
        name: "Hệ thống Phân phối Khóa Lượng tử QKD 100km",
        enterprise: "Viện Khoa học Vật liệu & Tập đoàn VNPT",
        summary: "Kênh truyền bảo mật tuyệt đối dựa trên nguyên lý bất định lượng tử, ngăn chặn hoàn toàn khả năng nghe lén.",
        status: "pilot",
        statusText: "Đang thử nghiệm phòng lab quốc gia",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 25,
    group: 2,
    title: "Hệ thống khai thác, chế biến sâu và sản phẩm chế biến sâu từ khoáng sản, dầu khí và đất hiếm.",
    description: "Tách chiết oxit đất hiếm Neodymium, Dysprosium độ tinh khiết cao phục vụ chế tạo nam châm vĩnh cửu xe điện và tuabin gió.",
    products: [
      {
        code: "SP-CL-25-A",
        name: "Dây chuyền Tách chiết Oxit Đất hiếm 99.9% Lai Châu",
        enterprise: "Tập đoàn Công nghiệp Than - Khoáng sản Việt Nam (TKV)",
        summary: "Làm chủ công nghệ thủy luyện tách 14 nguyên tố đất hiếm phục vụ chuỗi cung ứng linh kiện điện tử cao cấp toàn cầu.",
        status: "commercial",
        statusText: "Đã đưa vào sản xuất",
        image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 26,
    group: 2,
    title: "Hệ thống, thiết bị, dịch vụ và giải pháp công nghệ thăm dò lòng đất, biển sâu, công trình biển và năng lượng ngoài khơi.",
    description: "Robot lặn ngầm không người lái ROV sâu 2000m, hệ thống địa chấn 3D đáy biển và chân đế trọng lực cho điện gió ngoài khơi.",
    products: [
      {
        code: "SP-CL-26-A",
        name: "Chân đế Giàn khoan Điện gió Ngoài khơi vùng nước sâu",
        enterprise: "Tổng Công ty Cổ phần Dịch vụ Kỹ thuật Dầu khí (PTSC)",
        summary: "Chế tạo và xuất khẩu thành công 33 chân đế điện gió ngoài khơi siêu trường siêu trọng cho thị trường châu Âu và Đài Loan.",
        status: "commercial",
        statusText: "Xuất khẩu quốc tế",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 27,
    group: 2,
    title: "Lò phản ứng hạt nhân mô-đun nhỏ (SMR).",
    description: "Nghiên cứu công nghệ an toàn thụ động, mô phỏng số nhiệt thủy lực và hệ thống kiểm soát an toàn bức xạ lò SMR thế hệ 4.",
    products: [
      {
        code: "SP-CL-27-A",
        name: "Hệ thống Mô phỏng Động học Lò phản ứng SMR 300MW",
        enterprise: "Viện Năng lượng Nguyên tử Việt Nam (VINATOM)",
        summary: "Phần mềm tính toán phân tích an toàn nhiệt thủy lực và suy thoái nhiên liệu hạt nhân phục vụ nghiên cứu năng lượng sạch.",
        status: "pilot",
        statusText: "Nghiên cứu cấp Nhà nước",
        image: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 28,
    group: 2,
    title: "Vệ tinh và chùm vệ tinh quỹ đạo thấp quan sát Trái đất.",
    description: "Vệ tinh viễn thám quang học độ phân giải cao dưới 1 mét, chùm vệ tinh radar khẩu độ tổng hợp SAR chụp xuyên mây ban đêm.",
    products: [
      {
        code: "SP-CL-28-A",
        name: "Vệ tinh Viễn thám Quang học VNREDSat-2",
        enterprise: "Trung tâm Vũ trụ Việt Nam (VNSC)",
        summary: "Vệ tinh viễn thám độ phân giải siêu cao 0.5m cung cấp ảnh vệ tinh phục vụ quốc phòng, quy hoạch đất đai và phòng chống bão lũ.",
        status: "pilot",
        statusText: "Chuẩn bị phóng quỹ đạo",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 29,
    group: 2,
    title: "Công trình xây dựng đường sắt tốc độ cao.",
    description: "Công nghệ kết cấu dầm cầu vượt nhịp lớn chịu tải trọng động 350km/h, kết cấu đường ray không đá dăm và đào hầm khiên đào TBM.",
    products: [
      {
        code: "SP-CL-29-A",
        name: "Hệ thống Bản mặt ray không đá dăm Slab Track Việt",
        enterprise: "Viện Khoa học và Công nghệ Giao thông Vận tải",
        summary: "Thiết kế và thử nghiệm hệ thống tấm bê tông đúc sẵn không đá dăm ổn định đường ray ở tốc độ 350km/h tuổi thọ 60 năm.",
        status: "pilot",
        statusText: "Thử nghiệm tải trọng động",
        image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: 30,
    group: 2,
    title: "Nền tảng công nghiệp, phương tiện, thiết bị và các hệ thống tích hợp đường sắt tốc độ cao, đường sắt đô thị.",
    description: "Hệ thống tín hiệu điều khiển chạy tàu tự động hóa CBTC, toa xe động lực phân tán EMU và hệ thống cấp điện sức kéo trên cao.",
    products: [
      {
        code: "SP-CL-30-A",
        name: "Hệ thống Tín hiệu Điều khiển chạy tàu tự động CBTC",
        enterprise: "Tổng Công ty Đường sắt Việt Nam & Viettel VHT",
        summary: "Làm chủ phần mềm điều độ chạy tàu trung tâm và thiết bị an toàn trên tàu hỏa đô thị đạt chuẩn an toàn quốc tế SIL 4.",
        status: "pilot",
        statusText: "Thử nghiệm tuyến đô thị",
        image: "https://images.unsplash.com/photo-1515165562839-978bbcf18277?auto=format&fit=crop&w=600&q=80"
      }
    ]
  }
];
