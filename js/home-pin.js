const pins = document.querySelectorAll(".pin");
const infoBox = document.querySelector(".info-box");
const title = document.getElementById("info-title");
const desc = document.getElementById("info-desc");
const link = document.getElementById("info-link");

pins.forEach(pin => {
  pin.addEventListener("click", () => {
    link.href = pin.dataset.map || "#";
  });
});


pins.forEach(pin => {
  pin.addEventListener("click", () => {

    // remove active from all pins
    pins.forEach(p => p.classList.remove("active"));

    // keep clicked pin popped
    pin.classList.add("active");

    const newTitle = pin.dataset.title;
    const newDesc = pin.dataset.desc;

    infoBox.classList.add("hide");

    setTimeout(() => {
      title.innerText = newTitle;
      desc.innerText = newDesc;
      infoBox.classList.remove("hide");
    }, 300);
  });
});
