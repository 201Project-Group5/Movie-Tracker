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

            console.log("inside if");

            let movieObject = Movie.allMovies[i];

            favList.addToFavList(movieObject.title, movieObject.year, movieObject.category, movieObject.poster);

            favList.saveToLocalStorage();

            break;

        }
    }

}


horrorContent = document.getElementById('horrorcontent');

horrorContent.addEventListener('click', handleAddToFav4);



horrorRender();