let tables = [
	"weights1_table"
]

function weights1 () {
	document.getElementById("weights1_table").style.display = "inline";
}

function clearText () {
	for(let i = 0; i < tables.length; i++) {
		document.getElementById(tables[i]).style.display = "none";
	}
}