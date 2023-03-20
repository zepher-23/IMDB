
//get content from local storage

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
const url = `http://www.omdbapi.com/?apikey=3068ccba&type=movie&i=${key}`;
    fetch(url).then(response => response.json()).then(data => {
        addToList(data);
  })
}


const addToList = (data) => {
   if (data.Title === undefined) {
            }
            else {


     const listBlock = document.createElement('div');
                 listBlock.classList.add('list-block','container-md','p-3','col-lg-12');

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
            
          newMovie.classList.add('movie-title', 'p-2');

          newYear.classList.add('year-title','p-2','ml-3','text-black-50')

              

     newPoster.classList.add('col-lg-1');
     iconDiv.classList.add('iconDiv')
       newFav.classList.add('bi', 'bi-trash3-fill', 'fs-2');
    //    newFav.style.color = "rgb(31, 158, 80)";
     
    //event listner for adding and removing from favorites
     newFav.addEventListener('click', () => {
      
     removeFromFav(data);
     //remove toast
     const toastContent = document.getElementById('toast-content-remove');
     toastContent.innerHTML = data.Title;
     const toastLiveExample = document.getElementById('liveToastRemove')
     
    const toast = new bootstrap.Toast(toastLiveExample)

         toast.show()
         
         listBlock.addEventListener("transitionend", function () {
             listBlock.parentNode.removeChild(listBlock);
         })

         listBlock.classList.add("hidden");
        
 
});


     listBlock.appendChild(newPoster);
     listBlock.appendChild(newMovie);
     listBlock.appendChild(newYear);
     iconDiv.appendChild(newFav);
     listBlock.appendChild(iconDiv);
     

            list.appendChild(listBlock);
              
            }

}



// remove from favorites

const removeFromFav = (data) => {

  
  
  localStorage.removeItem(data.imdbID);
  
  
}
