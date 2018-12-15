class Matrix {
  //Initialize the matrix
  constructor(rows, cols) {
    this.rows = rows
    this.cols = cols
    this.data = []

    for (let i = 0; i < this.rows; i++) {
      this.data[i] = [];

      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = 5
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

  static transpose(matrix) {
    let result = new Matrix(matrix.cols, matrix.rows)

    for (let i = 0; i < matrix.rows; i++) {
      for (let j = 0; j < matrix.cols; j++) {
        result.data[j][i] = matrix.data[i][j]
      }
    }
    return result
  }

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
      console.error("Invalid Matrix mutiplication")
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
      if(n instanceof Matrix) {
        for(let i = 0; i < this.rows; i++) {
          for(let j = 0; j < this.cols; j++) {
            this.data[i][j] *= n.data[i][j]
          }
        }
      } else {
      //Scalar product
        for (let i = 0; i < this.rows; i++) {
          for (let j = 0; j < this.cols; j++) {
            this.data[i][j] *= n
          }
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

  static map(matr, fn) {
    let result = new Matrix(matr.rows, matr.cols)

    for (let i = 0; i < matr.rows; i++) {
      for (let j = 0; j < matr.cols; j++) {
        let val = matr.data[i][j]
        result.data[i][j] = fn(val)
      }
    }
    return result
  }

  print() {
    console.table(this.data)
    console.log("");
  }

}
