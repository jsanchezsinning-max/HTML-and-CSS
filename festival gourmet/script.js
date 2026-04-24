let fondo = document.querySelector('.fondo');
let animacion = false;

function updatefondo(){
    let movY = window.scrollY;
    let maxScroll = 400;
    let movimiento = Math.min(movY / maxScroll, 1);
    let escala = 1 + movimiento * 5;
    let opacidad = 1 - movimiento;

    fondo.style.transform = `scale(${escala})`;
    fondo.style.opacity = opacidad;
    animacion = false;
}

window.addEventListener('scroll', () => {


    if(!animacion){
        animacion = true;
        requestAnimationFrame(updatefondo);
    }


})

window.addEventListener("load", () => {
    const track = document.querySelector(".track");

    if (!track) return;

    // duplicar contenido
    track.innerHTML += track.innerHTML;

    // calcular ancho real
    const trackWidth = track.scrollWidth / 2;

    // crear animación dinámica
    const style = document.createElement("style");
    style.innerHTML = `
    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-${trackWidth}px);
        }
    }
    `;
    document.head.appendChild(style);
});
