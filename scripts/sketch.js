let input = []
let answer = []
let father = []
let nn;
let r, g, b
let color = true

function setup() {
  loadLanguage('cat');

  father[0] = document.getElementById('canvas')
  canvas = createCanvas(415, 200).attribute('id', 'color')
  canvas.parent(father[0])

  father[1] = document.getElementById('run')
  runBut = createButton('').attribute('onclick', 'run()').attribute('id', 'runBut').attribute('class', 'main').parent(father[1])
  trainBut = createButton('').attribute('onclick', 'train()').attribute('id', 'trainBut').attribute('class', 'main').parent(father[1])
  autoTrainBut = createButton('').attribute('onclick', 'autoTrain()').attribute('id', 'autoBut').attribute('class', 'main').parent(father[1])
  stopBut = createButton('').attribute('onclick', 'autoTrain()').attribute('id', 'stopBut').attribute('class', 'main').parent(father[1]).attribute("style", "display: none")

  //2
  getColor()

  //3
  nn = new NeuralNetwork(3, 2, 4, 2);

  refresh();
  retrieveData()
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

  if (confirm(`És un color ${result}?`)) {
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

  saveWeights();

}

function autoTrain() {
  hola = 0;
  /*Ask user for reiterations (n) --> do train function n times with the hsv color value as brightness*/

  //Get the buttons into variables
  train = document.getElementById("autoBut")
  stop = document.getElementById('stopBut')
  loop = true;

  //Toggle de displayed button
  train.style.display = "none"
  stop.style.display = "block"

  //Train while the Stop button is not pressed
  setTimeout(autoTrainData, 2000);

  //Stop function


}

function autoTrainData() {

  let answerDes;

  //change the color to run again
  getColor();

  //Convert color to HSV value
  v = rgb2hsv(r, g, b).v

  //Depending on the "v" value the color is bright or dark
  if(v >= 50) {
    answerDes = [1,0]
  } else if (v < 50){
    answerDes = [0,1]
  }

  //Run NN
  let inp =  [r, g, b]
  ansNN = nn.feedforward(inp);
  nn.backpropagation(ansNN, answerDes)

  //If stop button is clicked, stop
  stop.addEventListener("click", _=> {
    loop = false;
    //console.clear();
    stop.style.display = "none"
    train.style.display = "block"
    //saveWeights();
  })

  //Recall itself to train again
  if (loop) {
    //console.log("Train loop!")
    hola++
    v = 0;
    answerDes = []
    inp = []
    ansNN = []

    if (hola % 1000 == 0) {
      console.log("1000 loops, Saving weights!")
      saveWeights()
    }

    setTimeout(autoTrainData, 5)
  }
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
  if (perc1 >= 50) {
    console.log(`Això és un color clar, ${perc1}% segur`)
    document.getElementById('clar').innerText = "Clar"
  } else {
    console.log(`Això és un color fosc, ${perc2}% segur`)
    document.getElementById('clar').innerText = "Fosc"
  }

  //console.log(`background r: ${r}, g: ${g}, b:${b}, is ${perc1} clar`)

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

  //console.log(rgb2hsv(r, g, b).v)
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

function rgb2hsv () {
    var rr, gg, bb,
        a = arguments[0] / 255,
        c = arguments[1] / 255,
        d = arguments[2] / 255,
        h, s,
        v = Math.max(a, c, d),
        diff = v - Math.min(a, c, d),
        diffc = function(i){
            return (v - i) / 6 / diff + 1 / 2;
        };

    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(a);
        gg = diffc(c);
        bb = diffc(d);

        if (a === v) {
            h = bb - gg;
        }else if (c === v) {
            h = (1 / 3) + rr - bb;
        }else if (d === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        v: Math.round(v * 100)
    };
}
