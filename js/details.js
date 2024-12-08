const $personaje = document.querySelector(".card-personaje");
const $btnPersonajes = document.querySelector(".btn-more__info");

const urlParams = new URLSearchParams(window.location.search);
const encodedData = urlParams.get("data");

const decodedData = decodeURIComponent(atob(encodedData));

const data = decodedData.split("&").reduce((acc, param) => {
    const [key, value] = param.split("=");
    acc[key] = value;
    return acc;
}, {});


const { img, nombre, fruta, rol, edad, recompensa, estado, altura, epiteto, nacimiento, origen, aparicion, tipoFruta, descripcion, descripcion2 } = data;


$personaje.innerHTML = `
    <article class="card__info">
        <img class="card__img" src="${img}"/>
        <div class="informacion">
            <h2 class="card-title">Informacion</h2>
            <p><span class="atributo">Nombre: </span> ${nombre}</p>
            <p><span class="atributo">Epiteto: </span> ${epiteto}</p>
            <p><span class="atributo">Recompensa: </span> ${recompensa}</p>
            <p><span class="atributo">Fecha de Nacimiento: </span> ${nacimiento}</p>
            <p><span class="atributo">Altura: </span> ${altura}</p>
            <p><span class="atributo">Origen: </span> ${origen}</p>
            <p><span class="atributo">Tipo de Fruta: </span> ${tipoFruta}</p>
            <p><span class="atributo">Primera Aparicion: </span> ${aparicion}</p>
            <p><span class="atributo">Estado: </span> ${estado}</p>
        </div>
    </article>
    <article class="card__descripcion">
        <h2 class="card-title">Descripcion</h2>
        <p>${descripcion}</p>
        <p>${descripcion2}</p>
    </article>
`

$btnPersonajes.addEventListener("click", () =>{
    const btnId = $btnPersonajes.getAttribute("data-id");

    if(btnId == 2){
        window.location.href = "personajes.html"
    }
})