/*var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	console.log('debug')
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

/* Botons: 

let tables = [
	"weights1_table"
]

function weights1 () {
	nn.ih1_weights.print()
}

function weights2 () {
	nn.h1h2_weights.print()
}

function weights3 () {
	nn.h2o_weights.print()
}

function result1 () {
	if(nn.input_values === undefined) {
		console.log(`r: ${r}, g: ${g}, b: ${b},`)
	} else {
		nn.input_values.print()
	}
}

function result2 () {
	if(nn.hidden1_ans === undefined) {
		console.warn("You need to run the neural network once to print the results")
	} else {
		nn.hidden1_ans.print()
	}
}

function result3 () {
	if(nn.hidden2_ans === undefined) {
		console.warn("You need to run the neural network once to print the results")
	} else {
		nn.hidden2_ans.print()
	}
}

function result4 () {
	if(nn.result_array === undefined) {
		console.warn("You need to run the neural network once to print the results")
	} else {
		console.table(answer)
	}
}

function error1 () {

}

function error2 () {

}

function error3 () {
	if(nn.outErr === undefined) {
		console.warn("You need to run the neural network once to print the results")
	} else {
		nn.outErr.print()
	}
}

function clearText () {
	for(let i = 0; i < tables.length; i++) {
		document.getElementById(tables[i]).style.display = "none";
	}
}
*/