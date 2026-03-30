// โหลด layout
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

      setupReadMore(); // โหลดปุ่มอ่านเพิ่มใหม่ทุกครั้ง
    });
}

// เมนู
function setupEvents() {
  const btn = document.getElementById("hamburger-btn");
  const menu = document.getElementById("side-menu");
  const close = document.getElementById("close-menu");

  if (btn) btn.onclick = () => menu.classList.add("active");
  if (close) close.onclick = () => menu.classList.remove("active");
}

// modal
function setupReadMore() {
  const buttons = document.querySelectorAll(".read-more-btn");

  buttons.forEach(btn => {
    btn.onclick = () => {
      document.getElementById("modal-title").innerText = btn.dataset.title;
      document.getElementById("modal-body").innerText = btn.dataset.content;

      document.getElementById("news-modal").classList.add("show");
    };
  });
}

// ปิด modal
document.addEventListener("click", function(e) {
  if (e.target.id === "close-modal") {
    document.getElementById("news-modal").classList.remove("show");
  }
});
