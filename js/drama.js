function dramaRender() {

    const container = document.getElementById('dramacontent');
    for (let i = 0; i < Movie.allMovies.length; i++) {
      if (Movie.allMovies[i].category === 'drama') {
        const rowEl = document.createElement('section');
        container.appendChild(rowEl);
        const boxEl = document.createElement('article');
        rowEl.appendChild(boxEl);
        const movieImg = document.createElement('img');
        boxEl.appendChild(movieImg);
        const movieTitle = document.createElement('h2');
        boxEl.appendChild(movieTitle);
        console.log('movieIndex');
        const favEl = document.createElement('button');
        boxEl.appendChild(favEl);
        favEl.textContent = 'Add to Favourite ';
        favEl.id = i ; 

        const watchEl = document.createElement('a');
        boxEl.appendChild(watchEl);
        watchEl.textContent = 'Add to Watch List';
        movieImg.src = Movie.allMovies[i].poster;
      }
    }
  }
  console.log('movieIndex');
  function handleAddToFav2(event) {
    event.preventDefault();

    let movieIndex = event.target.id;

    // console.log(movieIndex);
    console.log('movieIndex');
    let movieObject = Movie.allMovies[movieIndex];

    favList.addToFavList(movieObject.title, movieObject.year, movieObject.category, movieObject.poster);

    favList.saveToLocalStorage();
}


dramaContent = document.getElementById('dramacontent');

dramaContent.addEventListener('add', handleAddToFav2);


dramaRender();