window.onload = function() {
  var config = {
    apiKey: "AIzaSyCnnz5l9BuDYI5k-65GPF1n2YiGelfMWlY",
    authDomain: "weights-b4e62.firebaseapp.com",
    databaseURL: "https://weights-b4e62.firebaseio.com",
    projectId: "weights-b4e62",
    storageBucket: "weights-b4e62.appspot.com",
    messagingSenderId: "529084520007"
  }
  firebase.initializeApp(config);

  database = firebase.database();
  let ref = database.ref('weights');

  ref.on('value', gotData, errData)



  catala()
};

let num;

function saveWeights() {
  console.log("Sending data to firebase...");

  let weightsDatabase = database.ref('weights');
  let colors = [r, g, b]

  num++

  let weights = {
    wih1: nn.ih1_weights.data,
    wh1h2: nn.h1h2_weights.data,
    wh2o: nn.h2o_weights.data,
    color: colors,
    num: num
}

  let send = weightsDatabase.update(weights, finished)
}

function finished(err) {
  if(err) {
    console.warn("Ooops, something went wrong with firebase!");
    console.error(err)
  } else {
    console.warn("Data saved successfully!");
  }
}

function gotData(data) {
  let weights = data.val()
  /*let keys = Object.keys(weights)
  console.log(keys)
  let i = keys.length-1
  let k = keys[i]*/

  nn.ih1_weights.data = weights.wih1
  nn.h1h2_weights.data = weights.wh1h2
  nn.h2o_weights.data = weights.wh2o
  num = weights.num

}

function errData(err) {
  console.log("Error")
}
