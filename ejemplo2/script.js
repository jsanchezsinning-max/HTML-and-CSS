let fondo = document.querySelector('.fondo');
let end = document.querySelector('.end');
let animacion = false;

function updatefondo(){
    let movY = window.scrollY;
    let maxScroll = 400;
    let movimiento = Math.min(movY / maxScroll, 1);
    let escala = 1 + movimiento * 5;
    let opacidad = 1 - movimiento;

    fondo.style.transform = `scale(${escala})`;
    fondo.style.opacity = opacidad;
}

function updateEnd(){
    let movY = window.scrollY;
    let posicionEnd = end.offsetTop;
    let alturaPantalla = window.innerHeight;

    let distancia = movY + alturaPantalla - posicionEnd;

    let maxScroll = alturaPantalla;
    let movimiento = Math.min(distancia / maxScroll, 1);

    let escala = 6 - movimiento * 5; 
    let opacidad = movimiento;

    if(distancia > 0){
        end.style.transform = `scale(${escala})`;
        end.style.opacity = opacidad;
    }
}


window.addEventListener('scroll', () => {

    if(!animacion){
        animacion = true;
        requestAnimationFrame(() => {
            updatefondo(); 
            updateEnd(); 
            animacion = false;
        });
    }

});

/** funcion hecha con jander
 * 
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
*/
