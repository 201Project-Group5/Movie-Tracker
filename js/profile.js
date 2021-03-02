function populateTable() {

  let tableEl = document.getElementById('favoriteList');
  let tableBodyEl = document.getElementById('tbody1');
  tableEl.appendChild(tableBodyEl);

  let aflamy = JSON.parse(localStorage.getItem('favMovies'));

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

function populateWatchTable(){
  let tableEl2 = document.getElementById('watchList');
  let tableBodyEl2 = document.getElementById('tbody2');
  tableEl2.appendChild(tableBodyEl2);

  let aflamy2 = JSON.parse(localStorage.getItem('watchMovies'));

  for (let x in aflamy2){
    const tableRowEl2 = document.createElement('tr');
    tableBodyEl2.appendChild(tableRowEl2);

    let td1El2 = document.createElement('td');
    let td2El2 = document.createElement('td');
    let td3El2 = document.createElement('td');
    let td4El2 = document.createElement('td');
    let imgEl2 = document.createElement('img');

    td1El2.textContent = 'X';
    td2El2.textContent = aflamy2[x].title;
    td3El2.textContent = aflamy2[x].year;
    td4El2.textContent = aflamy2[x].category;
    imgEl2.src = aflamy2[x].poster;

    tableRowEl2.appendChild(td1El2);
    tableRowEl2.appendChild(td2El2);
    tableRowEl2.appendChild(td3El2);
    tableRowEl2.appendChild(td4El2);
    tableRowEl2.appendChild(imgEl2);
  }

}



populateTable();
populateWatchTable();
