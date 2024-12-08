import { data } from "./datos.js";

const { personajes } = data;
const mugiwaras = personajes.mugiwaras;
const morePersonajes = personajes.otros;

const $template = document.getElementById("template");
const $section = document.querySelector(".personajes");

const datos = (dato) =>{
    
    const { imagen, nombre, fruta, rol, edad, recompensa, estado, altura, epiteto, nacimiento, origen, aparicion, tipoFruta, descripcion, descripcion2 } = dato;
    const cloneTemplate = document.importNode($template.content, true);
    
    cloneTemplate.querySelector(".card__img").src = imagen;
    cloneTemplate.querySelector(".nombre").innerText = nombre;
    cloneTemplate.querySelector(".fruta").innerHTML = `<span class="atributo">Fruta:</span> ${fruta}`;
    cloneTemplate.querySelector(".rol").innerHTML = `<span class="atributo">Rol:</span> ${rol}`;
    cloneTemplate.querySelector(".edad").innerHTML = `<span class="atributo">Edad:</span> ${edad} Años`;
    cloneTemplate.querySelector(".recompensa").innerHTML = `<span class="atributo">Recompensa:</span> ${recompensa}`;
    cloneTemplate.querySelector(".estado").innerHTML = `<span class="atributo">Estado:</span> ${estado}`;

    const button = cloneTemplate.querySelector(".card__btn");
    button.addEventListener("click", () => {
        const dataString = `img=${imagen}&nombre=${nombre}&cargo=${rol}&fruta=${fruta}&edad=${edad}&recompensa=${recompensa}&estado=${estado}&altura=${altura}&epiteto=${epiteto}&nacimiento=${nacimiento}&origen=${origen}&aparicion=${aparicion}&tipoFruta=${tipoFruta}&descripcion=${descripcion}&descripcion2=${descripcion2}`;
        const encodedData = btoa(encodeURIComponent(dataString));
        window.location.href = `details.html?data=${encodedData}`;
    });

    $section.appendChild(cloneTemplate);
}

mugiwaras.forEach(dato => {
    
    datos(dato)
});

if (window.location.pathname.endsWith("personajes.html")){
    morePersonajes.forEach(dato => {
        datos(dato)
    });    
}

