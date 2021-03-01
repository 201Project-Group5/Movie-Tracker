function actionRender() {

  const container = document.getElementById('actioncontent');
  for (let i = 0; i < Movie.allMovies.length; i++) {
    if (Movie.allMovies[i].category === 'action') {
      const rowEl = document.createElement('section');
      container.appendChild(rowEl);

      const boxEl = document.createElement('article');
      rowEl.appendChild(boxEl);

      const movieImg = document.createElement('img');
      boxEl.appendChild(movieImg);

      const movieTitle = document.createElement('h2');
      boxEl.appendChild(movieTitle);

      const favEl = document.createElement('button');
      boxEl.appendChild(favEl);
      favEl.textContent = 'Add to Favourite ';
      favEl.id = i;

      const watchEl = document.createElement('button');
      boxEl.appendChild(watchEl);
      watchEl.textContent = 'Add to WatchList';
      watchEl.id = Movie.allMovies[i].title;

      movieImg.src = Movie.allMovies[i].poster;
    }
  }

}



function handleAddToFav(event) {
  event.preventDefault();
  let movieIndex = event.target.id;

  let movieObject = Movie.allMovies[movieIndex];
  console.log(movieObject);

  favList.addToFavList(movieObject.title, movieObject.year, movieObject.category, movieObject.poster);

  favList.saveToLocalStorage();
}


actionContent = document.getElementById('actioncontent');

actionContent.addEventListener('click', handleAddToFav);

actionRender();
