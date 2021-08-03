$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 100,
    dots: true,
    loop: true,

    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 2
      }
    }


  });
});

let portifolioBTN = document.querySelector("#portifolio-btn");
let portifolio = document.querySelector("#portifolio-ini");
let destino = portifolio.offsetTop;

function rolar (){
  window.scrollBy({
    top: destino,
    behavior: 'smooth'
  })

  
}

addEventListener('click', rolar);






