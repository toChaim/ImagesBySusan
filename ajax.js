/*

// https://learnwebcode.github.io/json-example/animals-1.json
// https://learnwebcode.github.io/json-example/animals-2.json
// https://learnwebcode.github.io/json-example/animals-3.json
var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");

btn.addEventListener("click", function(){

	var ourRequest = new XMLHttpRequest();
	ourRequest.open(
		'GET', 
		'https://learnwebcode.github.io/json-example/animals-1.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	};

	ourRequest.send();

});

function renderHTML(data) {
	var htmlString = "this is a test";
	animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

*/

$(document).ready(function () {
	console.log("Ready");

	$("#btn").on('click', function(){

		// hhttps://stackoverflow.com/questions/18480550/how-to-load-all-the-images-from-one-of-my-folder-into-my-web-page-using-jquery

		var dir = "learnwebcode.github.io/json-example/";
		var fileextension = ".jpg";
		$.ajax({
		    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
		    url: dir,
		    success: function (data) {
		        //List all .jpg file names in the page
		        $(data).find(
		        	"a:contains(" + fileextension + ")").each(
		        	function () {
		            	var filename = this.href.replace(window.location.host, "").replace("https://", "");
		            $("body").append("<img src='" + dir + filename + "'>");
		        });
		    }
		});

	});

});