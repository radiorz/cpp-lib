from ctypes import *

pDll = CDLL("../libhello/build/libhello.dll")

res = pDll.add(1,2)

print(res)
