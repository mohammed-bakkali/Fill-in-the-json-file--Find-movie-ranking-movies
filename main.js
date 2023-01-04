
// Make an HTTP request to get the JSON file
let request = new XMLHttpRequest();
request.open('GET', "Movies.json", true);  //He started a request calling 
request.send(); //Send request
var searchResults = [];
var jsData;
// var actorsList;

// Wait for the request to complete
request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // Parse the JSON data
    jsData = JSON.parse(request.responseText);
    let html = '';
    for (let i = 0; i < jsData.length; i++) {
      let actorsList = '';
      for (let k = 0; k < jsData[i].actors.length; k++) {
        actorsList +=
          `
          <ul class="list-group">
            <li class="list-group-item">${jsData[i].actors[k].name}</li>
            <li class="list-group-item">${jsData[i].actors[k].Age}</li>
            <li class="list-group-item">${jsData[i].actors[k].nationality}</li>
          </ul>
          `
      }
      let  festivalsList = '';
      for (let x = 0; x < jsData[i].festivals.length; x++) {
        festivalsList +=
          `
          <ul class="list-group">
          <li class="list-group-item">${jsData[i].festivals[x]}</li>
          </ul>
          `
      }
    
      html += `<tr>
          <td><img src =${jsData[i].url}></td>
          <td>${jsData[i].title}</td>
          <td>${jsData[i].duration}</td>
          <td  onclick="sortTable()">${jsData[i].year} </td>
          <td>${jsData[i].director}</td>
          <td>${festivalsList}</td>
          <td>${actorsList}</td>
        </tr> `
    }
    document.getElementById('container').innerHTML = html;
    // Build the HTML representation of the search results
  }
}
let inp = document.getElementById('inp')
//--------------------------------------- Search the data-------------------------------//
function searchData(){
  let html = '';
  jsData;
  let actorsList = ''; 
  for (let i = 0; i < jsData.length; i++) {
    searchResults.push(jsData[i]);
    if (jsData[i].title.toLocaleUpperCase().includes(inp.value.toLocaleUpperCase())) { // == true
      // searchResults.push(jsData[i]);   // add data to array
      actorsList = "";
      for (let k = 0; k < jsData[i].actors.length; k++) {   
        actorsList +=
          `
            <ul class="list-group">
              <li class="list-group-item">${jsData[i].actors[k].name}</li>
              <li class="list-group-item">${jsData[i].actors[k].Age}</li>
              <li class="list-group-item">${jsData[i].actors[k].nationality}</li>
            </ul>
            `
      }

      let  festivalsList = '';
      for (let x = 0; x < jsData[i].festivals.length; x++) {
        festivalsList +=
          `
          <ul class="list-group">
          <li class="list-group-item">${jsData[i].festivals[x]}</li>
          </ul>
          `
      }
      html += ` 
        <tr>
        <td><img src =${searchResults[i].url}></td>
        <td>${searchResults[i].title}</td>
        <td>${searchResults[i].duration}</td>
        <td>${searchResults[i].year}</td>
        <td>${searchResults[i].director}</td>
        <td>${festivalsList}</td>
        <td>${actorsList}</td>
      </tr> `
      // Insert the HTML into the DOM
    }
  }
  document.getElementById('container').innerHTML = html;
}
//-------------------------------arrangement DATA---------------------------------//
function sortTable1(){
  // Sort the movies by year
  jsData.sort(function (a, b) {
    return a.year - b.year;
  });
  // Update the table with the sorted movies
  updateTable();
}

function sortTable2(){
  // Sort the movies by year in descending order
  jsData.sort(function (a, b) {
    return b.year - a.year;
  });
  updateTable();
}


function updateTable() {
  let html = '';
  jsData;
  for (let i = 0; i < jsData.length; i++) {
    let actorsList = '';
    for (let k = 0; k < jsData[i].actors.length; k++) {
      actorsList +=
        `
        <ul class="list-group">
          <li class="list-group-item">${jsData[i].actors[k].name}</li>
          <li class="list-group-item">${jsData[i].actors[k].Age}</li>
          <li class="list-group-item">${jsData[i].actors[k].nationality}</li>
        </ul>
        `
    }

    let  festivalsList = '';
    for (let x = 0; x < jsData[i].festivals.length; x++) {
      festivalsList +=
        `
        <ul class="list-group">
        <li class="list-group-item">${jsData[i].festivals[x]}</li>
        </ul>
        `
    }
    html += `<tr>
        <td><img src =${jsData[i].url}</td>
        <td>${jsData[i].title}</td>
        <td>${jsData[i].duration}</td>
        <td>${jsData[i].year}</td>
        <td>${jsData[i].director}</td>
        <td>${festivalsList}</td>
        <td>${actorsList}</td>
      </tr> `
  }
  document.getElementById('container').innerHTML = html;
}



