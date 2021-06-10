/**
 * Todos los nombres de métodos y funciones son orientativos. 
 * Utilízalos si quieres.
 */
let url='https://www.swapi.tech/api/films';

class Starwars {
constructor(){
        
        this.peliculas=peliculas;
        this.characters=characters;
    }   
    getFilms(){
        document.querySelector('peliculas');
        let id= e.uid;
        let titulo=e.properties.title;
        this.peliculas.push({id,titulo});
    }
    getFilmById() {
       return this.peliculas.find(e=>{
           return e.id==id;
       })
    }
    getCharacters() {
        
    }
    getCharactersById(id) {
        
    }
    getFilmDescription(){
        let film = starwars.getFilmById(e.target.id);
        let titulo = document.getElementById("film-title");
        let descripcion = document.getElementById("film-description");
        titulo.innerHTML= film.titulo;
        descripcion.innerHTML=film.desc;
    }

}
const starwars = new Starwars();
 
const recuperarDatos = ()=>{
    let contenedor = document.querySelector("ul.lista");
    console.log(contenedor);
    starwars.peliculas.forEach(e=>{
        console.log(e);
        contenedor.appendChild(crearItemTitulo(e.id,e.titulo))
    
        });

    }

const init = () => {
    fetch(UrlFilms).then(e =>{
        return e.json();
    })
    .then(films =>{
        starwars.getFilms(films);
    })
    .then(document.getElementById('peliculas').addEventListener('click', recuperarDatos))
    .catch(error => alert(error.message));
    //document.getElementById('peliculas').addEventListener('click', recuperarDatos);
    //document.getElementById('film-title').addEventListener('click',recuperarDatos);

}

window.onload = init;

function crearItemTitulo(id,titulo){
    let item =document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("id",id);
    a.innerHTML =titulo;
    a.addEventListener("click",getFilmDescription);
    item.appendChild(a);

    return item;
}