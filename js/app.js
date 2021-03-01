const FavoriteList = function(movies) {
    this.movies = movies;
};

const favList = new FavoriteList([]);

function populateTable() {

    let tableEl = document.getElementById('favoriteList');
    let tableBodyEl = document.getElementById('tbody1');



    for (let i in Movie.allMovies) {
        const tableRowEl = document.createElement('tr');
        tableBodyEl.appendChild(tableRowEl);

        let td1El = document.createElement('td');
        let td2El = document.createElement('td');
        let td3El = document.createElement('td');
        let td4El = document.createElement('td');
        let td5El = document.createElement('td');
        let imgEl = document.createElement('img')

        td1El.textContent = 'X';
        td2El.textContent = Movie.allMovies[i].title;
        td3El.textContent = Movie.allMovies[i].year;
        td4El.textContent = Movie.allMovies[i].category;
        imgEl.src = Movie.allMovies[i].poster;

        tableRowEl.appendChild(td1El);
        tableRowEl.appendChild(td2El);
        tableRowEl.appendChild(td3El);
        tableRowEl.appendChild(td4El);
        td5El.appendChild(imgEl);
        tableRowEl.appendChild(td5El);
    }

}


const Movie = function(title, year, category) {
    this.title = title;
    this.year = year;
    this.category = category;
    this.poster = `./images/${this.category}/${this.title}.jpg`;
    Movie.allMovies.push(this);
}

Movie.allMovies = [];



function generateMovies() {
    new Movie('man-on-fire', 2004, 'action');
    new Movie('sicario', 2015, 'action');
    new Movie('avatar', 2009, 'action');
    new Movie('drag-War', 2012, 'action');
    new Movie('The-guest', 2014, 'action');
    new Movie('300', 2006, 'action');
    new Movie('non-stop', 2014, 'action');
    new Movie('blackhat ', 2015, 'action');
    new Movie('the-revenant', 2015, 'action');
    new Movie('bad-boys-2', 2003, 'action');
    new Movie('district-b13', 2004, 'action');
    new Movie('dredd', 2012, 'action');
    new Movie('taken', 2008, 'action');
    new Movie('unstoppable ', 2010, 'action');
    new Movie('john-wick', 2014, 'action');
    new Movie('the-dark-night', 2004, 'action');
    new Movie('edge-of-tomorrow', 2014, 'action');
    new Movie('exiled', 2006, 'action');
}
console.log(Movie.allMovies);
generateMovies();
populateTable();
console.log(Movie.allMovies);