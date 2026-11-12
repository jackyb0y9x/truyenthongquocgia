// Prototype Navigation & Flow Controller
const PROTOTYPE_SCREENS = [
  { id: "trang-chu", name: "1. Trang chủ Cổng Thông Tin", file: "index.html", group: "Cổng chính", badge: "Portal" },
  { id: "chinh-sach", name: "2. Chính sách & Thể chế KH, CN & ĐMST", file: "chinh-sach.html", group: "Chính sách", badge: "Policy" },
  { id: "chinh-sach-tra-cuu", name: "3. Chỉ đạo điều hành - Tra cứu", file: "chinh-sach-tra-cuu.html", group: "Chính sách", badge: "Search" },
  { id: "chinh-sach-chi-tiet", name: "4. VB Chỉ đạo điều hành - Chi tiết toàn văn", file: "chinh-sach-chi-tiet.html", group: "Chính sách", badge: "Detail" },
  { id: "san-pham-cong-nghe", name: "4. Sản phẩm KH&CN trọng điểm (10 Nhóm & 30 SP)", file: "san-pham-cong-nghe.html", group: "Cổng chính", badge: "Products" },
  { id: "san-pham-kc", name: "4.1. Chương trình KC (Kỹ thuật & Công nghệ)", file: "san-pham-kc.html", group: "Sản phẩm KH&CN", badge: "Chương trình KC" },
  { id: "san-pham-kx", name: "4.2. Chương trình KX (KHXH & Luận cứ Chính sách)", file: "san-pham-kx.html", group: "Sản phẩm KH&CN", badge: "Chương trình KX" },
  { id: "su-kien", name: "5. Sự kiện KH, CN & Đổi mới sáng tạo", file: "su-kien.html", group: "Cổng chính", badge: "Events" },
  { id: "hoi-dap", name: "6. Hỏi đáp & Hỗ trợ (FAQ & Form)", file: "hoi-dap.html", group: "Cổng chính", badge: "Support" },
  { id: "multimedia", name: "7. Multimedia & Tin tức nổi bật Hub", file: "multimedia.html", group: "Đa phương tiện", badge: "Media" },
  { id: "multimedia-video", name: "7.1. Chuyên trang Video KH&CN", file: "multimedia-video.html", group: "Đa phương tiện", badge: "Video" },
  { id: "multimedia-photo", name: "7.2. Chuyên trang Phóng sự Ảnh", file: "multimedia-photo.html", group: "Đa phương tiện", badge: "Photos" },
  { id: "multimedia-infographic", name: "7.3. Chuyên trang Infographic", file: "multimedia-infographic.html", group: "Đa phương tiện", badge: "Graphic" },
  { id: "multimedia-books", name: "7.4. Chuyên trang Books & Ấn phẩm", file: "multimedia-books.html", group: "Đa phương tiện", badge: "Books" },
  { id: "multimedia-voice", name: "7.5. Chuyên trang Voice Podcasts", file: "multimedia-voice.html", group: "Đa phương tiện", badge: "Voice" },
  { id: "chuyen-muc-khcn", name: "8. Chuyên mục: Khoa học, Công nghệ", file: "chuyen-muc-khcn.html", group: "Chuyên mục", badge: "Standard Grid" },
  { id: "chuyen-muc-dmst", name: "9. Chuyên mục: Đổi mới sáng tạo", file: "chuyen-muc-dmst.html", group: "Chuyên mục", badge: "Standard Grid" },
  { id: "chuyen-muc-chuyen-doi-so", name: "10. Chuyên mục Chuyển đổi số (Bento Grid)", file: "chuyen-muc-chuyen-doi-so.html", group: "Bố cục đặc thù", badge: "Bento Layout" },
  { id: "chuyen-muc-kinh-te-so", name: "11. Chuyên mục Kinh tế số (Bảng tra cứu)", file: "chuyen-muc-kinh-te-so.html", group: "Bố cục đặc thù", badge: "Data Table" },
  { id: "chuyen-muc-ai", name: "12. Chuyên mục AI & CN số (Dạng Danh sách)", file: "chuyen-muc-ai.html", group: "Bố cục đặc thù", badge: "List Layout" },
  { id: "chuyen-muc-buu-chinh-vien-thong", name: "13. Chuyên mục: Bưu chính - Viễn thông", file: "chuyen-muc-buu-chinh-vien-thong.html", group: "Chuyên mục", badge: "Standard Grid" },
  { id: "chuyen-muc-so-huu-tri-tue", name: "14. Chuyên mục: Sở hữu trí tuệ", file: "chuyen-muc-so-huu-tri-tue.html", group: "Chuyên mục", badge: "Standard Grid" },
  { id: "chuyen-muc-tieu-chuan-do-luong", name: "15. Chuyên mục: Tiêu chuẩn, Đo lường, CL", file: "chuyen-muc-tieu-chuan-do-luong.html", group: "Chuyên mục", badge: "Standard Grid" },
  { id: "chuyen-muc-nang-luong-nguyen-tu", name: "16. Chuyên mục: Năng lượng nguyên tử", file: "chuyen-muc-nang-luong-nguyen-tu.html", group: "Chuyên mục", badge: "Standard Grid" },
  { id: "tai-lieu", name: "17. Kho Tư liệu & Dữ liệu Truyền thông (Hub)", file: "tai-lieu.html", group: "Kho Tư liệu", badge: "Archive Hub" },
  { id: "tai-lieu-video", name: "18. Tư liệu: Video & Phóng sự chuyên đề", file: "tai-lieu-video.html", group: "Kho Tư liệu", badge: "Video" },
  { id: "tai-lieu-hinh-anh", name: "19. Tư liệu: Kho hình ảnh & Lịch sử KHCN", file: "tai-lieu-hinh-anh.html", group: "Kho Tư liệu", badge: "Photos" },
  { id: "tai-lieu-infographic", name: "20. Tư liệu: Infographic & Đồ họa số liệu", file: "tai-lieu-infographic.html", group: "Kho Tư liệu", badge: "Graphic" },
  { id: "tai-lieu-an-pham", name: "21. Tư liệu: Books & Ấn phẩm điện tử", file: "tai-lieu-an-pham.html", group: "Kho Tư liệu", badge: "Books" },
  { id: "tai-lieu-podcast", name: "22. Tư liệu: Voice Podcasts & Audio", file: "tai-lieu-podcast.html", group: "Kho Tư liệu", badge: "Podcasts" },
  { id: "chuong-trinh-dao-tao", name: "23. Sự kiện: Đào tạo & Bồi dưỡng (Đào tạo.png)", file: "chuong-trinh-dao-tao.html", group: "Cổng chính", badge: "Đào tạo" },
  { id: "khoa-hoc-chi-tiet", name: "24. Chi tiết Khóa học & Học liệu số", file: "khoa-hoc-chi-tiet.html", group: "Cổng chính", badge: "Học liệu số" },
  { id: "bo-chi-so-danh-gia-truyen-thong", name: "25. Tra cứu Bộ chỉ số Đo lường Truyền thông NQ 57", file: "bo-chi-so-danh-gia-truyen-thong.html", group: "Bộ tiêu chí & Báo cáo", badge: "Criteria" },
  { id: "bao-cao-danh-gia-truyen-thong", name: "26. Báo cáo Chuyên sâu & Xếp hạng Truyền thông NQ 57", file: "bao-cao-danh-gia-truyen-thong.html", group: "Bộ tiêu chí & Báo cáo", badge: "Report" }
];

document.addEventListener("DOMContentLoaded", () => {
  renderPrototypeToolbar();
});

function renderPrototypeToolbar() {
  // Ẩn BẢN ĐỒ GIAO DIỆN PROTOTYPE theo yêu cầu
  return;
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const currentIndex = PROTOTYPE_SCREENS.findIndex(s => s.file === currentPath);
  const activeScreen = currentIndex >= 0 ? PROTOTYPE_SCREENS[currentIndex] : PROTOTYPE_SCREENS[0];
  const prevIndex = (currentIndex - 1 + PROTOTYPE_SCREENS.length) % PROTOTYPE_SCREENS.length;
  const nextIndex = (currentIndex + 1) % PROTOTYPE_SCREENS.length;

  const container = document.createElement("div");
  container.id = "proto-hud";
  container.className = "fixed bottom-5 right-5 z-[9999] font-sans transition-all duration-300";
  
  container.innerHTML = `
    <!-- Floating Trigger Pill -->
    <div class="flex items-center gap-2 bg-slate-900/95 backdrop-blur-md text-white px-3.5 py-2.5 rounded-full shadow-2xl border border-slate-700/80 text-xs">
      <button id="proto-prev-btn" onclick="window.location.href='${PROTOTYPE_SCREENS[prevIndex].file}'" title="Màn hình trước" class="p-1.5 hover:bg-slate-800 rounded-full transition text-slate-300 hover:text-white">
        <i class="fa-solid fa-chevron-left"></i>
      </button>

      <button id="proto-menu-btn" class="flex items-center gap-2 px-2 py-1 hover:bg-slate-800 rounded-lg transition font-medium">
        <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span class="text-amber-400 font-bold">${currentIndex >= 0 ? currentIndex + 1 : 1}/${PROTOTYPE_SCREENS.length}</span>
        <span class="max-w-[150px] sm:max-w-[200px] truncate">${activeScreen.name.replace(/^\d+\.\s*/, '')}</span>
        <i class="fa-solid fa-list-ul ml-1 text-slate-400 text-[10px]"></i>
      </button>

      <button id="proto-next-btn" onclick="window.location.href='${PROTOTYPE_SCREENS[nextIndex].file}'" title="Màn hình tiếp theo" class="p-1.5 hover:bg-slate-800 rounded-full transition text-slate-300 hover:text-white">
        <i class="fa-solid fa-chevron-right"></i>
      </button>

      <button id="proto-toggle-hud" class="ml-1 p-1 text-slate-400 hover:text-slate-200" title="Đóng/Mở thanh">
        <i class="fa-solid fa-sliders"></i>
      </button>
    </div>

    <!-- Modal / Drawer Selector -->
    <div id="proto-drawer" class="hidden absolute bottom-14 right-0 w-[360px] sm:w-[420px] max-h-[80vh] overflow-y-auto bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl p-4 text-white">
      <div class="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <h4 class="font-bold text-sm text-amber-400 flex items-center gap-2">
            <i class="fa-solid fa-sitemap"></i> BẢN ĐỒ ${PROTOTYPE_SCREENS.length} GIAO DIỆN PROTOTYPE
          </h4>
          <p class="text-[11px] text-slate-400">Nền tảng Truyền thông Quốc Gia - Bộ KH&CN</p>
        </div>
        <button id="proto-close-drawer" class="text-slate-400 hover:text-white text-sm p-1">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="mt-3 space-y-3 text-xs">
        ${renderGroupOptions(currentPath)}
      </div>

      <div class="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-400">
        <span><i class="fa-regular fa-compass text-amber-400"></i> Click bất kỳ trang để chuyển</span>
        <span class="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[10px]">${PROTOTYPE_SCREENS.length}/${PROTOTYPE_SCREENS.length} Connected</span>
      </div>
    </div>
  `;

  document.body.appendChild(container);

  // Event handlers
  const menuBtn = document.getElementById("proto-menu-btn");
  const toggleBtn = document.getElementById("proto-toggle-hud");
  const drawer = document.getElementById("proto-drawer");
  const closeBtn = document.getElementById("proto-close-drawer");

  function toggleDrawer() {
    drawer.classList.toggle("hidden");
  }

  menuBtn.addEventListener("click", toggleDrawer);
  toggleBtn.addEventListener("click", toggleDrawer);
  closeBtn.addEventListener("click", () => drawer.classList.add("hidden"));

  // Click outside to close
  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) {
      drawer.classList.add("hidden");
    }
  });
}

function renderGroupOptions(currentFile) {
  const groups = [...new Set(PROTOTYPE_SCREENS.map(s => s.group))];
  return groups.map(grp => {
    const screens = PROTOTYPE_SCREENS.filter(s => s.group === grp);
    return `
      <div>
        <div class="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> ${grp}
        </div>
        <div class="space-y-1">
          ${screens.map(s => {
            const isActive = s.file === currentFile;
            return `
              <a href="${s.file}" class="flex items-center justify-between p-2 rounded-lg transition ${
                isActive 
                  ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300 font-semibold' 
                  : 'hover:bg-slate-800 text-slate-300 hover:text-white'
              }">
                <div class="flex items-center gap-2 truncate">
                  <span class="text-[11px] opacity-75">${s.name}</span>
                </div>
                <span class="text-[10px] px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                }">${s.badge}</span>
              </a>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}
