/**
 * Todos los nombres de métodos y funciones son orientativos. 
 * Utilízalos si quieres.
 */

class Starwars {

    url = 'https://www.swapi.tech/api/films/';

    async fetchUrl(url){
        try {
            let result = await fetch(url);
            if(result.ok)
                return result.json();
        } catch (error) {
            throw error;
        }

    }

    getFilms() {
        try {
            return this.fetchUrl(this.url);
            //this.fetchUrl(this.url).then(data => console.log(data));
        } catch (error) {
            throw error;
        }

    }

    getFilmById(id) {
        try {
            return this.fetchUrl(this.url.concat(id));
        } catch (error) {
            throw error;   
        }
    }
    getCharacters() {
    }
    getCharactersById(id) {
    }

}

const starwars = new Starwars();

const loadFilmDetails = async (e)=>{
    try {
        
        let filmObject = await starwars.getFilmById(e.target.id);
        console.log('detalle',filmObject);

        const title = document.getElementById('film-title');
        const description = document.getElementById('film-description');

        title.textContent = filmObject.result.properties.title;
        description.textContent = filmObject.result.properties.opening_crawl;

    } catch (error) {
        console.log(error);
    }

}

const loadFilmTitles = async ()=>{
    // let films = [];
    try {
        let filmObject = await starwars.getFilms();
        let films = filmObject.result;
        console.log(films);
    
        const lista = document.querySelector('.lista');
    
        films.forEach(element =>{
            let li = document.createElement('li');
            let anchor = document.createElement('a');
            anchor.textContent = element.properties.title;
            anchor.setAttribute('id',element.uid);
            anchor.href='#detalle';
            anchor.addEventListener('click', loadFilmDetails);
    
            li.appendChild(anchor);
            lista.appendChild(li);
        })
            
    } catch (error) {
        console.log(error);        
    }


}

const init = () => {

    document.getElementById('peliculas').addEventListener('click', loadFilmTitles);

}

onload = init;