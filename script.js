const searchBox = document.getElementById("search-box");
const searchList = document.getElementById("movie-list");
const list = document.getElementById("list")
searchBox.addEventListener("input", () => {
  // API request in real time from search box
    
  const searchTitle = searchBox.value;
// check if title exists
  if (searchTitle === "")
  {
    while (list.firstChild)
    {
      list.removeChild(list.firstChild)
     }
  }
  
// URL template
  
const apiUrl = `https://www.omdbapi.com/?apikey=3068ccba&type=movie&page=1&s=${searchTitle}`;

    fetch(apiUrl)
        .then(response => response.json())
      .then(data => {
          const results = data.Search

          const titleElements = document.getElementsByClassName('movie-title');

          let flag = 0;

        // go through the search results and display each on the front end 
        for (var j = 0; j < results.length; j++) {
          

            if (titleElements) {
              for (var i = 0; i < titleElements.length; i++) {
                if (titleElements[i].innerHTML === results[j].Title) {
                  flag = 1;
                }
                
              }

              if (flag == 0) {
                addToList(results[j]);
              }
            }
            else {
              addToList(results[j]);
            }
          }
             
  })
  .catch(error => {
    console.error(error);
  });
    
  
});




// function to update the search results

const addToList = (data) => {
  if (data.Title === undefined) {
     
    }
            else {

// create required elements
     const listBlock = document.createElement('div');
     const newMovie = document.createElement('a');
     const newYear = document.createElement('div');
     const newPoster = document.createElement('img');
     const iconDiv = document.createElement('div');
     const newFav = document.createElement('i')
     

     newMovie.textContent = data.Title;
     newMovie.href= `./movie.html?data=${data.imdbID}`
     newYear.textContent = data.Year
              if (data.Poster === "N/A")
              {
                newPoster.src = './img/poster.png'
                newPoster.alt = 'Poster image';
              }
              else {
                newPoster.src = data.Poster;
            newPoster.alt = 'Poster image';
    }
    
    // add classes to the created elements 

     listBlock.classList.add('list-block','container-md','p-3','bg-secondary-subtle','col-lg-12');
     newMovie.classList.add('movie-title', 'p-2');
     newYear.classList.add('year-title','p-2','ml-3','text-black-50')
     newPoster.classList.add('col-lg-1');
     iconDiv.classList.add('iconDiv')
     newFav.classList.add('bi', 'bi-star-fill', 'fs-2');
     
    //event listner for adding and removing from favorites
     newFav.addEventListener('click', () => {
       console.log()
       if (newFav.style.color === 'rgb(31, 158, 80)')
       {
         newFav.style.color = previousColor;
         removeFromFav(data);

     //remove toast
    const toastContent = document.getElementById('toast-content-remove');
    toastContent.innerHTML = data.Title;
    const toastLiveExample = document.getElementById('liveToastRemove')
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
     
  } else {
    previousColor = newFav.style.color;
    newFav.style.color = 'rgb(31, 158, 80)';
     addToFav(data);
     //add toast
     const toastContent = document.getElementById('toast-content');
     toastContent.innerHTML = data.Title;
     const toastLiveExample = document.getElementById('liveToast')
     
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  
  }
});

// append the new list elements 
     listBlock.appendChild(newPoster);
     listBlock.appendChild(newMovie);
     listBlock.appendChild(newYear);
     iconDiv.appendChild(newFav);
     listBlock.appendChild(iconDiv);
     list.appendChild(listBlock);
              
            }

}

// add to favorites using local storage 

const addToFav = (data) => {
  localStorage.setItem(data.imdbID, data.Title);
  
}


// remove from favorites/ local storage

const removeFromFav = (data) => {
  localStorage.removeItem(data.imdbID);
  
}

