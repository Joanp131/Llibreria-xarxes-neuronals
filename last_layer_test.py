import numpy as np
import math as math

hidden = np.matrix('3;2;8;-5')

#Weights are labeled from output to hidden
weights = np.matrix('0.1,0.2,0.3,0.4;0.5,0.6,0.7,0.8')
print(hidden)
print(weights)

def CrossEntropy(yHat, y):
    if yhat == 1:
      x = -math.log10(y)
      print( "Node 1 err: ", x )
    else:
      z = -math.log10(1 - y)
      print( "Node 2 err: ", z )

y1 = float(input("Answer given by NN that should be one: "))
y0 = 1-y1
yhat = 1

print("Y1: ", y1, "\t||\tY0: ", y0)

CrossEntropy(1, y1)
CrossEntropy(0, y0)
