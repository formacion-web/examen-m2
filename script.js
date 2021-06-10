/**
 * Todos los nombres de métodos y funciones son orientativos. 
 * Utilízalos si quieres.
 */

let peliculas =  [];
class Starwars {
    
    getFilms(films) {
        films.result.forEach((e) => {
            peliculas.push(e);
        });
        console.log(peliculas);
        return peliculas;
    }

    getFilmById(id) {
        peliculas.forEach((e) => {
            return  e[id];
        });

    }
    getCharacters() {
    }
    getCharactersById(id) {
    }

}

const starwars = new Starwars();


const urlFetch = async() =>{
    let ul = document.querySelector('.lista');
    try{
        let response = await (fetch('./starwars.json'));
        if(response.ok){
            let responseData = await response.json();
            let movies = starwars.getFilms(responseData);
            ul.innerHTML= '';
             movies.forEach(res => {
                 ul.innerHTML += `<li><a onclick="moviesById(this)" id='${res.uid}'>${res.properties.title}</a></li>`;
            });
        }else{
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    }catch(err){
        throw  new Error(`HTTP error! status: ${err}`);
    }
}

const moviesById = (e)=>{
    let content = starwars.getFilmById(e.getAttribute("id"));
    console.log(content);
}


const loadFilmTitles =  ()=>{
    urlFetch();
}

const init = () => {

    document.getElementById('peliculas').addEventListener('click', loadFilmTitles);

}

onload = init;