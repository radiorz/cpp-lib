from ctypes import *
pDllPath = 'libhello.dll'

pDll = CDLL(pDllPath,winmode=0)
res = pDll.add(1,2)


print(res)
