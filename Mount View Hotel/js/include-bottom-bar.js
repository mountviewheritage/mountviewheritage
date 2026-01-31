// Load Mobile Bottom Bar on every page
fetch("bottom-bar.html")
  .then(res => res.text())
  .then(data => {
    const container = document.getElementById("bottom-bar");
    if (container) {
      container.innerHTML = data;
    }
  });
