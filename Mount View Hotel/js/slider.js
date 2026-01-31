let sliderIndex = 0;

const sliderData = [
    {
        title: "Entire Property",
        desc: "Wake up above the clouds,where the sun paints the skyin seven hues.",
        capacity: "Capacity: 120 Pax event, 35 Pax stay",
        img: "images/c1.png" // add your image 1 here
    },
    {
        title: "Indoor space",
        desc: "Savor the warmth of authentic Parsi flavours, crafted with age-old love.",
        capacity: "Capacity: 40 Pax",
        img: "images/c2.png" // add your image 2 here
    },
    {
        title: "Outdoor space",
        desc: "Wander through whispering trails and mountain paths that call to the soul.",
        capacity: "Capacity: 120 Pax",
        img: "images/c3.png" // add your image 3 here
    },
    {
        title: "Outdoor space",
        desc: "Let furry paws wander, a haven where nature becomes their playground.",
        capacity: "Capacity: 120 Pax",
        img: "images/c3.png" // add your image 3 here
    }
];

function updateSlider() {
    const slideDescElement = document.getElementById("slideDesc");
    if (slideDescElement) {
        slideDescElement.innerHTML = sliderData[sliderIndex].desc;
    }


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
