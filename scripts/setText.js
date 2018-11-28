

function catala() {

	$.getJSON("scripts/json/text_cat.json", function(cat) {
	    console.log(cat); // this will show the info it in firebug console
	    document.getElementById("titleText").innerHTML = cat["titleText"]
		document.getElementById("llenguatge").innerHTML = cat["llenguatge"]
		document.getElementById("runBut").innerHTML = cat["runBut"]
		document.getElementById("trainBut").innerHTML = cat["trainBut"]
		document.getElementById("resultText").innerHTML = cat["resultText"]
		document.getElementById("atention").innerHTML = cat["atention"]
		document.getElementById("runBut").innerHTML = cat["runBut"]
		document.getElementById("warn").innerHTML = cat["warn"]
	});
	
}

function castella() {
	
	$.getJSON("scripts/json/text_cas.json", function(cas) {
	    console.log(cas); // this will show the info it in firebug console
	    document.getElementById("titleText").innerHTML = cas["titleText"]
		document.getElementById("llenguatge").innerHTML = cas["llenguatge"]
		document.getElementById("runBut").innerHTML = cas["runBut"]
		document.getElementById("trainBut").innerHTML = cas["trainBut"]
		document.getElementById("resultText").innerHTML = cas["resultText"]
		document.getElementById("atention").innerHTML = cas["atention"]
		document.getElementById("runBut").innerHTML = cas["runBut"]
		document.getElementById("warn").innerHTML = cas["warn"]
	});

}

function angles() {
	document.getElementById("titleText").innerHTML = angles_text["titleText"]
	document.getElementById("llenguatge").innerHTML = angles_text["llenguatge"]
	document.getElementById("runBut").innerHTML = angles_text["runBut"]
	document.getElementById("trainBut").innerHTML = angles_text["trainBut"]
	document.getElementById("resultText").innerHTML = angles_text["resultText"]
	document.getElementById("atention").innerHTML = angles_text["atention"]
	document.getElementById("runBut").innerHTML = angles_text["runBut"]
	document.getElementById("warn").innerHTML = angles_text["warn"]
}