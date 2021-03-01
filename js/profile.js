function populateTable() {

  let tableEl = document.getElementById('favoriteList');
  let tableBodyEl = document.getElementById('tbody1');

  aflamy = JSON.parse(localStorage.getItem('favMovies'));

  for (let i in aflamy) {
    const tableRowEl = document.createElement('tr');
    tableBodyEl.appendChild(tableRowEl);

    let td1El = document.createElement('td');
    let td2El = document.createElement('td');
    let td3El = document.createElement('td');
    let td4El = document.createElement('td');
    let td5El = document.createElement('td');
    let imgEl = document.createElement('img');

    td1El.textContent = 'X';
    td2El.textContent = aflamy[i].title;
    td3El.textContent = aflamy[i].year;
    td4El.textContent = aflamy[i].category;
    imgEl.src = aflamy[i].poster;

    tableRowEl.appendChild(td1El);
    tableRowEl.appendChild(td2El);
    tableRowEl.appendChild(td3El);
    tableRowEl.appendChild(td4El);
    td5El.appendChild(imgEl);
    tableRowEl.appendChild(td5El);
  }

}
populateTable();
