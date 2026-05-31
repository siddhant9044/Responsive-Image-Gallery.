// ==========================
// AUTO LOAD IMAGES
// ==========================

const gallery = document.getElementById("gallery");

// Nature Images
for (let i = 1; i <= 25; i++) {
    gallery.innerHTML += `
        <div class="gallery-item nature">
            <img src="nature/nature (${i}).jpg" alt="Nature ${i}">
        </div>
    `;
}

// City Images
for (let i = 1; i <= 25; i++) {
    gallery.innerHTML += `
        <div class="gallery-item city">
            <img src="city/city (${i}).jpg" alt="City ${i}">
        </div>
    `;
}

// Animal Images
for (let i = 1; i <= 25; i++) {
    gallery.innerHTML += `
        <div class="gallery-item animals">
            <img src="Animals/animals (${i}).jpg" alt="Animal ${i}">
        </div>
    `;
}

// ==========================
// SELECT ELEMENTS
// ==========================

const galleryImages = document.querySelectorAll(".gallery img");
const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// ==========================
// OPEN LIGHTBOX
// ==========================

galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });
});

// ==========================
// SHOW IMAGE
// ==========================

function showImage() {
    lightboxImg.src = galleryImages[currentIndex].src;
}

// ==========================
// CLOSE LIGHTBOX
// ==========================

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// ==========================
// NEXT IMAGE
// ==========================

nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    showImage();
});

// ==========================
// PREVIOUS IMAGE
// ==========================

prevBtn.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }

    showImage();
});

// ==========================
// CLOSE ON OUTSIDE CLICK
// ==========================

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// ==========================
// FILTER FUNCTIONALITY
// ==========================

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.style.display = "block";

                setTimeout(() => {
                    item.style.opacity = "1";
                }, 10);

            } else {

                item.style.opacity = "0";

                setTimeout(() => {
                    item.style.display = "none";
                }, 300);

            }

        });

    });

});

// ==========================
// KEYBOARD NAVIGATION
// ==========================

document.addEventListener("keydown", (e) => {

    if (lightbox.style.display === "flex") {

        if (e.key === "ArrowRight") {
            nextBtn.click();
        }

        if (e.key === "ArrowLeft") {
            prevBtn.click();
        }

        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }

    }

});

// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});