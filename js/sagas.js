import { datos } from "./arcosData.js";


const {sagas} = datos

const $template = document.getElementById("template-saga");
const $section = document.querySelector(".arcos");
const $dialog = document.querySelector("dialog")
const $modal = document.querySelector(".modal-content")
const $close = document.getElementById("closeModal")

const card = (datos) => {
    const {imagen, nombre, manga, anime, volumenes, numVolumenes, arcos, descripcion} = datos

    const cloneTemplate = document.importNode($template.content, true);

    cloneTemplate.querySelector(".card__img").src = imagen;
    cloneTemplate.querySelector(".saga").innerText = nombre;
    cloneTemplate.querySelector(".manga").innerHTML = `<span class="atributo">Capítulos del manga:</span> ${manga}`;
    cloneTemplate.querySelector(".anime").innerHTML = `<span class="atributo">Episodios del anime:</span> ${anime}`;
    cloneTemplate.querySelector(".numArcos").innerHTML = `<span class="atributo">Número de arcos</span> ${arcos.length}`;

    const btn = cloneTemplate.getElementById("btnModal");
    btn.addEventListener("click", ()=>{
        document.body.classList.add('modal-open')
        modal(imagen, nombre, manga, anime, volumenes, numVolumenes, arcos, descripcion)
        $dialog.showModal()
    })

    $section.appendChild(cloneTemplate);
}


$close.addEventListener("click", ()=>{
    document.body.classList.remove('modal-open')
    $dialog.close()
})

const modal = (imagen, nombre, manga, anime, volumenes, numVolumenes, arcos, descripcion) => {
    $modal.innerHTML = `
        <article>
                <div class="img__container">
                  <img class="card__img" src="${imagen}" />
                </div>
                <div class="info__container">
                  <h3 class="saga">${nombre}</h3>
                  <p class="volumenes">Volumenes: ${volumenes}</p>
                  <p class="num-volumenes">Numero de volumenes: ${numVolumenes}</p>
                  <p class="manga">Capitulos del manga: ${manga}</p>
                  <p class="anime">Episodios del anime: ${anime}</p>
                  <p class="numArcos">Numero de arcos: ${arcos.length}</p>
                </div>
              </article>
              <article>
                <h2 class="card-title">Descripcion</h2>
                <p class="descripcion">
                 ${descripcion}
                </p>
              </article>
    `
}

sagas.forEach(saga =>{
    card(saga)
})