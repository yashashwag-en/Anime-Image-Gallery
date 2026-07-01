const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const counter = document.querySelector(".counter");

const filterBtns = document.querySelectorAll(".filter-btn");

const topBtn = document.getElementById("topBtn");

let currentIndex = 0;

// Open Lightbox
galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;
        showImage();

        lightbox.style.display = "flex";

    });

});

// Show Current Image
function showImage() {

    lightboxImg.src = galleryImages[currentIndex].src;

    counter.textContent =
        `${currentIndex + 1} / ${galleryImages.length}`;

}

// Next Image
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    showImage();

});

// Previous Image
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }

    showImage();

});

// Close Button
closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// Close by Clicking Background
lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }

});

// Keyboard Navigation
document.addEventListener("keydown", (e) => {

    if (lightbox.style.display === "flex") {

        if (e.key === "ArrowRight") {

            currentIndex++;

            if (currentIndex >= galleryImages.length)
                currentIndex = 0;

            showImage();

        }

        if (e.key === "ArrowLeft") {

            currentIndex--;

            if (currentIndex < 0)
                currentIndex = galleryImages.length - 1;

            showImage();

        }

        if (e.key === "Escape") {

            lightbox.style.display = "none";

        }

    }

});

// Filters
filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        const value = btn.dataset.filter;

        galleryImages.forEach(img => {

            if (value === "all") {

                img.classList.remove("hide");

            }
            else {

                if (img.classList.contains(value)) {

                    img.classList.remove("hide");

                }
                else {

                    img.classList.add("hide");

                }

            }

        });

    });

});

// Scroll to Top Button
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }
    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});