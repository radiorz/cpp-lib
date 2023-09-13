from ctypes import *

pDll = CDLL("./libhello.dll")

res = pDll.add(1,2)

print(res)
