/**
 * Todos los nombres de métodos y funciones son orientativos. 
 * Utilízalos si quieres.
 */


class Starwars {
    constructor(){
        this.peliculas = [];
        
    }
    getFilms(f) {
        f.result.forEach(e=>{
            let id = e.uid;
            let titulo =e.properties.title;
            let desc =e.properties.opening_crawl;
            this.peliculas.push({id,titulo,desc});
            
        })        
    }

    getFilmById(id) {
        return this.peliculas.find(e =>{
            return e.id ==id;
        });
    }
    getCharacters() {
    }
    getCharactersById(id) {
    }

}

const UrlFilms = "https://www.swapi.tech/api/films";
const starwars = new Starwars();

const loadFilmTitles = ()=>{
    let contenedor = document.querySelector("ul.lista");
    console.log(contenedor);
    starwars.peliculas.forEach(e=>{
        console.log(e);
        contenedor.appendChild(crearItemTitulo(e.id,e.titulo));
    });
}

const loadFilmDesc = (e)=>{
    let film = starwars.getFilmById(e.target.id);
    let titulo = document.getElementById("film-title");
    let desc = document.getElementById("film-description");
    titulo.innerHTML= film.titulo;
    desc.innerHTML=film.desc;

}

const init = () => {
    fetch(UrlFilms).then(e =>{
        return e.json();
    })
    .then(films =>{
        starwars.getFilms(films);
    })
    .then(document.getElementById('peliculas').addEventListener('click', loadFilmTitles))
    .catch(error => alert(error.message));
}

onload = init;

function crearItemTitulo(id,titulo){
    let item =document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("id",id);
    a.innerHTML =titulo;
    a.addEventListener("click",loadFilmDesc);
    item.appendChild(a);

    return item;
}
