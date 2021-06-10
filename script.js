/**
 * Todos los nombres de métodos y funciones son orientativos.
 * Utilízalos si quieres.
 */

class Starwars {
    


  getFilms() {
    let urlFilms = "https://www.swapi.tech/api/films";
    // const fetchFilms = async (urlFilms) => {
    //   try {
    //     let response = await fetch(urlFilms);
    //     if (response.ok) {
    //       let data = await response.json();
    //       return data;
    //     }
    //   } catch (error) {
    //     throw error;
    //   }
    // };
    fetch(urlFilms).then(result => result.json())
                   .then(data => {return data})
                   .catch(error => {throw error})
    
  }

  getFilmById(id) {
    let datos = getFilms(urlFilms);
    datos.forEach(e=> {
        let title = e.title;
        let opening_crawl = e.opening_crawl
    })
  }

  // getCharacters() {
  // }
  // getCharactersById(id) {
  // }
}

const starwars = new Starwars();

const loadFilmTitles = () => {};

const init = () => {
  document
    .getElementById("peliculas")
    .addEventListener("click", loadFilmTitles);
};

onload = init;
