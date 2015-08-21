# coding=utf-8
__author__ = 'vilyin'

import numpy as np


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

irs = interval_random_sample(15, 0.1, .19)
print(irs)
