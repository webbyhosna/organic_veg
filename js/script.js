// Swiper for banner
let swiper0 = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});

let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchFrom.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};
let searchFrom = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchFrom.classList.toggle("active");
  navbar.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  navbar.classList.remove("active");
  searchFrom.classList.remove("active");
  loginForm.classList.remove("active");
};

let loginForm = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
  searchFrom.classList.remove("active");
  shoppingCart.classList.remove("active");
};

// Remove ClassList here
window.onscroll = () => {
  navbar.classList.remove("active");
  searchFrom.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};

// Swiper for Products
let swiper = new Swiper(".products-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
// Swiper for Review
let swiper1 = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
