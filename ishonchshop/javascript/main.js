window.addEventListener("load", function(){
  var cart = this.document.querySelectorAll(".cart");
  var price = this.document.querySelector(".total b");

  console.log(cart);
  console.log(price);

    for (let i = 0; i < cart.length; i++) {
        cart[i].addEventListener("click", function(){
            this.classList.toggle("cart-active");
            price.innerHTML = sum();
        });
    }

    function sum() {
        var sum = 0;
        
        for (let i = 0; i < cart.length; i++) {
           if (cart[i].classList.contains("cart-active")) {
            sum = sum + +cart[i].getAttribute("data-price")
           }
        }
return sum;
    }
})


const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * slides[0].offsetWidth;
  carouselContainer.style.transform = `translateX(${offset}px)`;
}

updateCarousel();
