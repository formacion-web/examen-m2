const url = "https://www.swapi.tech/api/films";

fetch(url)
    .then(response => response.json())
    .then(repos => { 
    	const reposList = repos.map(repo => repo.name);
    	console.log(reposList);
    })
    .catch(err => console.log(err))

class Starwars {
    constructor(){
        this.itemLi = document.createElement('li');
        this.itemFilms = document.createElement('p');
        this.itemFilmById = document.createElement('a');
    }
    getFilms() {
        this.itemFilms.className="film-title";

    }

    getFilmById(id) {
        this.itemFilmById.className = "film-description";
    }
    getCharacters() {
    }
    getCharactersById(id) {
    }

    getNewElement(){
        this.setItemLi();
        this.setItemFilms(film-title);
        this.setItemFilmsById(film-description);
       
        this.itemLi.appendChild(this.itemFilms);
        this.itemLi.appendChild(this.itemFilmsById);
        
        return this.itemLi;
}

const starwars = new Starwars();

const loadFilmTitles = ()=>{

}

const init = () => {

    document.getElementById('peliculas').addEventListener('click', loadFilmTitles);

}

window.onload = init;
