function normalize(x) {
  return x /= 255;
};

function sigmoid(z) {
  return 1 / (1 + Math.exp(-z));
};

function softmax(arr) {
  let esum = 0;
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    esum += Math.exp(arr[i]);
  };

  for (let i = 0; i < arr.length; i++) {
    result[i] = Math.exp(arr[i]) / esum;
  };
  return result;

};

function dsigmoid(y) {
  return y * (1-y);

};

function crossEntropy(yhat, y) {
   let result = new Matrix(2, 1);
   for (let i = 0; i < result.rows; i++) {
     result.data[i][0] = -(y.data[i][0]*Math.log10(yhat.data[i]) + (1 - y.data[i]) * Math.log10(1 - yhat.data[i]));
   };
   return result;

};

class NeuralNetwork {
  constructor(inputs, hidden_cols, hidden_nodes, output_nodes) {
    this.inputs = inputs;
    this.hidden_cols = hidden_cols;
    this.hidden_nodes1 = hidden_nodes;
    this.hidden_nodes2 = hidden_nodes;
    this.output_nodes = output_nodes;

    this.ih1_weights = new Matrix(this.hidden_nodes1, this.inputs);
    this.h1h2_weights = new Matrix(this.hidden_nodes2, this.hidden_nodes1);
    this.h2o_weights = new Matrix(this.output_nodes, this.hidden_nodes2);
  };

  feedforward(input_values) {

    /*console.clear()*/

    /*Transforms input array into a 3x1 matrix*/
    this.input_values = new Matrix(input_values.length, 1);
    for (let i = 0; i < input_values.length; i++) {
        this.input_values.data[i][0] = input_values[i];
    };

    /* Normalizes the values of the input matrix by dividing each one by 255 (max rgb value) */
    this.input_values.map(normalize);

    /* Calculates the result of the Hidden 1 layer by doing "z = w * x" */
    this.hidden1_ans = Matrix.multiply(this.ih1_weights, this.input_values);
    this.hidden1_ans.map(sigmoid);

    /* Calculates the result of the second column of the hidden layer */
    this.hidden2_ans = Matrix.multiply(this.h1h2_weights, this.hidden1_ans);
    this.hidden2_ans.map(sigmoid);

    /* Calculates the output and enters the values in an array */
    this.output_ans = Matrix.multiply(this.h2o_weights, this.hidden2_ans);
    let output_array = this.output_ans.toArray();

    /* Normalizes the output with the softmax function */
    this.result_array = softmax(output_array);

    /* Returns the result */
    return this.result_array;
  };

  backpropagation(ans, realAns) {
    let learning_rate = 0.01;

    /*Get the guess from the feedforward and the real answer from the user and make a matrix for each one*/
    this.guess = Matrix.fromArray(ans);
    this.realAns = Matrix.fromArray(realAns);

    /*Calculate the error of every layer*/
    //this.outErr = crossEntropy(this.guess, this.realAns);

    this.h2o_weights_t = Matrix.transpose(this.h2o_weights)
    this.h1h2_weights_t = Matrix.transpose(this.h1h2_weights)
    this.ih1_weights_t = Matrix.transpose(this.ih1_weights)
    this.outErr = Matrix.subtract(this.realAns, this.guess);
    this.err_h2 = Matrix.multiply(this.h2o_weights_t, this.outErr);
    this.err_h1 = Matrix.multiply(this.h1h2_weights_t, this.err_h2);
    this.err_int = Matrix.multiply(this.ih1_weights_t, this.err_h1);

    /*Calculate the delta weights for the hidden2 - output weights
        DeltaWeights = lr * error * gradient * hidden transposed
        lr = scalar number
        error = vector
        gradient = vector
        hidden transposed = linear matrix
    */
    let gradients1 = Matrix.map(this.guess, dsigmoid);
    gradients1.multiply(this.outErr);
    gradients1.multiply(learning_rate);
    let hidden2_T = Matrix.transpose(this.hidden2_ans);
    this.weights_h2o_deltas = Matrix.multiply(gradients1, hidden2_T);
    this.h2o_weights.add(this.weights_h2o_deltas);

    /*Calculate the delta weights for the hidden 1 - hidden 2 weights*/
    let gradients2 = Matrix.map(this.hidden2_ans, dsigmoid)
    gradients2.multiply(this.err_h2)
    gradients2.multiply(learning_rate)
    let hidden1_T = Matrix.transpose(this.hidden1_ans)
    this.weigths_h1h2_deltas = Matrix.multiply(gradients2, hidden1_T)
    this.h1h2_weights.add(this.weigths_h1h2_deltas)

    /*Calculate the delta weights for the input - hidden 1 weights*/
    let gradients3 = Matrix.map(this.hidden1_ans, dsigmoid)
    gradients3.multiply(this.err_h1)
    gradients3.multiply(learning_rate)
    let inputs_T = Matrix.transpose(this.input_values)
    this.weigths_ih1_deltas = Matrix.multiply(gradients2, hidden1_T)
    this.ih1_weights.add(this.weigths_ih1_deltas)

    saveWeights();
  };
}
