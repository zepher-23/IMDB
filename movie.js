const params = new URLSearchParams(window.location.search);
const id = params.get('data');


const apiUrl = `http://www.omdbapi.com/?apikey=3068ccba&type=movie&i=${id}`;


fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const title = data.Title;
        
})