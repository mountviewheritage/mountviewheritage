let sliderIndex = 0;

const sliderData = [
    {
        title: "Entire Property",
        desc: "Make Mount View entirely yours. Book the whole property for an exclusive celebration, where every corner becomes part of your story and the hills stand witness to your special moments.",
        capacity: "Capacity: 120 Pax event, 35 Pax stay",
        img: "images/c1.png" // add your image 1 here
    },
    {
        title: "Indoor space",
        desc: "Our charming indoor spaces blend comfort with character, ideal for hosting celebrations surrounded by mountain views, good food, and great company.",
        capacity: "Capacity: 40 Pax",
        img: "images/c2.png" // add your image 2 here
    },
    {
        title: "Outdoor space",
        desc: "Our lush gardens, open lawns, and scenic viewpoints set the stage for unforgettable events. Think hearty family feasts, golden sunsets, and endless laughter under the open sky.",
        capacity: "Capacity: 120 Pax",
        img: "images/c3.png" // add your image 3 here
    }
];

function updateSlider() {
    document.getElementById("slideTitle").innerHTML = sliderData[sliderIndex].title;
    document.getElementById("slideDesc").innerHTML = sliderData[sliderIndex].desc;
    document.getElementById("slideCapacity").innerHTML = sliderData[sliderIndex].capacity;

    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    slides.forEach((s) => s.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));

    slides[sliderIndex].classList.add("active");
    dots[sliderIndex].classList.add("active");
}

function nextSlide() {
    sliderIndex = (sliderIndex + 1) % sliderData.length;
    updateSlider();
}

function prevSlide() {
    sliderIndex = (sliderIndex - 1 + sliderData.length) % sliderData.length;
    updateSlider();
}

function goToSlide(n) {
    sliderIndex = n;
    updateSlider();
}

/* Auto slide every 5 seconds */
setInterval(nextSlide, 5000);


