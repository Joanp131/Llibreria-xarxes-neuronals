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
      1. Agafar les senyals d'entrada que ha rebut i convertir-les en matrius
      2. Normalitar aquestes senyals d'entrada
      3. Obtenir les respostes de la capa oculta
      4. Obtenir les respostes i passar-les a array
      5. Passar els resultats per la funció softmax i retornar-los
    */
    //console.clear()

    //1.
    this.input_values = new Matrix(input_values.lenght, 1)
    for (let i = 0; i < input_values.lenght; i++) {
      this.data[i][0] = input_values[i]
    }
    this.input_values.print()
    //2.
    this.input_values.map(normalize)

    //3.
    this.hidden1_ans = Matrix.multiply(this.ih1_weights, this.input_values);
    this.hidden1_ans.map(sigmoid)

    this.hidden2_ans = Matrix.multiply(this.h1h2_weights, this.hidden1_ans)
    this.hidden2_ans.map(sigmoid)

    //4.
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

    //5.
    let result_array = softmax(output_array)
    return result_array

  }

  backpropagation(guess, realAns) {

    /* Què fa aquesta funció?
      1. Agafa els valors que ha calculat com a senyal de sortida i els reals i els passa a matrius.
        Hi ha un problema en aquesta part: La funció que serveix per passar els arrays a matrius només serveix en aquest cas, per tant no es pot utilitzar per guardar els pesos.
      2. Calcula l'error de la columna 'output'
      3. Calcula l'error de les capes ocultes
      4. Calcula l'error de la capa d'entrada
      5. Falta fer la part en la que es calcula el 'deltaWeight' i es suma als pesos corresponents
    */
    console.log('backpropagation has started')

    //1.
    this.guess = Matrix.fromArray(guess)
    this.realAns = Matrix.fromArray(realAns)

    //2.
    this.outErr = Matrix.subtract(this.realAns, this.guess)

    //3.
    this.h2o_weights_t = Matrix.transpose(this.h2o_weights)
    this.err_h2 = Matrix.multiply(this.h2o_weights_t, this.outErr)

    this.h1h2_weights_t = Matrix.transpose(this.h1h2_weights)
    this.err_h1 = Matrix.multiply(this.h1h2_weights_t, this.err_h2)

    //4.
    this.ih1_weights_t = Matrix.transpose(this.ih1_weights)
    this.err_int = Matrix.multiply(this.ih1_weights_t, this.err_h1)

    console.log('backpropagation has ended')
  }
}
