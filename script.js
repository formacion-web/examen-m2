/**
 * Todos los nombres de métodos y funciones son orientativos. 
 * Utilízalos si quieres.
 */

const url = 'https://www.swapi.tech/api/films';

const fetchUrl = async (url) =>{
    try {
        let response = await fetch(url);
        
        if(response.ok){
            let data = await response.json();
            return data;
        }
    } catch (error) {
        throw error;
    }
};

class Starwars {
    
    getFilms() {
        
    }

    getFilmById(id) {
    }
    getCharacters() {
    }
    getCharactersById(id) {
    }

}

const starwars = new Starwars();



const loadFilmTitles = async ()=>{
    const datos = await fetchUrl(url);
    const lista = document.querySelector('.lista');
    
    datos.forEach(e => {
        let title = e.properties.title;
        const li = document.createElement('li');
        const a = document.createElement('a')
        a.textContent = title;
        li.setAttribute('id',id);
        
        li.appendChild(a);
        
        lista.appendChild(li);
    });
}

const init = () => {

    document.getElementById('peliculas').addEventListener('click', loadFilmTitles);

}

onload = init;