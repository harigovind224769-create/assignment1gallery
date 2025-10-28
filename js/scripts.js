// Modal Image Preview
document.addEventListener("DOMContentLoaded", function() {
  function createModal(src, alt) {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100vw";
    modal.style.height = "100vh";
    modal.style.background = "rgba(27,35,60,0.91)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "9999";
    modal.style.animation = "fadeIn 0.35s";
    modal.innerHTML = `
      <img src="${src}" alt="${alt}" style="max-width:90vw; max-height:86vh; border-radius:24px; box-shadow:0 18px 64px #111;">
      <span id="modalClose" style="position:absolute;top:2vw;right:2vw; color:#ffd864; font-size:2.7rem; cursor:pointer;">&times;</span>
    `;
    document.body.appendChild(modal);

    modal.querySelector("#modalClose").onclick = () => modal.remove();
    modal.onclick = (e) => {
      if (e.target === modal) modal.remove();
    };
  }

  // Enable modal preview on all art images & gallery cards
  const images = document.querySelectorAll(".art-detail img, .gallery .art-card img");
  images.forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => createModal(img.src, img.alt));
  });

  // Add fade-in animation style dynamically
  if (!document.getElementById("fadeInStyle")) {
    const style = document.createElement("style");
    style.id = "fadeInStyle";
    style.textContent = `
      @keyframes fadeIn {
        0% { opacity: 0; transform: scale(0.97); }
        100% { opacity: 1; transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
  }
});
