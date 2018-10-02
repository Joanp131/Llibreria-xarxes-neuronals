/* Operacions actuals de la llibreria de matrius:
  1. Convert: Converteix un "array" en forma de matriu en matriu
  2. FramArray: Converteix un array en matriu
  3. ToArray: Converteix una matriu en array
  4. Transpose: Transposa una matriu
  5. Randomize: Assigna valors random a tots els nombres d'una matriu
  6. Add: Suma dues matrius. El resultat queda a la primera matriu
  7. subtract: Resta dues matrius. Retorna una nova matriu.
  8. Multiply: Multiplica dues matrius. Retorna una nova matriu com a resultat.
  9. Multiply: Fa la multiplicació escalar d'una matriu. Aquesta funció canvia la matriu
  10. Map: Fa passar cada un dels nombres per una funció assignada
  11. Print: Imprimeix a la consola la matriu
*/

class Matrix {
  //Initialize the matrix
  constructor(rows, cols) {
    this.rows = rows
    this.cols = cols
    this.data = []

    for (let i = 0; i < this.rows; i++) {
      this.data[i] = [];

      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = 1
      }
    }
  }

  static convert(arr) {
    if (arr instanceof Array) {
      let result = new Matrix(arr.length, arr[0].length)
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          result.data[i][j] = arr[i][j]
        }
      }
      return result
    } else {
      console.error('You must give an array to convert')
      return undefined
    }
  }

  static fromArray(arr) {
    let m = new Matrix(arr.length, 1)

    for(let i = 0; i < arr.length; i++) {
      m.data[i][0] = arr[i]
    }
    return m
  }

  toArray() {
    let arr = []
    for (let j = 0; j < this.rows; j++) {
      for (let i = 0; i < this.cols; i++) {
        arr.push(this.data[j][i])
      }
    }
    return arr
  }

  //Transpose Matrix
  static transpose(matrix) {
    let result = new Matrix(matrix.cols, matrix.rows)

    for (let i = 0; i < matrix.rows; i++) {
      for (let j = 0; j < matrix.cols; j++) {
        result.data[j][i] = matrix.data[i][j]
      }
    }
    return result
  }

  //Randomixe Matrix
  randomize(n){
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = Math.random() * 2 - 1
      }
    }
  }

  //Addition
add(n){

    if(n instanceof Matrix) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] += n.data[i][j]
        }
      }
    } else {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] += n
        }
      }
    }
  }

  static subtract(a, b) {
    //return new matrix a-b
    let result = new Matrix(a.rows, b.cols)

    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.cols; j++) {
        result.data[i][j] = a.data[i][j] - b.data[i][j]
      }
    }

    return result

  }

  static multiply(a, b) {
    if (a.cols !== b.rows) {
      console.error('Invalid Matrix mutiplication')
      return undefined
    }
    let result = new Matrix(a.rows, b.cols)
    for(let i = 0; i < result.rows; i++) {
      for(let j = 0; j < result.cols; j++){
        let sum = 0
        for (let k = 0; k < a.cols; k++) {
          sum += a.data[i][k] * b.data[k][j]
        }
        result.data[i][j] = sum
      }
    }
    return result
  }
  //Scalar multiplication
  multiply(n){
      //Scalar product
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] *= n
        }
      }
  }

  map(fn){
      //Scalar product
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          let val = this.data[i][j]
          this.data[i][j] = fn(val)
        }
      }
  }

  print() {
    console.table(this.data)
  }

}
