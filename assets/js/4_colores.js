cuadroUno = document.getElementById('cuadro_1'); 
cuadroDos = document.getElementById('cuadro_2'); 
cuadroTres = document.getElementById('cuadro_3');
cuadroCuatro = document.getElementById('cuadro_4');

function pintar(evento) {
    evento.target.style.backgroundColor = 'black'; 
}

cuadroUno.addEventListener("click", pintar);
cuadroDos.addEventListener("click", pintar);
cuadroTres.addEventListener("click", pintar);
cuadroCuatro.addEventListener("click", pintar); 

const keyDiv = document.getElementById('key'); 

document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase(); 

    if (key === 'a') {
        colorKey = 'pink'; 
        keyDiv.style.backgroundColor = colorKey; 
    } else if (key === 's') {
        colorKey = 'orange'; 
        keyDiv.style.backgroundColor = colorKey;
    } else if (key === 'd') {
        colorKey = 'skyblue'; 
        keyDiv.style.backgroundColor = colorKey; 
    } 
    
    else if (key === 'q') {
        nuevoDiv('purple');
    } else if (key === 'w') {
        nuevoDiv('gray')
    } else if (key === 'e') {
        nuevoDiv('brown');
    }
})

function nuevoDiv(color) {
    const creaDiv = document.createElement('div'); 
    creaDiv.style.width = '200px';
    creaDiv.style.height = '200px';
    creaDiv.style.backgroundColor = color; 
    creaDiv.style.border = 'solid 2px black'; 
    document.body.appendChild(creaDiv); 
}