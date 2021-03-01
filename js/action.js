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
      const favEl = document.createElement('a');
      boxEl.appendChild(favEl);
      favEl.textContent = 'Add to Favourite ';
      const watchEl = document.createElement('a');
      boxEl.appendChild(watchEl);
      watchEl.textContent = 'Add to Watch List';
      movieImg.src = Movie.allMovies[i].poster;
    }
  }

}

actionRender();
