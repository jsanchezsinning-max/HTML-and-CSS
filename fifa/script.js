let slideIndex = 0;
let slideTimer;
showSlides(slideIndex);

function plusSlides(n) {
    clearTimeout(slideTimer); // Detener la transición automática al usar la navegación manual
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(slideTimer); // Detener la transición automática al usar la navegación manual
    showSlides(slideIndex = n - 1);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";

    // Restablecer el temporizador para la transición automática
    slideTimer = setTimeout(() => showSlides(slideIndex += 1), 3000);
}