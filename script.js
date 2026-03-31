// โหลด layout ก่อน
fetch("layout.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("app").innerHTML = data;

    setupEvents(); 
    loadPage("EP1_2.html", "EP1+EP2");
  });


// โหลด content
function loadPage(page, title) {
  fetch(page)
    .then(res => res.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;

      // เปลี่ยนชื่อ EP
      if (title) {
        document.getElementById("ep-title").innerText = title;
      }

      // ปิดเมนูหลังจากเลือกหน้าใหม่
      const menu = document.getElementById("side-menu");
      if (menu) menu.classList.remove("active");

      setupReadMore();
      setupImageClick(); // เปิดระบบกดที่รูป
    });
}

// เมนู hamburger
function setupEvents() {
  const btn = document.getElementById("hamburger-btn");
  const menu = document.getElementById("side-menu");
  const close = document.getElementById("close-menu");

  if (btn) btn.onclick = () => menu.classList.add("active");
  if (close) close.onclick = () => menu.classList.remove("active");
}

// ระบบกดดูรูปภาพขยายใหญ่
function setupImageClick() {
  const images = document.querySelectorAll(".gifted-img");
  images.forEach(img => {
    img.style.cursor = "pointer"; // ทำให้เมาส์เป็นนิ้วมือเวลาชี้
    img.onclick = () => {
      // เอา alt ของรูปภาพมาเป็นชื่อเรื่อง ถ้าไม่มีให้ใช้คำว่า ภาพขยาย
      document.getElementById("modal-title").innerText = img.alt || "GIFTED Students";
      // เอารูปมาใส่ใน content ด้วยแท็ก HTML 
      document.getElementById("modal-body").innerHTML = `<img src="${img.src}" style="width: 100%; border-radius: 10px; display: block; height: auto;" />`;
      
      document.getElementById("news-modal").classList.add("active");
    };
  });
}

// modal อ่านเพิ่มเติม
function setupReadMore() {
  const buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach(btn => {
    btn.onclick = () => {
      document.getElementById("modal-title").innerText = btn.dataset.title;
      // อ่านเพิ่มเติมปกติจะใช้ innerText เป็นข้อความ ไม่ใช่ innerHTML
      document.getElementById("modal-body").innerHTML = `<p style="white-space: pre-wrap;">${btn.dataset.content}</p>`;

      document.getElementById("news-modal").classList.add("active");
    };
  });
}

// ปิด modal
document.addEventListener("click", function(e) {
  if (e.target.closest("#close-modal")) {
    document.getElementById("news-modal").classList.remove("active");
  }
});
