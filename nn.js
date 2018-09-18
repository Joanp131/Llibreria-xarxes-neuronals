function normalize(x) {
  return x /= 255
}

function sigmoid(z) {
  return 1 / (1 + Math.exp(-z))
}

function softmax(arr) {
  let esum = 0;
  let result = []
  for(let i = 0; i < arr.length; i++) {
    esum += Math.exp(arr[i])
  }

  for (let i = 0; i < arr.length; i++) {
    result[i] = Math.exp(arr[i]) / esum
  }
  return result

}

class NeuralNetwork {
  constructor(inputs, hidden_cols, hidden_nodes, output_nodes) {
    this.inputs = inputs
    this.hidden_cols = hidden_cols
    this.hidden_nodes1 = hidden_nodes
    this.hidden_nodes2 = hidden_nodes
    this.output_nodes = output_nodes

    this.ih1_weights = new Matrix(this.hidden_nodes1, this.inputs);
    this.ih1_weights.randomize();
    this.h1h2_weights = new Matrix(this.hidden_nodes2, this.hidden_nodes1);
    this.h1h2_weights.randomize();
    this.h2o_weights = new Matrix(this.output_nodes, this.hidden_nodes2)
    this.h2o_weights.randomize()
  }

  feedforward(input_values) {
    /* Què ha de fer aquesta funció?
      1. Agafar les senyals d'entrada que ha rebut i normalitzar-les
      2. Obtenir les respostes de la capa oculta
      3. Obtenir les respostes i passar-les a array
      4. Passar els resultats per la funció softmax i retornar-los
    */
    console.clear()

    //1.
    this.input_values = Matrix.fromArray(input_values)
    this.input_values.map(normalize)

    //2.
    this.hidden1_ans = Matrix.multiply(this.ih1_weights, this.input_values);
    this.hidden1_ans.map(sigmoid)

    this.hidden2_ans = Matrix.multiply(this.h1h2_weights, this.hidden1_ans)
    this.hidden2_ans.map(sigmoid)

    //3.
    this.output_ans = Matrix.multiply(this.h2o_weights, this.hidden2_ans)
    let output_array = this.output_ans.toArray();

    /*-----------Printing things-------------------------------------Printing things-------------------------------------------------------------------------------
    //console.log("Input to hidden 1 weights: ")
    //this.ih1_weights.print()

    //console.log("Hidden 1 answers: ")
    //this.hidden1_ans.print()

    //console.log("Hidden 1 to hidden 2 weights")
    //this.h1h2_weights.print()

    //console.log("Hidden 2 answers: ")
    //this.hidden2_ans.print()

    //console.log("Hidden 2 to output weights")
    //this.h2o_weights.print()

    //console.log("Outputs: ")
    //this.output_ans.print()

    //console.log("Output array: ")
    //console.table(output_array);
    */

    //4.
    let result_array = softmax(output_array)
    return result_array

  }

  backpropagation(guess, realAns) {
    console.log('backpropagation has started')

    //--------------Calculate the output error;
    this.guess = Matrix.fromArray(guess).print()
    this.realAns = Matrix.fromArray(realAns).print()

/*
    this.outErr = Matrix.subtract(this.realAns, this.guess)
    this.outErr.print()

    this.h2o_weights_t = Matrix.transpose(this.h2o_weights)
    this.err_h2 = Matrix.multiply(this.h2o_weights_t, this.outErr)

    this.h1h2_weights_t = Matrix.transpose(this.h1h2_weights)
    this.err_h1 = Matrix.multiply(this.h1h2_weights_t, this.err_h2)

    this.ih1_weights_t = Matrix.transpose(this.ih1_weights)
    this.err_int = Matrix.multiply(this.ih1_weights_t, this.err_h1)

    console.log('backpropagation has ended')
  */}
}
