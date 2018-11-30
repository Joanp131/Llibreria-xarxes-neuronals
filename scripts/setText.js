const ids = ["titleText", "llenguatge", "runBut", "trainBut", "resultText", "coll0but", "coll1but", "coll2but", "coll3but", "coll4but", "text1"]

function catala() {

	$.getJSON("scripts/json/text_cat.json", function(cat) {
	    console.log(cat);
	    for (let i = 0; i < ids.length; i++) {
	    	document.getElementById(ids[i]).innerHTML = cat[ids[i]]
	    }
	});

};

function castella() {

	$.getJSON("scripts/json/text_cas.json", function(cas) {
	    console.log(cas);
	    for (let i = 0; i < ids.length; i++) {
	    	document.getElementById(ids[i]).innerHTML = cas[ids[i]]
	    }
	});

};

function angles() {
	$.getJSON("scripts/json/text_en.json", function(en) {
	    //console.log(en);
	    for (let i = 0; i < ids.length; i++) {
	    	document.getElementById(ids[i]).innerHTML = en[ids[i]]
	    }
	});



};
