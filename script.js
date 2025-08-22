const modal = document.querySelector(".image-modal");
const modalImg = document.querySelector(".modal-image");
const closeBtn = document.querySelector(".close-button");
const modalCaption = document.querySelector(".modal-caption");
const images = document.querySelectorAll(".list__image");

// Open modal on image click
images.forEach((img) => {
    img.addEventListener("click", () => {
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        const caption = img.closest("figure").querySelector(".list__caption").textContent;
        modalCaption.textContent = caption;
        modal.showModal();
    });
});

// Close modal
closeBtn.addEventListener("click", () => {
    modal.close();
});
