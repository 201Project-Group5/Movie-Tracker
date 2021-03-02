function horrorRender() {

  const container = document.getElementById('horrorcontent');
  for (let i = 0; i < Movie.allMovies.length; i++) {
    if (Movie.allMovies[i].category === 'horror') {
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
      favEl.id = Movie.allMovies[i].title;

      const watchEl = document.createElement('button');
      boxEl.appendChild(watchEl);
      watchEl.textContent = 'Add to Watch List';
      watchEl.id = Movie.allMovies[i].poster;
      movieImg.src = Movie.allMovies[i].poster;
    }
  }
}

function handleAddToFav4(event) {
  event.preventDefault();

  let movieTitle = event.target.id;

  console.log(movieTitle);

  for (let i = 0; i < Movie.allMovies.length; i++) {

    if (movieTitle === Movie.allMovies[i].title) {

      console.log('inside if');

      let movieObject = Movie.allMovies[i];

      favList.addToFavList(movieObject.title, movieObject.year, movieObject.category, movieObject.poster);

      favList.saveToLocalStorage();

      break;

    }
  }

}


horrorContent = document.getElementById('horrorcontent');

horrorContent.addEventListener('click', handleAddToFav4);




function handleAddToWatch4(event) {
  event.preventDefault();

  let moviePoster = event.target.id;

  console.log(moviePoster);

  for (let i = 0; i < Movie.allMovies.length; i++) {

    if (moviePoster === Movie.allMovies[i].poster) {

      console.log('inside if');

      let movieObject = Movie.allMovies[i];

      myWatchList.myWatchList(movieObject.title, movieObject.year, movieObject.category, movieObject.poster);

      myWatchList.saveToLocalStorage2();

      break;

    }
  }
}
horrorContent.addEventListener('click', handleAddToWatch4);

horrorRender();
