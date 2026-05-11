// Load Navbar on every page
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // 🔥 IMPORTANT: navbar load hone ke baad menu start karo
    if (typeof initMenu === "function") {
      initMenu();
    }
  });
