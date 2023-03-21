// get the id from the url
const params = new URLSearchParams(window.location.search);
const id = params.get('data');

const elementTitle = document.getElementById('title');
const elementYear = document.getElementById('year');
const elementPlot = document.getElementById('plot');
const elementWriter = document.getElementById('writer');
const elementLang = document.getElementById('lang');
const elementDirector = document.getElementById('director');
const elementActors = document.getElementById('actors');
const elementRating = document.getElementById('rating');
const elementCountry = document.getElementById('country');
const elementGenre = document.getElementById('genre');


const apiUrl = `http://www.omdbapi.com/?apikey=3068ccba&type=movie&i=${id}`;

// fetch id details
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const title = data.Title;
        const released = data.Released;
        const lang = data.Language;
        const plot = data.Plot;
        const posterUrl = data.Poster;
        const director = data.Director;
        const actors = data.Actors;
        const imdbRating = data.imdbRating;
        const country = data.Country;
        const genre = data.Genre;
        const writer = data.Writer

const posterElement = document.getElementById('poster');
const posterInsert = document.createElement('img');
if (data.Poster === "N/A")
{
  posterInsert.src = './img/poster.png'
  posterInsert.alt = 'Poster image';
}
else {
    posterInsert.src = posterUrl;
posterInsert.alt = 'Poster image';
}

posterElement.appendChild(posterInsert)
insertInfo(title,elementTitle);
insertInfo(released,elementYear);
insertInfo(plot,elementPlot);
insertInfo(lang,elementLang);
insertInfo(director,elementDirector);
insertInfo(actors,elementActors);
insertInfo(imdbRating,elementRating);
insertInfo(country,elementCountry);
insertInfo(genre,elementGenre);
insertInfo(writer,elementWriter);

        
})

// insert data into html on the front end 
const insertInfo =(data,elementName) =>{
    const element = document.createElement('p');
    element.textContent = data;
    elementName.appendChild(element);
}