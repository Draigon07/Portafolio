"use strict"

let img = [...document.querySelectorAll('.img_gallery')]
console.log(img);
const btnCierra = document.querySelector('.btn_cerrar');
const btnRetrocede = document.querySelector('.btn_retrocede')
const btnAdelanta = document.querySelector('.btn_adelantar');
const lightBox = document.querySelector('.contenedor_principal')
const imagenActiva = document.querySelector('.img_activa');
let indiceImagen = 0;

const openLightBox = (e) =>{
    lightBox.style.display = 'flex'
    imagenActiva.src = e.target.src;
    indiceImagen = img.indexOf(e.target)
    console.log(indiceImagen)
}

img.forEach((img => {
    img.addEventListener('click',openLightBox)
}))

btnCierra.addEventListener('click',()=>{
    lightBox.style.display = 'none'
})



