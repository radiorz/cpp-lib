from ctypes import *
import os

current_dir = os.path.dirname(os.path.abspath(__file__))

# the_path= os.path.join(current_dir,'libhello.dll')
the_path= 'libhello.dll'
cdll.LoadLibrary(the_path)  
lib = CDLL(the_path)       
# lib.add.argtypes = [ctypes.c_int, ctypes.c_int]
# lib.add.restype = ctypes.c_int
result = lib.add(1,2)
# lib.hello("world")
 