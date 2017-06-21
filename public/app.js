var app = function(){

  var url = 'https://api.punkapi.com/v2/beers'
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();
  // console.log("request", request)

  request.addEventListener('load', function() {

    
  var jsonString = request.responseText;
  var beers = JSON.parse(jsonString);
  console.log(beers)


  var ul = document.createElement("ul");
  var img = document.createElement('img')

  beers.forEach(function(beer) {
    var liBeerDetails = document.createElement("li")
    var img = document.createElement('img')
    // var liAbv = document.createElement('li')
    // liName.innerText = beer.name
    // liAbv.innerText = beer.abv
     liBeerDetails.innerText =  beer.name + " " + beer.abv + " ";
     img.src = beer.image_url
     img.height = 200;
    ul.appendChild(liBeerDetails);
    ul.appendChild(img)

    // liName.appendChild(liAbv)

  })

  var main = document.getElementById('main')
  main.appendChild(ul)
  })
}



// var populateList = function(beers) {
//   beerNameList = document.getElementById("main")

// beers.forEach(beer, index) {

//   var option = document.createElement
// }

// }

window.addEventListener('load', app);

// var populateSelect = function(countries) {

//   var countryList = document.getElementById("country-list");
//   countryList.addEventListener("change", function (event) {
//     showDetails(event, countries);
//   })

//   countries.forEach(function(country, index) {
//     var option = document.createElement("option");
//     option.innerText = country.name
//     option.value = index;
    
//     countryList.appendChild(option);

//   });

// }