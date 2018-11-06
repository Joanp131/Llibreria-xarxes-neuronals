import numpy as np
import math as m
import time as t

"""
Feedforward
"""
time1 = t.time()
def CrossEntropy(p, y):
    return -(y*m.log10(p) + (1-y)*m.log(1-p))

def feedforward(inputs, weights):
    z = np.dot(weights, inputs)
    sm = softmax(z)
    print(sm)

def softmax(X):
    exps = np.exp(X)
    return exps / np.sum(exps)


hidden = np.matrix('3;2;8;-5')
weights = np.random.rand(2,4)

feedforward(hidden, weights)

time2 = t.time()
totaltime = round((time2 - time1)*1000, 2)
print("Time for feedforward: ", totaltime, "millis")

"""
Backpropagation
"""
ans = np.matrix('1;0')
print("Ans: ", ans)

