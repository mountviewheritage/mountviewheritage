function initMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const menuOverlay = document.getElementById("menuOverlay");

  const menuText = document.querySelector(".menu-text.active");
  const closeText = document.querySelector(".menu-text.close");

  if (!menuBtn || !menuOverlay) return;

  let isOpen = false;

  menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      menuOverlay.classList.add("active");
      menuText.classList.remove("active");
      closeText.classList.add("active");
    } else {
      menuOverlay.classList.remove("active");
      closeText.classList.remove("active");
      menuText.classList.add("active");
    }
  });
}
