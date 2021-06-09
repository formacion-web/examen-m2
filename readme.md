# Examen Práctico Desarrollo Front-end Web. Módulo JavaScript

### Pasos que tienes que seguir para entregar el ejercicio:

1. Realiza un fork del repositorio.
2. Clona __tu__ repositorio a tu máquina local.
3. Modifica el fichero `script.js` que se facilita en este mismo directorio.
4. Guarda los ficheros modificados:
    - `git add .`
    - `git commit -m 'examen'`
5. Sube los cambios al repositorio:
    - `git push`
6. Genera una [github-page](https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site).
7. Crea un __pull request__ con tu nombre en la cabecera del mensaje y la url de la github page en el body del mensaje.

### Descripción del ejercicio

La prueba consiste en crear una web que muestre las películas de la saga star-wars. Deberás construir una lista de películas con su título. Al hacer click en el título de una película se debe mostrar en un recuadro la sinopsis de la película.


![examen M2](examen-m2.gif)


##Instrucciones

La información de las películas se obtiene de la api [SWAPI-La API de Star Wars](https://www.swapi.tech/api/films). El formato de la información es un array de objetos con campos relativos a las películas del universo Star Wars.
El formato de un elemento es el siguiente:

```javascript
  {
{
  "message": "ok",
  "result": {
    "properties": {
      "characters": [
        "https://www.swapi.tech/api/people/1",
        "https://www.swapi.tech/api/people/2",
        "https://www.swapi.tech/api/people/3",
        "https://www.swapi.tech/api/people/4",
        "https://www.swapi.tech/api/people/5",
        "https://www.swapi.tech/api/people/6",
        "https://www.swapi.tech/api/people/7",
        "https://www.swapi.tech/api/people/8",
        "https://www.swapi.tech/api/people/9",
        "https://www.swapi.tech/api/people/10",
        "https://www.swapi.tech/api/people/12",
        "https://www.swapi.tech/api/people/13",
        "https://www.swapi.tech/api/people/14",
        "https://www.swapi.tech/api/people/15",
        "https://www.swapi.tech/api/people/16",
        "https://www.swapi.tech/api/people/18",
        "https://www.swapi.tech/api/people/19",
        "https://www.swapi.tech/api/people/81"
      ],
      "planets": [
        "https://www.swapi.tech/api/planets/1",
        "https://www.swapi.tech/api/planets/2",
        "https://www.swapi.tech/api/planets/3"
      ],
      "starships": [
        "https://www.swapi.tech/api/starships/2",
        "https://www.swapi.tech/api/starships/3",
        "https://www.swapi.tech/api/starships/5",
        "https://www.swapi.tech/api/starships/9",
        "https://www.swapi.tech/api/starships/10",
        "https://www.swapi.tech/api/starships/11",
        "https://www.swapi.tech/api/starships/12",
        "https://www.swapi.tech/api/starships/13"
      ],
      "vehicles": [
        "https://www.swapi.tech/api/vehicles/4",
        "https://www.swapi.tech/api/vehicles/6",
        "https://www.swapi.tech/api/vehicles/7",
        "https://www.swapi.tech/api/vehicles/8"
      ],
      "species": [
        "https://www.swapi.tech/api/species/1",
        "https://www.swapi.tech/api/species/2",
        "https://www.swapi.tech/api/species/3",
        "https://www.swapi.tech/api/species/4",
        "https://www.swapi.tech/api/species/5"
      ],
      "created": "2021-06-08T03:36:24.637Z",
      "edited": "2021-06-08T03:36:24.637Z",
      "producer": "Gary Kurtz, Rick McCallum",
      "title": "A New Hope",
      "episode_id": 4,
      "director": "George Lucas",
      "release_date": "1977-05-25",
      "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      "url": "https://www.swapi.tech/api/films/1"
    },
    "description": "A Star Wars Film",
    "_id": "5f63a117cf50d100047f9762",
    "uid": "1",
    "__v": 0
  }
}  }
  ```

El examen está estructurado en iteraciones que irán sumando puntos:

1. Construir la clase **Starwars**.
2. Cargar el listado de películas en la __sección principal__.
3. Cargar el detalle de una película en la __sección detalle__. 
4. Bonus track: Crear el mismo esquema para personajes.

### Iteración 1: Construir la clase Starwars: (3 puntos)

Tendrás que crear una clase(`class`) para manejar la información obtenida de la API.
La clase debe tener al menos:
1. Un método que obtenga todas las películas de la API.
2. Un método que recupere la información de una película mediante su id.

_tip:_ recuerda que la api puede devolver errores que debes tratar.


### Iteración 2: Cargar el listado de películas en la sección principal. (3pts)

- La lista de títulos de películas se cargará con el evento __`click`__ del elemento 

  ```html
    <li><a id='peliculas'>PELICULAS</a></li>
  ```

- Los títulos de las películas se mostrarán como elementos de lista dentro del elemento `ul.lista` con la siguiente estructura: 

  ```html
  <li><a id='id pelicula 1'>título de la pelicula 1</a></li>
  <li><a id='id pelicula 2'>título de la pelicula 2</a></li>
  <li><a id='id pelicula 3'>título de la pelicula 3</a></li>
  ...
  ```
- Asocia un evento __`click`__ a una función que recupere la información de una película por su id.


### Iteración 3: Cargar el detalle de una película en la __sección detalle__.(3pts).

La función asociada al evento __`click`__ de cada una de las películas de la lista anterior, debe realizar las siguientes funciones:

- Recuperar el título y la descripción de la película _clicada_
- El título (campo "title") se mostrará como el texto del elemento  `<h2 id='film-title'></h2>`.
- La descripción (campo "opening_crawl" de la información de la API) se mostrará como texto del elemento  `<p id='film-description'></p>`

### Bonus Track: Recrea la misma estructura de películas para los personajes de la saga.(1pto). 

1. Obtén todos los datos de personajes de la API asociado al elemento de menú **PERSONAJES** y cárgalos asociados al elemento `ul.lista`
2. Carga el nombre del personaje en la etiqueta `<h2 id='film-title'></h2>`
3. El resto de propiedades del personaje muéstralos como un string asociado al elemento
`<p id='film-description'></p>`.


### Créditos

  La foto del fondo se ha obtenido de <a href="https://unsplash.com/@weirick?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jake Weirick</a> en <a href="https://unsplash.com/images/nature/star?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  