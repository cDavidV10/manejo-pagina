import { datos } from "./arcosData.js";


const {sagas} = datos

const $sectionArcos = document.querySelector(".contenedor__arcos")
const $template = document.getElementById("template-arco");

sagas.forEach(saga =>{
    const {nombre, arcos} = saga

    const contenedorArcos = document.createElement("article");
    contenedorArcos.classList.add("contenedor");
    
    const title = `<h2 class="arco-title">${nombre}</h2>`
    
    $sectionArcos.insertAdjacentHTML("beforeend", title);
    
    arcos.forEach(arco =>{
        const {imagen, nombre, manga, anime} = arco
        
        const cloneTemplate = document.importNode($template.content, true);


        cloneTemplate.querySelector(".card__img").src = imagen;
        cloneTemplate.querySelector(".saga").innerText = nombre;
        cloneTemplate.querySelector(".manga").innerHTML = `<span class="atributo">Capítulos del manga:</span> ${manga}`;
        cloneTemplate.querySelector(".anime").innerHTML = `<span class="atributo">Episodios del anime:</span> ${anime}`;
        contenedorArcos.appendChild(cloneTemplate);
    })

    
    $sectionArcos.appendChild(contenedorArcos);
})
