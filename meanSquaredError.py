# coding=utf-8
__author__ = 'vilyin'

import numpy as np
import matplotlib.pyplot as plt

def meanSquaredError(ringc, crn):
    """
    Фитнесс функция, как сумма среднеквадратичных невязок (Mean squared error)
    http://en.wikipedia.org/wiki/meanSquaredError
    """
    n = len(ringc)
    s = 0.0
    for i in range(n):
        s += (crn[i] - ringc[i]) ** 2
    return -1.0 * (1.0 / float(n)) * s

def  interval_random_sample(n, a, b):
    return (b - a) * np.random.random_sample(n) + a

# test
min_crn = 0.0
max_crn = 2.0
count_year = 15
irs1 = interval_random_sample(count_year, min_crn, max_crn)
irs2 = interval_random_sample(count_year, min_crn, max_crn)
print(type(irs1), irs1, irs2, meanSquaredError(irs1, irs2))
for i in range(10):
    irs1 = interval_random_sample(count_year, min_crn, max_crn)
    irs2 = interval_random_sample(count_year, min_crn, max_crn)
    print(meanSquaredError(irs1, irs2))

x = np.linspace(1, 15, 15)
line, = plt.plot(x, irs1)
line, = plt.plot(x, irs2)
plt.show()
