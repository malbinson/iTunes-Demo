var term = "drake";
var howMany = 25;


$.ajax({
    url: "https://itunes.apple.com/search?term=" + term + "&limit=" + howMany,
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    success: function(result) {
        //console.log(result);
        myFunction(result)
    },
    error: function() {
        alert('Failed!');
    }
});

function myFunction(json) {

    console.log(json);

    $("myDiv").show();

//    $("#table").append("<img src='" + results[i].image + "'>");

 //   document.getElementById("table").innerHTML += "<img src='" + results[i].image + "'>";

    $("#audio").attr("src",json.results[0].previewUrl);


}
