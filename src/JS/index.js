//Js da Pagina 4

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    },
    pagination: {
    el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000, // Tempo em milissegundos entre os slides
        disableOnInteraction: false, // Continua a deslizar automaticamente após interações do usuário
    },
    loop: true, 
    speed: 1000,
});

//Js da pagina 3

var swiper2 = new Swiper('.mySwiper2', {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 1500, // Tempo em milissegundos entre os slides
        disableOnInteraction: false, // Continua a deslizar automaticamente após interações do usuário
    },
    loop: true, 
    speed: 3000,
    
});