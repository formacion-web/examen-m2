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
    getFilms(title, sinopsis) {
        this.title = title;
        this.sinopsis = sinopsis;
      let pelis = new Peliculas();

  
}
    
    }

  //  getFilmById(id) {
    //}
  //  getCharacters() {
    //}
    //getCharactersById(id) {

    //}
    


const starwars = new Starwars();

const loadFilmTitles = ()=>{

}

const init = () => {

    document.getElementById('peliculas').addEventListener('click', loadFilmTitles);

}

onload = init;


