const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal__image");
const closeBtn = document.querySelector(".modal__close-button");
const modalCaption = document.querySelector(".modal__caption");
const images = document.querySelectorAll(".gallery-list__image");

images.forEach((img) => {
    img.addEventListener("click", () => {
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        const caption = img.closest("figure").querySelector(".gallery-list__caption").textContent;
        modalCaption.textContent = caption;
        modal.showModal();
    });
    
    img.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            const caption = img.closest("figure").querySelector(".gallery-list__caption").textContent;
            modalCaption.textContent = caption;
            modal.showModal();
        }
    });
});

closeBtn.addEventListener("click", () => {
    modal.close();
});