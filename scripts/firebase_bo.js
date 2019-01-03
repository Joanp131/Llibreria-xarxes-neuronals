var config = {
  apiKey: "AIzaSyCnnz5l9BuDYI5k-65GPF1n2YiGelfMWlY",
  authDomain: "weights-b4e62.firebaseapp.com",
  databaseURL: "https://weights-b4e62.firebaseio.com",
  projectId: "weights-b4e62",
  storageBucket: "weights-b4e62.appspot.com",
  messagingSenderId: "529084520007"
}
firebase.initializeApp(config);

let num;

function retrieveData() {
  firebase.database().ref('weights').on("value", data => {
    let weights = data.val()

    nn.ih1_weights.data = weights.wih1
    nn.h1h2_weights.data = weights.wh1h2
    nn.h2o_weights.data = weights.wh2o
    num = weights.num
  }, err => console.error(err))

  console.warn("Data successfully retrieved from Firebase App!")
}

function saveWeights() {
  num++;
  let colors = [r, g, b];

  let weights = {
    wih1: nn.ih1_weights.data,
    wh1h2: nn.h1h2_weights.data,
    wh2o: nn.h2o_weights.data,
    color: colors,
    num: num
  }

  firebase.database().ref('weights').update(weights, err => {
    if (err) {
      console.warn("Ooops, something went wrong with firebase!");
      console.error(err)
    } else {
      if (arguments[0] || arguments[0] == undefined) {
        console.warn("Data saved successfully to Firebase!")
      }
    }
  })
}
