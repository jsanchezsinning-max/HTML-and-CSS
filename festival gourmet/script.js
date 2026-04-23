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
