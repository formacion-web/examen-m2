/**
 * Todos los nombres de métodos y funciones son orientativos. 
 * Utilízalos si quieres.
 */
let peli = 
 fetch('https://www.swapi.tech/api/films').then(function(response){
    if(response.ok){
        response.json().then(data=> console.log(data));
    
    }
}).catch(function(error){
    console.log('error');
});

class Starwars {
    getFilms(peli) {
   
 let createEl = document.createElement('li');
 let get = document.getElementsByTagName('li');
    
  
}
    
    }

    getFilmById(id) {
    }
    getCharacters() {
    }
    getCharactersById(id) {
    }

}

const starwars = new Starwars();

const loadFilmTitles = ()=>{

}

const init = () => {

    document.getElementById('peliculas').addEventListener('click', loadFilmTitles);

}

onload = init;


