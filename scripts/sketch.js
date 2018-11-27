let input = []
let answer = []
let father = []
let nn;
let r, g, b
let first
let color = true


function setup() {
  /*
    Function setup. Principals funcions:
      1. Generar el canvas a on anirà el color
      2. Demanar un color aleatori pel fons
      3. Iniciar un objecte "Xarxa neuronal"
      4. Crear botons per fer funcionar la xarxa
  */
  //1
  father[0] = document.getElementById('canvas')
  canvas = createCanvas(415, 200).attribute('id', 'color')
  canvas.parent(father[0])

  father[1] = document.getElementById('run')
  runBut = createButton('Run').attribute('onclick','run()').attribute('class','main').parent(father[1])
  trainBut = createButton('Train').attribute('onclick', 'train()').attribute('class','main').parent(father[1])
  
  //2
  getColor()

  //3
  nn = new NeuralNetwork(3, 2, 4, 2);

  //4
  
  //createButtons();
}

function train() {

  /* Que ha de fer aquesta funció?
    1. Ha d'aafar el valor del color i entrar-lo en un array
    2. Ha d'enviar l'array a la xarxa neuronal
    3. Les respostes de la xarxa neuronal, emmagatzemades a "answer" com a array de dos valors s'han de passar a percentatges i
      arrodonir-los a dues xifres
    4. S'ha de dir si la xarxa creu que el color és clar o fosc en forma de percentatge
    5. Ha d'enviar la xarxa neuronal a entrenar
  */

  //1.
  run()

  //1.
  let result
  if (perc1 >= 50) {
    result = "clar"
  } else {
    result = "fosc"
  }

  //2
  if(confirm(`És un color ${result}`)) {
    if (result == "clar") {
      realAns = [1, 0]
      document.getElementById('clar').innerText = "Clar"
    } else {
      realAns = [0, 1]
      document.getElementById('clar').innerText = "Fosc"
    }
  } else {
    if (result == "clar") {
      realAns = [0, 1]
      document.getElementById('clar').innerText = "Fosc"
    } else {
      realAns = [1, 0]
      document.getElementById('clar').innerText = "Clar"
    }
  }
  console.table(realAns);

  //3.
  nn.backpropagation(answer, realAns)

  //4.
  getColor()
}

function run() {

  input = []
  input.push(r, g, b)
  //console.log("Inputs array: ");
  //console.table(input);

  //2.
  answer = nn.feedforward(input);

  //3.
  perc1 = (answer[0] * 100).toFixed(2)
  perc2 = (answer[1] * 100).toFixed(2)

  //4.
  if(perc1 >= 50) {
    console.log(`Això és un color clar, ${perc1}% segur`)
    document.getElementById('clar').innerText = "Clar"
  } else {
    console.log(`Això és un color fosc, ${perc2}% segur`)
    document.getElementById('clar').innerText = "Fosc"
  }
  if (color) {
    getColor()
  } else {
    color = true
  }
}

function getColor() {

  /* Què ha de fer aquesta funció?
    1. Generar un color rgb random pel fons del canvas
    2. Si el color compleix el rang de rgb, assignar-lo com a color de fons del canvas
  */

  //1.
  r = Math.random() * 255
  g = Math.random() * 255
  b = Math.random() * 255

  //2.
  if (r > 255 || r < 0 || g > 255 || g < 0 || b > 255 || b < 0) {
    console.error("Something happened while choosing the background color")
    console.log(`red: ${r}, green: ${g}, blue: ${b}`)
  } else {
    background(r, g, b)
    document.getElementById('range_red').value = r
    document.getElementById('range_green').value = g
    document.getElementById('range_blue').value = b
  }
}

function createButtons() {
  weights_ih1 = createButton('weights input - hidden 1').attribute('onclick', 'nn.ih1_weights.print()');
  weights_h1h2 = createButton('weights hidden 1 - hidden 2').attribute('onclick', 'nn.h1h2_weights.print()');
  weights_ih1 = createButton('weights hidden 2 - output').attribute('onclick', 'nn.h2o_weights.print()');
}

function displayW(a) {
  a.print()
  //console.log(a.data)
}

function refresh() {
  r = document.getElementById('range_red').value
  g = document.getElementById('range_green').value
  b = document.getElementById('range_blue').value
  background(r, g, b)
  color = false
  run()
}
