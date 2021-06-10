/**
 * Todos los nombres de métodos y funciones son orientativos. 
 * Utilízalos si quieres.
 */

class Pelicula {
    constructor(id, title, opening_crawl) {
        this.id = id;
        this.title = title;
        this.opening_crawl = opening_crawl
    }
}

class Personajes {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}


class Starwars {


    async getFilms(element) {
        try {
            removeItems_list();

            this.listapeliculas = [];
            let url = "./data.json";

            const datos = await this.getfetchUrl(url);
            const lista = document.querySelector('.lista');
            datos.result.forEach(element => {
                const id_pelicula = element.uid;
                const title = element.properties.title;
                const opening_crawl = element.properties.opening_crawl;
                const txtHTML = `<li class="item_list"><a id='${id_pelicula}'>${title}</a></li>`;
                lista.insertAdjacentHTML("beforeend", txtHTML);

                document.getElementById(`${id_pelicula}`).addEventListener('click', filmDescription);

                this.listapeliculas.push(new Pelicula(id_pelicula, title, opening_crawl));
            })

        } catch (error) {
            throw error;

        }
    }

    getFilmById(id) {
        return this.listapeliculas.find(elemento => elemento.id == id);

    }
    async getCharacters() {
        try {
            removeItems_list();

            this.listaPersonajes = [];
            let url = "./people.json";
            const datos = await this.getfetchUrl(url);
            console.log(datos);
            const lista = document.querySelector('.lista');
            datos.results.forEach(element => {
                const id_personaje = element.uid;
                const name = element.name;
                const url = element.url;
                const txtHTML = `<li class="item_list"><a id='${id_personaje}'>${name}</a></li>`;
                lista.insertAdjacentHTML("beforeend", txtHTML);

                document.getElementById(`${id_personaje}`).addEventListener('click', personajeDescription);

                this.listaPersonajes.push(new Pelicula(id_personaje, name, url));
            })

        } catch (error) {
            throw error;

        }
    }
    getCharactersById(id) {
        return this.listaPersonajes.find(elemento => elemento.id == id);
    }

    async getfetchUrl(url) {
        //let url = "https://www.swapi.tech/api/films";
        //let url ="./data.json";
        try {
            let response = await fetch(url);
            if (response.ok) {
                let data = await response.json();
                return data;
            }

        } catch (error) {
            throw error;

        }
    }

}

const starwars = new Starwars();

const loadFilmTitles = () => {
    try {
      starwars.getFilms();

    } catch (error) {
        console.error(error);
    }
}

const loadPersonajes = () => {
    try {
      starwars.getCharacters();

    } catch (error) {
        console.error(error);
    }
}

const personajeDescription = (event) => {
    personajes = starwars.getCharactersById(event.target.id);
    section_h2.textContent = personajes.title;
    // section_p.textContent = pelicula.opening_crawl;
}

const filmDescription  = (event) => {
    pelicula = starwars.getFilmById(event.target.id);
    section_h2.textContent = pelicula.title;
    section_p.textContent = pelicula.opening_crawl;
}

const init = () => {

    document.getElementById('peliculas').addEventListener('click', loadFilmTitles);
    document.getElementById('personajes').addEventListener('click', loadPersonajes);

    section_h2 = document.getElementById('detalle').querySelector('h2');
    section_p = document.getElementById('detalle').querySelector('p');


}

// Aún no va.....!!!
const removeItems_list = () => {
    items = document.getElementsByClassName('item_list');
    Array.from(items).forEach(element => {element.remove()});
}

let section_h2;
let section_p;
onload = init;