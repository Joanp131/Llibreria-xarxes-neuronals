/************************************************************************************************************************************
 Sketch.js
 Les funcions d'aquest programa són:
  1. Generar un color random per passar-lo a la xarxa neuronal
  2. Donar el color a la xarxa neuronal
  3. Rebre una resposta de la xarxa neuronal
  4. Preguntar la resposta:
    Era el color clar o fosc? --> I obtenir una resposta de la persona
  5. Agafar la resposta de la persona, el valor del color i entrenar la xarxa neuronal artificial
*/

let input = []
let answer = []
let father = []
let nn;
let r, g, b

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
  canvas = createCanvas(200, 200).attribute('id', 'color').style('background-color','red')
  canvas.parent(father[0])

  father[1] = document.getElementById('run')
  confrim = createButton('run').attribute('onclick', 'run()').parent(father[1])
  //2
  getColor()

  //3
  nn = new NeuralNetwork(3, 2, 4, 2);

  //4
  
  //createButtons();
}

function run() {

  /* Que ha de fer aquesta funció?
    1. Ha d'aafar el valor del color i entrar-lo en un array
    2. Ha d'enviar l'array a la xarxa neuronal
    3. Les respostes de la xarxa neuronal, emmagatzemades a "answer" com a array de dos valors s'han de passar a percentatges i
      arrodonir-los a dues xifres
    4. S'ha de dir si la xarxa creu que el color és clar o fosc en forma de percentatge
    5. Ha d'enviar la xarxa neuronal a entrenar
  */

  //1.
  input = []
  input.push(r, g, b)
  console.log("Inputs array: ");
  console.table(input);

  //2.
  answer = nn.feedforward(input);

  //3.
  perc1 = (answer[0] * 100).toFixed(2)
  perc2 = (answer[1] * 100).toFixed(2)

  //4.
  if(perc1 >= 50) {
    console.log(`Això és un color clar, ${perc1}% segur`)
  } else {
    console.log(`Això és un color fosc, ${perc2}% segur`)
  }

  //5.
  train();
}

function train() {

  /* Què ha de fer aquesta funció?
    1. Ha de preguntar a la persona si el color era clar o fosc
    2. S'ha de posar el valor del resultat esperat en un array per entrenar la xarxa neuronal artificial
    3. Amb la resposta de la xarxa neuronal i la resposta real s'ha d'entrenar la xarxa neuronal
    4. Quan la xarxa ja hagui entrenat, generar un nou color com a fons
  */

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
    } else {
      realAns = [0, 1]
    }
  } else {
    if (result == "clar") {
      realAns = [0, 1]
    } else {
      realAns = [1, 0]
    }
  }
  console.table(realAns);

  //3.
  nn.backpropagation(answer, realAns)

  //4.
  getColor()
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
