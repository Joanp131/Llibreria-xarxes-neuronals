let ids = ["titleText", "llenguatge", "runBut", "trainBut", "resultText", "atention", "warn", "coll0but"]

function catala() {

	$.getJSON("scripts/json/text_cat.json", function(cat) {
	    //console.log(cat); 
	    for (let i = 0; i < ids.length; i++) {
	    	document.getElementById(ids[i]).innerHTML = cat[ids[i]]
	    }
	});


}

function castella() {
	
	$.getJSON("scripts/json/text_cas.json", function(cas) {
		// console.log("funciona?")
	 //    console.log(cas); 
	    for (let i = 0; i < ids.length; i++) {
	    	document.getElementById(ids[i]).innerHTML = cas[ids[i]]
	    }
	});


}

function angles() {
	$.getJSON("scripts/json/text_en.json", function(en) {
	    //console.log(en); 
	    for (let i = 0; i < ids.length; i++) {
	    	document.getElementById(ids[i]).innerHTML = en[ids[i]]
	    }
	});

	

}