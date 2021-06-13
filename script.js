/**
 * Todos los nombres de métodos y funciones son orientativos.
 * Utilízalos si quieres.
 */

let urlFilms = "https://www.swapi.tech/api/films";
const fetchFilms = async (urlFilms) => {
  try {
    let response = await fetch(urlFilms);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    throw error;
  }
};
// fetch(urlFilms).then(result => result.json())
//                .then(data => {return data})
//                .catch(error => {throw error})

// const getFilms = async () => {
//   const datos = await fetchFilms(urlFilms);
//   let lista = document.getElementById("lista");
//   datos.forEach((e) => {
//     let title = e.title;

//     const li = document.createElement("li");

//     li.appendChild(title);
//     lista.appendChild(li);
//   });
// };

// class Starwars {
    // constructor(id, title,){
    //     this.id = id;
    //     this.title = title;
    // }

//   getFilms() {
//     let urlFilms = "https://www.swapi.tech/api/films";
//     // const fetchFilms = async (urlFilms) => {
//     //   try {
//     //     let response = await fetch(urlFilms);
//     //     if (response.ok) {
//     //       let data = await response.json();
//     //       return data;
//     //     }
//     //   } catch (error) {
//     //     throw error;
//     //   }
//     // };
//     fetch(urlFilms).then(result => result.json())
//                    .then(data => {return data})
//                    .catch(error => {throw error})

//   }

//   getFilmById(id) {
//     let datos = getFilms(urlFilms);
//     datos.forEach(e=> {
//         let title = e.title;
//         let opening_crawl = e.opening_crawl;

//     })
//   }

//   // getCharacters() {
//   // }
//   // getCharactersById(id) {
//   // }
// }

// const starwars = new Starwars();

const loadFilmTitles = async () => {
  let datos = await fetchFilms(urlFilms);

  let lista = document.querySelector("lista");
  datos.result.forEach((e) => {
    let title = e.properties.title;

    const li = document.createElement("li");

    li.textContent = title;

   
    lista.appendChild(li);
  })
};

const init = () => {
  document
    .getElementById("peliculas")
    .addEventListener("click", loadFilmTitles);
};

onload = init;
