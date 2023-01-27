$(document).ready(function() {

// Start your code from here

let temas = [
    "action", "blue", "salsa", "Mario", "beauty", "power",
    "bird", "cycling", "turtle", "videogames", "3d",
    "Sonic", "Link", "twilight", "destiny", "running",
    "capybara", "path", "power of friendship", "sand", "sword"
  ];


  function populateButtons(array){
    $("#animal-buttons").empty();

array.forEach(element => {
    
    let a = $("<button>");
    a.text(element)
    a.addClass("animal-button")
    a.attr("data-type",element)
    $("#animal-buttons").append(a);
});
}


// La logica del click de cada boton para hacer la llamada al API -- LISTOOOOOO
$("#animal-buttons").on("click", ".animal-button", function() {
    
    $("#animals").empty();
    let temaName = $(this).attr("data-type");
    let apiKey = 'vy2X3alZ1Yl8WAhJpfVakiBiOaugG3kU';
    let gifURL = `https://api.giphy.com/v1/gifs/search?q=${temaName}&api_key=${apiKey}&limit=10`;
    console.log(gifURL)

    $.ajax({
        url: gifURL,
        method: "GET"
    }).then(function(respuesta){

        // respuesta2 = JSON.stringify(respuesta.data.length) PRUEBASSS
        // $("#animals").append(`<h2> ${respuesta2} </h2>`) PRUEBASSSS
        for (const element of respuesta.data){
            let rating = element.rating
            let still_Img = element.images.fixed_height_still.url
            let moving_Img = element.images.fixed_height.url

            $("#animals").append(`<div class="random-item"> <p> ${rating} </p> <img class=random-image src=${still_Img} data-still=${still_Img} data-animate=${moving_Img} data-state="still"> </div>`)
        }

    })

})


// La lógica del click de cada imagen para "intercambiar las urls" -- LISTOOOOO
$("#animals").on("click", ".random-image", function(){

    let estado = $(this).attr('data-state');

    if(estado == "still"){
        $(this).attr("src",$(this).attr("data-animate"))
        $(this).attr("data-state","animate");
    }
    else{
        $(this).attr("src",$(this).attr("data-still"))
        $(this).attr("data-state","still");
    }

})


// La lógica del formulario para agregar mas botones a la lista
$("#add-animal").on("click", function(e) {
 
    e.preventDefault();
    let tema = $("#animal-input").val().trim()
    temas.push(tema);
    populateButtons(temas);

})

populateButtons(temas);
});

/*
    var 

*/
