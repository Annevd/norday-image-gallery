# Image Gallery Assignment

This is my submission for the Norday front-end assignment: a simple, responsive **image gallery** built with **HTML, CSS, and JavaScript**.  

---

## 🌐 Demo

<!-- Insert visual demo here -->
<img width="1396" height="947" alt="image" src="https://github.com/user-attachments/assets/9af59c4a-b199-4e37-bcf7-9557a117cc5f" />


View the live project here:  
[https://annevd.github.io/norday-image-gallery/](https://annevd.github.io/norday-image-gallery/)

---

## ✨ Features
- Responsive grid layout of images.
- Clickable images open in a **modal** using the native `<dialog>` element.
- Downloadable Images.
- Highlighted Image.
- A clean, playful and artistic design.

---

## ♿ Accessibility & Performance

- Uses explicit `width` and `height` attributes on images to prevent Cumulative Layout Shifts.
- Images have describing `alt` attributes to help screenreader users.
- Uses _lazy loading_ to improve performance.
- Scores 100% accessibility on Chrome's Lighthouse Tool.
- Uses 100% accessible color combinations according to WCAG 2 AA standards, which is 4.5:1 for normal text and 3:1 for large text.
- Fully accessible with keyboard.
- Fully responsive on every device.


---

## 🛠 Technologies
- **HTML**
- **CSS**
- **Vanilla JavaScript**

## 📝 Notes


**If I were to use a framework like Astro ([see my portfolio](https://github.com/Annevd/Portfolio-2025/tree/main/src)), I would:**  
  - Use small and larger components to keep the code structured, readable, and maintainable.  
  - Loop through components such as list items for better readability.  
  - Apply layouts to maintain consistency across the project.  


**If I had more time, I would work on:**  
  - Implementing a proper “show more” function. My initial idea was to hardcode all images in the HTML, hide the last 6 with `display: none`, and reveal them with JavaScript when clicking a “Show All” button. However, I realize this approach doesn’t scale well. A better solution would be to dynamically generate and inject images into the DOM using JavaScript (and ideally frameworks).  
  - Refining the modal close button. Currently, its position is not consistent relative to the image and the design could be clearer. I would prefer placing the button outside the modal so it doesn’t obstruct the image.  
  - Adjusting the caption alignment under the modal image. Right now, I’m using `text-align: center` as a quick fix. With `object-fit: contain` applied, left-aligned text doesn’t align properly with the image. This needs a better long-term solution.  
  - Ensuring the page is not scrollable while the modal is open.  
  - Preventing the page from jumping back to the top when opening a modal, the scroll position should remain the same.  
  - Thoroughly testing the CSS with images of different sizes (instead of only 724x1024). This would help prevent distorted or oversized images in the gallery and modal.  
  - Fixing the issue where images are not correctly displayed inside the modal on mobile (safari, Iphone 11) (currently not working as expected).  
  - Using SCSS with separate partial files to keep the styling organized, readable, and maintainable ([see my portfolio for separate CSS files](https://github.com/Annevd/Portfolio-2025/tree/main/src/styles)).  
  - Adding support for modern image formats such as **WebP** and **AVIF** to improve performance.
  - Looking into ways to make sure images are expandable without JS to keep it Progressively Enhanced.
  - Designing more engaging hover states for download buttons. E.g., default state showing only the arrow, and on hover, animating in the “Download” text.  
  - Implementing smooth **view transitions** for opening the dialog using the View Transitions API.  

---

## 🚀 How to Run Locally
1. **Clone the repository:** 
   ```bash
   git clone https://github.com/Annevd/norday-image-gallery.git
   ```

2. **Open `index.html` in your browser.**

---

## ℹ️ Sources

- [HTMLDialogElement: `showModal()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal)
- [`<dialog>`: The Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
- [View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)
- [`@view-transition`](https://css-tricks.com/almanac/rules/v/view-transition/)
- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions)
