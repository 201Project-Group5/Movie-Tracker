const FavoriteList = function(favMovies) {
  this.favMovies = favMovies;
};

const favList = new FavoriteList([]);


FavoriteList.prototype.addToFavList = function(title, year, category, poster) {
  this.favMovies.push(new Movie(title, year, category, poster));
  // console.log(this.favMovies);
};

FavoriteList.prototype.saveToLocalStorage = function() {
  const movies = JSON.parse(localStorage.getItem('favMovies'));
  if (movies===null){
      movies=[];
  }

  localStorage.setItem('favMovies', JSON.stringify(movies.concat(this.favMovies)));
};





const Movie = function(title, year, category) {
  this.title = title;
  this.year = year;
  this.category = category;
  this.poster = `../images/${this.category}/${this.title}.jpg`;
  Movie.allMovies.push(this);
};

Movie.allMovies = [];

function generateMovies() {
  new Movie('man-on-fire', 2004, 'action');
  new Movie('sicario', 2015, 'action');
  new Movie('avatar', 2009, 'action');
  new Movie('drag-war', 2012, 'action');
  new Movie('the-guest', 2014, 'action');
  new Movie('300', 2006, 'action');
  new Movie('non-stop', 2014, 'action');
  new Movie('blackhat', 2015, 'action');
  new Movie('the-revenant', 2015, 'action');
  new Movie('bad-boys-2', 2003, 'action');
  new Movie('district-b13', 2004, 'action');
  new Movie('dredd', 2012, 'action');
  new Movie('taken', 2008, 'action');
  new Movie('Unstoppable', 2010, 'action');
  new Movie('john-wick', 2014, 'action');
  new Movie('the-dark-night', 2004, 'action');
  new Movie('edge-of-tomorrow', 2014, 'action');
  new Movie('exiled', 2006, 'action');
  new Movie('the-raid', 2011, 'action');
  new Movie('kill-bill', 2003, 'action');
  new Movie('all-is-lost', 2013, 'action');
  new Movie('shaolin-soccer', 2001, 'action');
  new Movie('hot-fuzz', 2007, 'action');
  new Movie('elite-squad', 2007, 'action');
  new Movie('fast-five', 2011, 'action');

  new Movie('12-Angry-Men', 1957, 'drama');
  new Movie('12-Years-a-Slave', 2013, 'drama');
  new Movie('1917', 2020, 'drama');
  new Movie('Argo', 2012, 'drama');
  new Movie('Baby-Driver', 2017, 'drama');
  new Movie('Boyhood', 2014, 'drama');
  new Movie('Brooklyn', 2015, 'drama');
  new Movie('Chinatown', 1974, 'drama');
  new Movie('creed', 2015, 'drama');
  new Movie('Dunkirk', 2017, 'drama');
  new Movie('First-Man', 2018, 'drama');
  new Movie('Gravity', 2013, 'drama');
  new Movie('La-La-Land', 2016, 'drama');
  new Movie('Lady-Bird', 2017, 'drama');
  new Movie('Marriage-Story', 2019, 'drama');
  new Movie('Parasite', 2019, 'drama');
  new Movie('paterson', 2016, 'drama');
  new Movie('Roma', 2018, 'drama');
  new Movie('The-Farewell', 2019, 'drama');
  new Movie('The-Irishman', 2019, 'drama');
  new Movie('The-Shape-of-Water', 2017, 'drama');
  new Movie('The-Social-Network', 2010, 'drama');
  new Movie('The-Wrestler', 2008, 'drama');
  new Movie('Widows', 2018, 'drama');
  new Movie('A-Star-Is-Born', 2018, 'drama');

  new Movie('28-Days-Later', 2002, 'horror');
  new Movie('alien', 1979, 'horror');
  new Movie('evil-dead-2', 1987, 'horror');
  new Movie('get-out', 2017, 'horror');
  new Movie('Halloween', 1978, 'horror');
  new Movie('Hereditary', 2018, 'horror');
  new Movie('host', 2020, 'horror');
  new Movie('Insidious', 2010, 'horror');
  new Movie('It-Follows', 2015, 'horror');
  new Movie('jaws', 1975, 'horror');
  new Movie('Paranormal-Activity', 2007, 'horror');
  new Movie('rec', 2007, 'horror');
  new Movie('saw', 2004, 'horror');
  new Movie('scream', 1996, 'horror');
  new Movie('Sinister', 2012, 'horror');
  new Movie('The-Babadook', 2014, 'horror');
  new Movie('The-Cabin-in-the-Woods', 2011, 'horror');
  new Movie('The-Conjuring', 2013, 'horror');
  new Movie('The-Exorcist', 1973, 'horror');
  new Movie('the-ring', 2002, 'horror');
  new Movie('The-Shining', 1980, 'horror');
  new Movie('The-Thing', 1982, 'horror');
  new Movie('The-Witch', 2015, 'horror');
  new Movie('us', 2019, 'horror');

  new Movie('Airplane', 1980, 'comedy');
  new Movie('Big', 1988, 'comedy');
  new Movie('BlacKkKlansman', 2018, 'comedy');
  new Movie('Booksmart', 2019, 'comedy');
  new Movie('Bridesmaids', 2011, 'comedy');
  new Movie('Dumb-And-Dumber', 1994, 'comedy');
  new Movie('Enough-Said', 2013, 'comedy');
  new Movie('Four-Lions', 2010, 'comedy');
  new Movie('Groundhog-Day', 1993, 'comedy');
  new Movie('Juno', 2007, 'comedy');
  new Movie('Manhattan', 1979, 'comedy');
  new Movie('mean-girls', 2004, 'comedy');
  new Movie('Mrs-Doubtfire', 1993, 'comedy');
  new Movie('Old-School', 2003, 'comedy');
  new Movie('School-of-Rock', 2003, 'comedy');
  new Movie('Sideways', 2004, 'comedy');
  new Movie('spy', 2015, 'comedy');
  new Movie('Superbad', 2007, 'comedy');
  new Movie('The-Big-Sick', 2017, 'comedy');
  new Movie('The-Mask', 1994, 'comedy');
  new Movie('The-Muppets', 2011, 'comedy');
  new Movie('The-Nice-Guys', 2016, 'comedy');
  new Movie('The-Truman-Show', 1998, 'comedy');
  new Movie('Trainwreck', 2015, 'comedy');
  new Movie('Zoolander', 2001, 'comedy');
}

generateMovies();
