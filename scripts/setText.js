let catala_text = JSON.parse('{"titleText":"Xarxes neuronals","llenguatge":"Llenguatge", "runBut":"Endevina", "trainBut":"Entrena", "resultText":"Resultat:", "atention":"Atenció!", "warn":"La xarxa neuronal no està acabada, i tot i que sempre retorna un resultat, aquest pot no ser correcte. En cas que ho fos, seria casualitat. Estarà acabada en breus"}');
let castella_text = JSON.parse('{"titleText":"Red neuronal","llenguatge":"Lenguaje", "runBut":"Acierta", "trainBut":"Entrena", "resultText":"Resultado:", "atention":"Atención!", "warn":"La red neuronal no está terminada y, aún que siempre da un resultado, este puede no ser correcto. En caso que lo fuera, seria casualidad. Estará terminada en breves"}');
let angles_text = JSON.parse('{"titleText":"Neural network","llenguatge":"Language", "runBut":"Run", "trainBut":"Train", "resultText":"Result:", "atention":"Warning!", "warn":"This neural network is not finished. However, it will always return a result. It may not be correct, and if it is, is by coincidence. The neural network is going to be finished soon."}');

window.onload = function() {catala()};

function catala() {
	document.getElementById("titleText").innerHTML = catala_text["titleText"]
	document.getElementById("llenguatge").innerHTML = catala_text["llenguatge"]
	document.getElementById("runBut").innerHTML = catala_text["runBut"]
	document.getElementById("trainBut").innerHTML = catala_text["trainBut"]
	document.getElementById("resultText").innerHTML = catala_text["resultText"]
	document.getElementById("atention").innerHTML = catala_text["atention"]
	document.getElementById("runBut").innerHTML = catala_text["runBut"]
	document.getElementById("warn").innerHTML = catala_text["warn"]
}

function castella() {
	document.getElementById("titleText").innerHTML = castella_text["titleText"]
	document.getElementById("llenguatge").innerHTML = castella_text["llenguatge"]
	document.getElementById("runBut").innerHTML = castella_text["runBut"]
	document.getElementById("trainBut").innerHTML = castella_text["trainBut"]
	document.getElementById("resultText").innerHTML = castella_text["resultText"]
	document.getElementById("atention").innerHTML = castella_text["atention"]
	document.getElementById("runBut").innerHTML = castella_text["runBut"]
	document.getElementById("warn").innerHTML = castella_text["warn"]
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