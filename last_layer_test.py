import numpy as np
import math as m

hidden=0
weights=0

def main():
    hidden = np.matrix('3;2;8;-5')

    #Weights are labeled from output to hidden
    weights = np.random.rand(2,4)

def CrossEntropy(p, y):
    return -(y*m.log10(p) + (1-y)*m.log(1-p))

def feedforward(inputs, weights):
    z = np.dot(weights, inputs)
    sm = softmax(z)
    print(sm)

def softmax(X):
    exps = np.exp(X)
    return exps / np.sum(exps)

main()
feedforward(hidden, weights)
#printOUT()
