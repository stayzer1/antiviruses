// Custom Scripts
// Custom scripts

// Smooth Scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// Аккордеон
function accordion() {
  const items = document.querySelectorAll(".accordion__item-trigger");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentNode;
      if (parent.classList.contains("accordion__item-active")) {
        parent.classList.remove("accordion__item-active");
      } else {
        document
          .querySelectorAll(".accordion__item")
          .forEach((child) => child.classList.remove("accordion__item-active"));
        parent.classList.add("accordion__item-active");
      }
    });
  });
}
accordion();

function bindModal(trigger, modal, close) {
  (trigger = document.querySelector(trigger)),
    (modal = document.querySelector(modal)),
    (close = document.querySelector(close));

  const body = document.body;

  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    body.classList.add("locked");
  });
  close.addEventListener("click", () => {
    modal.style.display = "none";
    body.classList.remove("locked");
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      body.classList.remove("locked");
    }
  });
}
bindModal(".modal__btn", ".modal__wrapper", ".modal__close");

