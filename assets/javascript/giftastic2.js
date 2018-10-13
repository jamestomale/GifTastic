// Adding click event listen listener to all buttons
$("button").on("click", function() {
// Grabbing and storing the data-artistl property value from the button
var artist = $(this).attr("data-artist");

// Constructing a queryURL using the artistname
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    artist + "&api_key=GV09k2FQksdiu92el58xUmSHKE7Qiu53&q=artist&limit=10&offset=0&rating=R&lang=en";

// Performing an AJAX request with the queryURL
$.ajax({
    url: queryURL,
    method: "GET"
})
    // After data comes back from the request
    .then(function(response) {
    console.log(queryURL);

    console.log(response);
    // storing the data from the AJAX request in the results variable
    var results = response.data;

    // Looping through each result item
    for (var i = 0; i < results.length; i++) {

        // Creating and storing a div tag
        var artistDiv = $("<div>");

        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + results[i].rating);

        // Creating and storing an image tag
        var artistImage = $("<img>");
        // Setting the src attribute of the image to a property pulled off the result item
        artistImage.attr("src", results[i].images.fixed_height.url);

        // Appending the paragraph and image tag to the artistDiv
        artistDiv.append(p);
        artistDiv.append(artistImage);

        // Prependng the artistDiv to the HTML page in the "#gifs-appear-here" div
        $("#gifs-appear-here").prepend(artistDiv);
    }
    });
});