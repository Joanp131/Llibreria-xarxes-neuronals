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
let nn;
let r, g, b

function setup() {
  /*
    Function setup. Principals funcions:
      1. Generar el canvas a on anirà el color
      2. Demanar un color aleatori pel fons
      3. Crear un botó per fer funcionar la xarxa neuronal artificial
  */
  canvas = createCanvas(200, 200).attribute('id', 'canvas')
  getColor()
  nn = new NeuralNetwork(3, 2, 4, 2);
  confrim = createButton('run').attribute('onclick', 'run()')
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
        (De moment es demana a la persona que escrigui que era el color, però lo millor seria que a
        l'alert hi hagués dos botons amb cada una de les possibilitats)
    2. S'ha de posar el valor del resultat esperat en un array per entrenar la xarxa neuronal artificial
    3. Amb la resposta de la xarxa neuronal i la resposta real s'ha d'entrenar la xarxa neuronal
    4. Quan la xarxa ja hagui entrenat, generar un nou color com a fons
  */

  //1.
  let result = prompt(`Resultat del perceptró = Clar: ${perc1}%, fosc ${perc2}%.\nQuin era el resultat correcte?: `, 'clar o fosc')

  //2.
  if (result == 'clar' || result == 'Clar') {
    realAns = [1, 0]
  } else if (result == 'fosc' || result === 'Fosc') {
    realAns = [0, 1]
  }

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
    console.error("Something happened while choosingg the background color")
    console.log(`red: ${r}, green: ${g}, blue: ${b}`)
  } else {
    background(r, g, b)
  }
}
