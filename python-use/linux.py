# python2
from ctypes import *

pDll = CDLL("../libhello/build/libhello.so")

res = pDll.add(1,2)

print(res)
