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
  runBut = createButton('').attribute('onclick','run()').attribute('id','runBut').attribute('class','main').parent(father[1])
  trainBut = createButton('').attribute('onclick', 'train()').attribute('id','trainBut').attribute('class','main').parent(father[1])

  //2
  getColor()

  //3
  nn = new NeuralNetwork(3, 2, 4, 2);
}

function train() {

  /*No volem que el color canvïi, no fem getColor().*/

  /*Passem el color a un array i enviem aquest array a la xarxa neuronal perquè ens torni una resposta*/
  input = []
  input.push(r, g, b)

  answer = nn.feedforward(input);

  /*Agafem la resposta de la xarxa neuronal i la convertim en percentatges. Depenent de què ens surti, preguntarem a l'usuari si la resposta és correcta*/
  perc1 = (answer[0] * 100).toFixed(2)
  perc2 = (answer[1] * 100).toFixed(2)

  /*Depenent de la resposta de l'usuari, creem un array que contingui la resposta correcta: Clar=[1,0]; fosc=[0,1]*/
  switch (perc1 >= 50) {
    case true:
      console.log(`Això és un color clar, ${perc1}% segur`)
      document.getElementById('clar').innerText = "Clar"
      break;
    case false:
      console.log(`Això és un color fosc, ${perc2}% segur`)
      document.getElementById('clar').innerText = "Fosc"
      break;
  }

  // if(perc1 >= 50) {
  //   console.log(`Això és un color clar, ${perc1}% segur`)
  //   document.getElementById('clar').innerText = "Clar"
  // } else {
  //   console.log(`Això és un color fosc, ${perc2}% segur`)
  //   document.getElementById('clar').innerText = "Fosc"
  // }

  let result
  if (perc1 >= 50) {
    result = "clar"
  } else {
    result = "fosc"
  }

  if(confirm(`És un color ${result}?`)) {
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

  nn.backpropagation(answer, realAns)

}

function run() {

  if (color) {
    getColor()
  } else {
    color = true
  }

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

  console.log(`background r: ${r}, g: ${g}, b:${b}, is ${perc1} clar`)

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

function displayW(a) {
  a.print()
  //console.log(a.data)
}

function refresh() {
  r = document.getElementById('range_red').value
  g = document.getElementById('range_green').value
  b = document.getElementById('range_blue').value

  // document.getElementById('redValue').innerText = r
  // document.getElementById('greenValue').innerText = g
  // document.getElementById('blueValue').innerText = b

  background(r, g, b)
  color = false
  run()
}
